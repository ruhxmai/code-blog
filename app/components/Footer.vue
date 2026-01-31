<style scoped>
    .footer {
        padding: 2rem 0;
        border-top: 1px solid #1a1a1a;
        margin-top: 4rem;
        background: rgba(10, 10, 10, 0.8);
        backdrop-filter: blur(10px);
    }
</style>

<template>
    <div class="footer">
        <div class="container">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <h2 class="text-[#00ff66]">©</h2>
                    <p class="text-[#555555] text-[12px]">2026 RUHX</p>
                </div>
                <div class="flex items-center gap-4">
                    <a
                        href="https://kwork.ru/user/ruhx"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[#555555] text-[12px] hover:text-[#00ff66] transition-colors duration-200"
                    >
                        Kwork
                    </a>
                    <a
                        href="https://t.me/ruhxcore"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[#555555] text-[12px] hover:text-[#00ff66] transition-colors duration-200"
                    >
                        Telegram
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>