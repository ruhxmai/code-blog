<template>
    <Lava />
    <Header active="/posts"/>
    <div class="container">
        <div class="mb-[3rem]">
            <h2 class="text-[#00ff66] text-[14px] mb-[8px]">// Архив</h2>
            <h3 class="text-[32px] text-[#e0e0e0] font-[600] mb-[16px] font-inter">Все публикации</h3>
            <p class="text-[#888888]">Статьи о коде, инструментах и технологиях</p>
        </div>
        <div class="flex items-center gap-2">
            <p
                class="py-1.5 px-3 text-[12px] border border-[#1a1a1a] rounded-[4px]"
                :class="activeDate == 'all' ? 
                'bg-[#00ff66] text-[#0a0a0a] hover:cursor-pointer' : 
                'bg-[#00000000] text-[#888888] text-[12px] hover:cursor-pointer hover:text-[#00ff66] hover:border-[#00ff66] duration-200'"

                @click="activeDate = 'all'"
            >
                Все
            </p>
            <div v-for="date in dates" :key="date" 
                class="py-1.5 px-3 text-[12px] border border-[#1a1a1a] rounded-[4px]" 
                :class="date == activeDate ? 
                'bg-[#00ff66] text-[#0a0a0a] hover:cursor-pointer' : 
                'bg-[#00000000] text-[#888888] text-[12px] hover:cursor-pointer hover:text-[#00ff66] hover:border-[#00ff66] duration-200'"

                @click="activeDate = date"
            >
                {{ date }}
            </div>

        </div>
        <div>
            <div v-for="item in filteredBlogs" :key="item.year">
                <div v-if="activeDate == 'all'" class="flex justify-between items-center text-[#555555] mt-[20px] mb-[20px]">
                    <p class="text-[12px] mr-[10px] uppercase">{{ item.year }}</p>
                    <div class="flex-1 h-[2px] bg-[#1a1a1a]"></div>
                </div> 
                <PreviewBlog
                v-for="blog in item.blogs"
                class="mb-[15px] mt-[15px]"
                :key="blog.id"
                :title="blog.title"
                :date="blog.date"
                :description="blog.description"
                :categories="blog.categories"
                :slug="blog.slug"
                />
            </div>
        </div>

        
    </div>
    <Footer />
</template>

<script setup>
    const activeDate = useState('activeDate', () => 'all')

    const { data: blogs, pending } = await useAsyncData(
        'all-posts',
        () => queryCollection('post')
            .order('date', 'DESC')
            .all()
    )

    const dates = computed(() => {
        if (!blogs.value) return []
        
        return blogs.value
            .filter(blog => blog.date)
            .map(blog => blog.date.slice(0, 4))
            .filter((year, index, arr) => arr.indexOf(year) === index)
            .sort((a, b) => b - a)
    })

    const groupedBlogs = computed(() => {
        if (!blogs.value) return []
        
        const map = {}

        blogs.value.forEach(blog => {
            if (!blog.date) return
            
            const year = blog.date.slice(0, 4)
            if (!map[year]) map[year] = []
            map[year].push(blog)
        })

        return Object.keys(map)
            .sort((a, b) => b - a)
            .map(year => ({
                year,
                blogs: map[year]
            }))
    })

    const filteredBlogs = computed(() => {
        if (activeDate.value === 'all') {
            return groupedBlogs.value
        }

        return groupedBlogs.value.filter(
            item => item.year === activeDate.value
        )
    })
</script>