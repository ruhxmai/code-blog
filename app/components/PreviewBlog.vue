<style scoped>
    .font-inter {
        font-family: "Inter", sans-serif;
    }

    /* Эффект глитча при шифровании - как в оригинале */
    .post-card__title.decrypting {
        animation: glitch 0.1s infinite;
    }

    @keyframes glitch {
        0% { text-shadow: 2px 0 #00ff66, -2px 0 #ff0066; }
        25% { text-shadow: -2px 0 #00ff66, 2px 0 #ff0066; }
        50% { text-shadow: 0 2px #00ff66, 0 -2px #ff0066; }
        75% { text-shadow: 2px 2px #00ff66, -2px -2px #ff0066; }
        100% { text-shadow: -2px 2px #00ff66, 2px -2px #ff0066; }
    }

    /* После расшифровки - зелёное свечение */
    .post-card__title.decrypted {
        text-shadow: 0 0 10px rgba(0, 255, 102, 0.15);
    }

    /* Зелёные символы во время анимации */
    :deep(.scramble-char) {
        color: #00ff66;
        text-shadow: 0 0 5px #00ff66;
    }
</style>

<template>
    <NuxtLink :to="`/post/${slug}`">
        <div 
            ref="cardRef"
            class="bg-[rgba(15,15,15,0.8)] mt-[20px] py-[20px] px-[24px] rounded-[8px] border-[1px] post-card border-[#1a1a1a] hover:border-[rgba(0,255,102)] hover:bg-[rgba(22,22,22,0.9)] hover:translate-x-[4px] duration-200 cursor-pointer"
            @mouseenter="handleMouseEnter"
        >
            <p ref="dateRef" class="text-[12px] text-[#555555] mb-[8px] font-mono">{{ date }}</p>
            <h3 ref="titleRef" class="text-[18px] text-[#e0e0e0] mb-[8px] font-inter post-card__title font-mono">{{ title }}</h3>
            <p ref="excerptRef" class="text-[#888888] font-inter text-[14px] font-mono">{{ description }}</p>
            <div class="flex mt-[12px] flex-wrap gap-[6px]">
                <span 
                    v-for="(cat, index) in categories" 
                    :key="cat" 
                    :ref="el => setTagRef(el, index)"
                    class="bg-[rgba(0,255,102,0.08)] py-[0.2rem] px-[0.5rem] rounded-[4px] flex text-[0.7rem] text-[#00cc52] font-mono"
                >{{ cat }}</span>
            </div>
        </div>

    </NuxtLink>
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const props = defineProps({
        title: String,
        date: String,
        description: String,
        slug: String,
        categories: Array
    })

    // Template refs

    const titleRef = ref(null)
    const tagRefs = ref([])

    // Сохраняем refs для тегов
    const setTagRef = (el, index) => {
        if (el) {
            tagRefs.value[index] = el
        }
    }

    // Символы для шифрования (матрица-стайл) - как в оригинале
    const chars = '!@#$%^&*()_+-=[]{}|;:<>?/\\~`01アイウエオカキクケコサシスセソタチツテト'

    // Класс для эффекта дешифровки
    class TextScramble {
        constructor(el, originalText) {
            this.el = el
            this.originalText = originalText
            this.isAnimating = false
            this.frame = 0
            this.queue = []
            this.frameRequest = null
        }

        // Шифруем текст (рандомные символы)
        scramble() {
            const length = this.originalText.length
            let result = ''
            for (let i = 0; i < length; i++) {
                if (this.originalText[i] === ' ') {
                    result += ' '
                } else {
                    result += chars[Math.floor(Math.random() * chars.length)]
                }
            }
            this.el.innerText = result
            this.el.classList.add('decrypting')
        }

        // Расшифровываем текст посимвольно
        decrypt(delay = 0) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    if (this.isAnimating) {
                        this.stop()
                    }
                    this.isAnimating = true

                    const text = this.originalText
                    const length = text.length

                    // Создаём очередь анимации для каждого символа
                    this.queue = []
                    for (let i = 0; i < length; i++) {
                        const from = chars[Math.floor(Math.random() * chars.length)]
                        const to = text[i]
                        const start = Math.floor(Math.random() * 20) // Задержка старта
                        const end = start + Math.floor(Math.random() * 20) + 10 // Длительность
                        this.queue.push({ from, to, start, end })
                    }

                    this.frame = 0
                    this.update(resolve)
                }, delay)
            })
        }

        update(resolve) {
            let output = ''
            let complete = 0

            for (let i = 0; i < this.queue.length; i++) {
                let { from, to, start, end } = this.queue[i]

                if (to === ' ') {
                    output += ' '
                    complete++
                    continue
                }

                if (this.frame >= end) {
                    // Символ расшифрован
                    complete++
                    output += to
                } else if (this.frame >= start) {
                    // Символ ещё шифруется - показываем случайный с зелёным цветом
                    const randomChar = chars[Math.floor(Math.random() * chars.length)]
                    output += `<span class="scramble-char">${randomChar}</span>`
                } else {
                    // Символ ещё не начал расшифровываться
                    output += from
                }
            }

            this.el.innerHTML = output

            if (complete === this.queue.length) {
                // Анимация завершена
                this.el.classList.remove('decrypting')
                this.el.classList.add('decrypted')
                this.isAnimating = false

                // Убираем класс через время
                setTimeout(() => {
                    this.el.classList.remove('decrypted')
                }, 500)

                resolve()
            } else {
                this.frame++
                this.frameRequest = requestAnimationFrame(() => this.update(resolve))
            }
        }

        stop() {
            if (this.frameRequest) {
                cancelAnimationFrame(this.frameRequest)
            }
            this.isAnimating = false
        }

        reset() {
            this.stop()
            this.el.innerText = this.originalText
            this.el.classList.remove('decrypting', 'decrypted')
        }
    }

    // Хранилище скрамблеров
    let scramblers = []
    let isAnimating = false

    // Инициализация после монтирования
    onMounted(() => {
        scramblers = [
            { scrambler: new TextScramble(titleRef.value, props.title), delay: 0, type: 'title' },
        ]
    })

    // Обработчик наведения
    const handleMouseEnter = async () => {
        if (isAnimating || scramblers.length === 0) return
        isAnimating = true

        // Шифруем всё мгновенно
        scramblers.forEach(({ scrambler }) => {
            scrambler.scramble()
        })

        // Пауза для драматического эффекта
        await new Promise(r => setTimeout(r, 100))

        // Расшифровываем
        const promises = scramblers.map(({ scrambler, delay }) => 
            scrambler.decrypt(delay)
        )

        await Promise.all(promises)
        isAnimating = false
    }
</script>