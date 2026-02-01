<style scoped>
    @keyframes blink {
        0%,50% { opacity: 1 }
        51%,100% { opacity: 0 }
    }
</style>

<template>
    <Lava />
    <Header active="/about"/>
    <div class="container">
        <div class="flex flex-col items-center">
            <div class="bg-[#161616] flex items-center w-full py-[0.75rem] px-[1rem] border border-[rgb(26,26,26)] rounded-[12px_12px_0_0] border-[1px] border-[#1a1a1a]">
                <div class="flex items-center">
                    <div class="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                </div>
                <p class="text-[#555555] ml-2 text-[0.8rem]">~/about.md</p>
            </div>
            <div class="bg-[rgba(10,10,10,0.95)] border border-[rgb(26,26,26)] rounded-[0_0_12px_12px] p-[24px] mb-[4rem] w-full">
                <div class="flex items-center text-[14px] font-mono mb-[16px]">
                    <p class="text-[#00ff66]">visitor</p>
                    <p class="text-[#e0e0e0]">@</p>
                    <p class="text-[#ff79c6]">blog</p>
                    <p class="text-[#e0e0e0]">:</p>
                    <p class="text-[#00ff66]">~</p>
                    <p class="text-[#e0e0e0]">$</p>

                    <p class="text-[#e0e0e0] ml-2">whoami --verbose</p>
                </div>
                <div class="flex mb-[24px] flex-wrap">
                    <pre class="text-[#00ff66] font-mono text-[10px] leading-tight">
