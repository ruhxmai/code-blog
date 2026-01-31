<style scoped>
    /* Лава-лампа фон */
    .lava-bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        overflow: hidden;
        filter: blur(80px);
    }

    .lava-blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(20px);
        opacity: 0.6;
        animation: float linear infinite;
    }

    .lava-blob:nth-child(1) {
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(0, 255, 102, 0.4) 0%, transparent 70%);
        left: -100px;
        animation-duration: 25s;
    }

    .lava-blob:nth-child(2) {
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(0, 204, 82, 0.3) 0%, transparent 70%);
        right: -50px;
        animation-duration: 30s;
        animation-delay: -5s;
    }

    .lava-blob:nth-child(3) {
        width: 350px;
        height: 350px;
        background: radial-gradient(circle, rgba(0, 255, 150, 0.35) 0%, transparent 70%);
        left: 30%;
        animation-duration: 35s;
        animation-delay: -10s;
    }

    .lava-blob:nth-child(4) {
        width: 250px;
        height: 250px;
        background: radial-gradient(circle, rgba(0, 180, 80, 0.3) 0%, transparent 70%);
        right: 20%;
        animation-duration: 28s;
        animation-delay: -15s;
    }

    .lava-blob:nth-child(5) {
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(50, 255, 130, 0.25) 0%, transparent 70%);
        left: 50%;
        animation-duration: 32s;
        animation-delay: -8s;
    }

    @keyframes float {

        0%,
        100% {
            transform: translateY(100vh) scale(1);
        }

        50% {
            transform: translateY(-100vh) scale(1.2);
        }
    }
</style>

<template>
    <div class="lava-bg">
        <div class="lava-blob"></div>
        <div class="lava-blob"></div>
        <div class="lava-blob"></div>
        <div class="lava-blob"></div>
        <div class="lava-blob"></div>
    </div>
</template>