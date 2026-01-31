<style>
    /* Header */
    .header {
        padding: 2rem 0;
        border-bottom: 1px solid #1a1a1a;
        margin-bottom: 3rem;
        background: rgba(10, 10, 10, 0.8);
        backdrop-filter: blur(10px);
        position: sticky;
        top: 0;
        z-index: 100;
    }
    .logo::before {
        content: '>';
        animation: blink 1s infinite;
    }
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
</style>

<template>
    <div class="header">
        <div class="container">
            <div class="flex justify-between font-jetbrains-mono">
                <NuxtLink class="flex justify-between gap-2 text-[18px] text-[#00ff66] font-[700]" to="/">
                    <h2 class="logo"></h2>
                    <h2>blog</h2>
                </NuxtLink>
                <div class="flex items-center gap-6">
                    <NuxtLink v-for="nav in navs" :key="nav.name" :to="nav.path" :class="active == nav.name ? 'text-[#00ff66]' : 'text-[#888888]'" class="hover:text-[#00ff66] text-[14px] transition-colors duration-200">
                        {{ nav.name }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const navs = [
        { name: "/posts", path: "/posts" },
        { name: "/about", path: "/about" },
        { name: "/github", path: "https://github.com/ruhxmai" },
    ];

    const props = defineProps({
        active: String
    })

</script>