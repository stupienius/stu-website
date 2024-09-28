<template>
  <div
    ref="rainContainer"
    class="absolute h-screen w-screen overflow-hidden container"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const rainContainer = ref(null);

const createRainDrop = () => {
  const rainDrop = document.createElement("div");
  const duration = Math.random() * 0.8 + 0.5;

  rainDrop.classList.add(
    "raindrop",
    "absolute",
    "top-0",
    "opacity-80",
    "w-[1px]",
    "h-[50px]",
  );
  rainDrop.style.left = `${Math.random() * 150}vw`;
  rainDrop.style.animation = `fall ${duration}s linear forwards`;

  rainContainer.value.appendChild(rainDrop);

  setTimeout(() => {
    rainDrop.remove();
  }, duration * 1000);
};

const startRain = () => {
  let i = 20;
  while (i--) {
    setTimeout(() => {
      createRainDrop();
    }, i * 50);
  }
};

onMounted(() => {
  setInterval(startRain, 1000);
});
</script>

<style>
@keyframes fall {
  from {
    transform: translateY(-12px) translateX(0) rotate(50deg);
  }
  to {
    transform: translateY(100vh) translateX(-1000px) rotate(50deg);
  }
}

.raindrop {
  will-change: transform;
  transform: rotate(30deg);
  background-color: rgba(255, 255, 255, 0.5);
  filter: blur(1px);
}

.container {
  background-color: transparent;
}
</style>