┌─────────────────────────────────────┐
│                                     │
│     ██████╗ ███████╗██╗   ██╗       │
│     ██╔══██╗██╔════╝██║   ██║       │
│     ██║  ██║█████╗  ██║   ██║       │
│     ██║  ██║██╔══╝  ╚██╗ ██╔╝       │
│     ██████╔╝███████╗ ╚████╔╝        │
│     ╚═════╝ ╚══════╝  ╚═══╝         │
│                                     │
└─────────────────────────────────────┘
</pre>
                    <div class="flex flex-col ml-0 lg:ml-6 xl:ml-6 2xl:ml-6 lg:ml-6 text-[14px]">
                        <div class="flex mx-1">
                            <p class="text-[#ff79c6]">name:</p>
                            <p class="text-[#f1fa8c] ml-2">"Developer Name"</p>
                        </div>
                        <div class="flex my-1 mx-1">
                            <p class="text-[#ff79c6]">role:</p>
                            <p class="text-[#f1fa8c] ml-2">"Full-Stack Developer"</p>
                        </div>
                        <div class="flex my-1 mx-1">
                            <p class="text-[#ff79c6]">location:</p>
                            <p class="text-[#f1fa8c] ml-2">"Moscow, Russia"</p>
                        </div>
                        <div class="flex my-1 mx-1">
                            <p class="text-[#ff79c6]">experience:</p>
                            <p class="text-[#f1fa8c] ml-2">5+ years</p>
                        </div>
                        <div class="flex my-1 mx-1">
                            <p class="text-[#ff79c6]">coffee_consumed:</p>
                            <p class="text-[#00ff66] ml-2">∞</p>
                        </div>
                        <div class="flex my-1 mx-1 items-center">
                            <p class="text-[#ff79c6]">status:</p>
                            <p class="text-[#00ff66] ml-2 bg-[rgba(0,255,102,0.08)] py-[3px] px-[9px] rounded-[4px] animate-pulse">● open to work</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center text-[14px] font-mono mb-[16px]">
                    <p class="text-[#00ff66]">visitor</p>
                    <p class="text-[#e0e0e0]">@</p>
                    <p class="text-[#ff79c6]">blog</p>
                    <p class="text-[#e0e0e0]">:</p>
                    <p class="text-[#00ff66]">~</p>
                    <p class="text-[#e0e0e0]">$</p>

                    <p class="text-[#e0e0e0] ml-2">cat bio.txt</p>
                </div>
                <div class="mb-[30px] text-[14px]">
                    <p class="text-[#888888] my-4 mb-4">Разработчик с любовью к чистому коду и ненавистью к unnecessary meetings.</p>
                    <p class="text-[#888888] my-4 mb-4">Превращаю кофе в код с 2019 года. Верю, что хорошая документация — это акт доброты.</p>
                    <div class="flex items-center">
                        <p class="text-[#e0e0e0]">Currently building:</p>
                        <a href="https://kwork.ru/user/ruhx" target="_blank" class="text-[#00ff66] underline decoration-dashed decoration-[#00ff66] ml-2">something cool</a>
                        <p class="ml-2">🚀</p>
                    </div>
                </div>
                <div class="flex items-center text-[14px] font-mono mb-[16px]">
                    <p class="text-[#00ff66]">visitor</p>
                    <p class="text-[#e0e0e0]">@</p>
                    <p class="text-[#ff79c6]">blog</p>
                    <p class="text-[#e0e0e0]">:</p>
                    <p class="text-[#00ff66]">~</p>
                    <p class="text-[#e0e0e0]">$</p>

                    <p class="text-[#e0e0e0] ml-2">ls -la ./skills/</p>
                </div>
                <div class="mb-[30px] text-[14px]">
                    <div class="flex flex-col">
                        <div v-for="skill in skills" :key="skill.name" class="flex items-center justify-between mb-2">
                            <p class="text-[#888888] w-[40%] sm:w-[40%] xl:w-[20%] lg:w-[20%]">{{ skill.name }}</p>
                            <div class="w-[30%] sm:w-[40%] md:w-[30%] lg:w-[50%] xl:w-[60%]">
                                <div class="bg-[#161616] h-[8px] rounded-[4px]">
                                    <div class="bg-[#00cc52] h-[8px] rounded-[4px]" :style="{ width: skill.level + '%' }"></div>
                                </div>
                            </div>
                            <p class="text-[#00cc52]">{{ skill.level }}%</p>
                        </div>
                        <div class="flex w-full flex-wrap mt-4">
                            <div v-for="skill in skills" :key="skill.name" class="mr-2.5 mt-2.5 py-1.5 px-3 text-[12px] border border-[#1a1a1a] rounded-[4px] bg-[#00000000] text-[#888888] text-[10px] hover:cursor-pointer hover:text-[#00ff66] hover:border-[#00ff66] duration-200">
                                {{ skill.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center text-[14px] font-mono mb-[20px]">
                    <p class="text-[#00ff66]">visitor</p>
                    <p class="text-[#e0e0e0]">@</p>
                    <p class="text-[#ff79c6]">blog</p>
                    <p class="text-[#e0e0e0]">:</p>
                    <p class="text-[#00ff66]">~</p>
                    <p class="text-[#e0e0e0]">$</p>

                    <p class="text-[#e0e0e0] ml-2">cat contacts.json</p>
                </div>
                <div class="mb-[30px] bg-[#0d1208] border-1 border-[#0f3d1a] border-solid py-[16px] px-[24px] text-[10px]">
                    <p class="text-[#e0e0e0]">{</p>
                        <div class="ml-[20px]">
                            <div class="flex items-center mb-1">
                                <p class="text-[#ff79c6]">"email"</p><p class="text-[#e0e0e0]">:</p><p class="text-[#f1fa8c]">"typlq@mail.ru",</p>
                            </div>
                            <div class="flex items-center mb-1">
                                <p class="text-[#ff79c6]">"telegram"</p><p class="text-[#e0e0e0]">:</p><p class="text-[#f1fa8c]">"https://t.me/ruhxcore",</p>
                            </div>
                            <div class="flex items-center mb-1">
                                <p class="text-[#ff79c6]">"github"</p><p class="text-[#e0e0e0]">:</p><p class="text-[#f1fa8c]">"https://github.com/ruhxmai",</p>
                            </div>
                            <div class="flex items-center mb-1">
                                <p class="text-[#ff79c6]">"kwork"</p><p class="text-[#e0e0e0]">:</p><p class="text-[#f1fa8c]">"https://kwork.ru/user/ruhx"</p>
                            </div>
                        </div>
                    <p class="text-[#e0e0e0]">}</p>
                </div>
                <div class="flex items-center text-[14px] font-mono mb-[20px]">
                    <p class="text-[#00ff66]">visitor</p>
                    <p class="text-[#e0e0e0]">@</p>
                    <p class="text-[#ff79c6]">blog</p>
                    <p class="text-[#e0e0e0]">:</p>
                    <p class="text-[#00ff66]">~</p>
                    <p class="text-[#e0e0e0]">$</p>

                    <p class="text-[#e0e0e0] ml-2">fortune | cowsay</p>
                </div>
                <div class="mb-[30px] bg-[#0d1208] border-1 border-[#0f3d1a] border-solid py-[16px] px-[24px] text-[14px]">
                    <pre class="text-[#888888] text-[10px]">
/ Лучший код — тот, который не нужно    \
\ писать. Но за него не платят.         /
 ----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
                    </pre>
                </div>
                <div class="flex items-center text-[14px] font-mono mb-[20px]">
                    <p class="text-[#00ff66]">visitor</p>
                    <p class="text-[#e0e0e0]">@</p>
                    <p class="text-[#ff79c6]">blog</p>
                    <p class="text-[#e0e0e0]">:</p>
                    <p class="text-[#00ff66]">~</p>
                    <p class="text-[#e0e0e0]">$</p>

                    <p class="bg-[#00ff66] w-[8px] h-[18px] animate-[blink_1s_step-start_infinite]"></p>
                </div>

            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
    const skills = [
        { name: "TypeScript", level: 95 },
        { name: "React/Nuxt", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "PHP", level: 92 },
        { name: "n8n", level: 90 },
    ]
</script>