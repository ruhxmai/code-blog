<style>
    .post-content{
    }
    .post-content p{
        color: #ffffff;
        font-size: 14px;
    }
    .post-content h2{
        color: #ffffff;
        font-size: 24px;
    }
    .margin_block_10{
        /* margin: 10px 0; */
        height: 10px;
    }
    .margin_block_20{
        /* margin: 20px 0; */
        height: 20px;
    }
    .hr_block{
        width: 100%;
        height: 1px;
        background: #1a1a1a;
    }
    .quote{
        color: #888888;
        font-size: 14px;
        font-style: italic;
        border-left: 2px solid #00ff66;
        padding-left: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .green_block_text{
        background-color: #0d1208;
        color: #00ff66;
        border: 1px solid #0f3d1a;
        padding: 0.2em 0.4em;
        border-radius: 4px;
    }
    .green_text_italic{
        color: #00ff66;
        font-style: italic;
    }
    .green_text_normal{
        color: #00ff66;
        font-style: normal;
    }
    .code_block{
        background: #0d1208;
        color: #ffffff;
        padding: 1.25rem;
        border: 1px solid #0f3d1a;
        border-radius: 8px;
    }
    .textDes {
        color: #00ff66;
        font-weight: 600;
    }
    .li_block {
        position: relative;
        padding-left: 1.2rem;
        color: #ffffff;
        margin-bottom: 8px;
        font-size: 14px;
    }

    .li_block::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.65em;
        width: 6px;
        height: 6px;
        background-color: #00ff66;
        border-radius: 50%;
    }
</style>

<template>
    <Lava />
    <Header active=""/>
    <div class="container">
        <NuxtLink to="/posts" class="text-[#555555] hover:text-[#00ff66] duration-200 cursor-pointer text-[14px]">← Все записи</NuxtLink>
        
        <div v-if="data">
            <img class="w-full mt-[20px] rounded-[10px]" :src="data.coverImage" alt="">
            <p class="text-[#555555] text-[14px] mt-[32px] mb-[12px]">📅 {{ data.date }}</p>
            <h3 class="text-[18px] xl:text-[32px] 2xl:text-[32px] text-[#e0e0e0] font-[600] mb-[16px] font-inter">{{ data.title }}</h3>
            <p class="text-[#888888] ">{{ data.description }}</p>
            <div class="flex mt-[12px] flex-wrap gap-[6px]">
                <span 
                    v-for="cat in data.categories" 
                    :key="cat"
                    class="bg-[rgba(0,255,102,0.08)] py-[0.2rem] px-[0.5rem] rounded-[4px] flex text-[0.7rem] text-[#00cc52] font-mono"
                >{{ cat }}</span>
            </div>
            <div class="w-full h-[1px] bg-[#1a1a1a] my-[40px]"></div>
            <ContentRenderer :value="data" class="post-content" />
        </div>
        <div v-else class="text-red-500">
            Статья не найдена
        </div>
    </div>
    <Footer />
</template>

<script setup>
    const route = useRoute()

    const { data } = await useAsyncData(
        `post-${route.params.slug}`,
        () => queryCollection('post')
            .where('stem', '=', `post/${route.params.slug}`)
            .first()
    )


</script>