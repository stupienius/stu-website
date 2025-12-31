<template>
  <div id="app" class="app-root">
    <!-- SVG Glitch Filter -->
    <svg style="position: absolute; width: 0; height: 0; pointer-events: none" aria-hidden="true">
      <filter id="glitch">
        <feTurbulence id="glitch-noise" type="fractalNoise" baseFrequency="0.002 0.8" numOctaves="2" seed="2"
          result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>

    <!-- Router Transition -->
    <router-view v-slot="{ Component }">
      <transition name="cyber-glitch" mode="out-in">
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
  animation: glitch-in 0.25s ease-out;
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

  20% {
    clip-path: inset(12% 0 78% 0);
    transform: translateX(-30px);
  }

  40% {
    clip-path: inset(38% 0 42% 0);
    transform: translateX(40px);
  }

  60% {
    clip-path: inset(68% 0 22% 0);
    transform: translateX(-25px);
  }

  80% {
    clip-path: inset(20% 0 65% 0);
    transform: translateX(20px);
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

/* ===== VHS 掃描線（可移除） ===== */

.glitch-page::after {
  content: "";
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(to bottom,
      rgba(255, 255, 255, 0.03) 0,
      rgba(255, 255, 255, 0.03) 1px,
      transparent 2px,
      transparent 4px);
  pointer-events: none;
  z-index: 50;
}

/* ===== 隱藏捲軸 ===== */

* {
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  display: none;
}
</style>
