<template>
  <div id="app" class="app-root">
    <!-- SVG Glitch Filter -->
    <svg
      style="position: absolute; width: 0; height: 0; pointer-events: none"
      aria-hidden="true"
    >
      <filter id="glitch">
        <feTurbulence
          id="glitch-noise"
          type="fractalNoise"
          baseFrequency="0.002 0.8"
          numOctaves="2"
          seed="2"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="40"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>

    <!-- Router Transition -->
    <router-view v-slot="{ Component }">
      <transition
        name="cyber-glitch"
        mode="out-in"
        @before-leave="updateGlitchEffect"
      >
        <component :is="Component" :key="$route.fullPath" class="glitch-page" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

/* 每次切換路由，隨機 glitch 形狀 */

const updateGlitchEffect = () => {
  const noise = document.getElementById("glitch-noise");
  if (noise) {
    noise.setAttribute("seed", Math.floor(Math.random() * 1000));
  }

  const root = document.documentElement;
  for (let i = 1; i <= 5; i++) {
    const top = Math.floor(Math.random() * 70);
    const height = Math.floor(Math.random() * 15 + 5);
    const bottom = 100 - top - height;
    const move = Math.floor(Math.random() * 100 - 50);

    root.style.setProperty(`--t${i}`, `${top}%`);
    root.style.setProperty(`--b${i}`, `${bottom}%`);
    root.style.setProperty(`--m${i}`, `${move}px`);
  }
};

watch(
  () => route.fullPath,
  () => {
    const noise = document.getElementById("glitch-noise");
    if (noise) {
      noise.setAttribute("seed", Math.floor(Math.random() * 1000));
    }
  },
);
</script>

<style>
/* ===== 基礎 ===== */

.app-root {
  min-height: 100vh;
  background: #000;
  overflow: hidden;
}

.glitch-page {
  position: relative;
  min-height: 100vh;
  background: #000;
}

/* ===== 進場 ===== */

.cyber-glitch-enter-active {
  animation: glitch-in 0.15s ease-out;
}

@keyframes glitch-in {
  from {
    opacity: 0;
    filter: contrast(2) brightness(1.3);
  }

  to {
    opacity: 1;
    filter: none;
  }
}

/* ===== 離場主體 ===== */

.cyber-glitch-leave-active {
  position: absolute;
  inset: 0;
  animation: glitch-main 0.45s steps(1) forwards;
  filter: url(#glitch);
}

/* ===== RGB 分離層 ===== */

.cyber-glitch-leave-active::before,
.cyber-glitch-leave-active::after {
  content: "";
  position: absolute;
  inset: 0;
  background: inherit;
  pointer-events: none;
  mix-blend-mode: screen;
}

.cyber-glitch-leave-active::before {
  animation: glitch-red 0.45s steps(1) forwards;
  filter: drop-shadow(-6px 0 red);
}

.cyber-glitch-leave-active::after {
  animation: glitch-blue 0.45s steps(1) forwards;
  filter: drop-shadow(6px 0 cyan);
}

/* ===== 切片動畫 ===== */

@keyframes glitch-main {
  0% {
    clip-path: inset(0 0 0 0);
    transform: translateX(0);
  }

  16% {
    /* 使用 JS 傳進來的隨機值 */
    clip-path: inset(var(--t1) 0 var(--b1) 0);
    transform: translateX(var(--m1));
  }

  33% {
    clip-path: inset(var(--t2) 0 var(--b2) 0);
    transform: translateX(var(--m2));
  }

  50% {
    clip-path: inset(var(--t3) 0 var(--b3) 0);
    transform: translateX(var(--m3));
  }

  66% {
    clip-path: inset(var(--t4) 0 var(--b4) 0);
    transform: translateX(var(--m4));
  }

  82% {
    clip-path: inset(var(--t5) 0 var(--b5) 0);
    transform: translateX(var(--m5));
  }

  100% {
    clip-path: inset(0 0 100% 0);
  }
}

@keyframes glitch-red {
  0% {
    clip-path: inset(15% 0 70% 0);
    transform: translateX(-20px);
  }

  50% {
    clip-path: inset(45% 0 40% 0);
    transform: translateX(-35px);
  }

  100% {
    clip-path: inset(100% 0 0 0);
  }
}

@keyframes glitch-blue {
  0% {
    clip-path: inset(65% 0 20% 0);
    transform: translateX(25px);
  }

  50% {
    clip-path: inset(30% 0 55% 0);
    transform: translateX(40px);
  }

  100% {
    clip-path: inset(100% 0 0 0);
  }
}

/* ===== 隱藏捲軸 ===== */

* {
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  display: none;
}
</style>
