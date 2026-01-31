<style scoped>
    h3{
        font-family: "Inter", sans-serif;
    }
</style>

<template>
    <Lava />
    <Header />
    <div class="container">
        <div class="mb-[4rem]">
            <h2 class="text-[#00ff66] text-[14px] mb-[8px]">// Привет, мир!</h2>
            <h3 class="text-[32px] text-[#e0e0e0] font-[600] mb-[16px] font-inter">Заметки о коде и технологиях</h3>
            <p class="text-[#888888]">Пишу о веб-разработке, архитектуре и интересных находках. Весь исходный код доступен на GitHub.</p>
        </div>
        <div class="flex justify-between items-center text-[#555555]">
            <p class="text-[12px] mr-[10px] uppercase">Последние записи</p>
            <div class="flex-1 h-[2px] bg-[#1a1a1a]"></div>
        </div> 
        <div>
            <div v-for="blog in latestBlogs" :key="blog.id" class="flex w-full flex-col last:mb-0">
                <PreviewBlog 
                    :title="blog.title.length > 60 ? blog.title.slice(0, 60) + '...' : blog.title"
                    :date="blog.date"
                    :slug="blog.slug"
                    :description="blog.description.length > 100 ? blog.description.slice(0, 100) + '...' : blog.description" 
                    :categories="blog.categories" 
                />
            </div>
        </div>
        <NuxtLink to="/posts" class="block text-[#555555] text-[12px] my-[20px] hover:text-[#00cc52] hover:cursor-pointer">Все записи →</NuxtLink>
    </div>
    <Footer />
</template>

<script setup>
    const { data: blogs, pending } = await useAsyncData(
        'all-posts',
        () =>
            queryCollection('post')
            .order('date', 'DESC')
            .all()
    )

    const latestBlogs = computed(() => {
        // если данных нет, возвращаем пустой массив
        if (!blogs.value) return []

        // иногда Nuxt Content возвращает объект с data
        const postsArray = Array.isArray(blogs.value) ? blogs.value : blogs.value.data

        // если всё ещё нет массива, пусто
        if (!postsArray || !Array.isArray(postsArray)) return []

        return postsArray.slice(0, 3)
    })


    console.log(latestBlogs.value)
</script>