<script setup></script>

<template>
  <div id="app" class="overflow-hidden bg-stone-900">
    <transition name="glitch" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style scoped>
.glitch-enter-active,
.glitch-leave-active {
  animation: glitchIn 0.5s ease;
  position: relative;
}

.glitch-leave-active {
  animation: glitchOut 0.5s ease;
}

@keyframes glitchIn {
  0% {
    transform: translate(0);
    opacity: 0;
  }

  20% {
    transform: translate(-2px, 2px);
    opacity: 0.4;
  }

  40% {
    transform: translate(2px, -2px);
    opacity: 0.6;
  }

  60% {
    transform: translate(-1px, 1px);
    opacity: 0.8;
  }

  80% {
    transform: translate(1px, -1px);
    opacity: 1;
  }

  100% {
    transform: translate(0);
  }
}

@keyframes glitchOut {
  0% {
    transform: translate(0);
    opacity: 1;
  }

  20% {
    transform: translate(1px, -1px);
    opacity: 0.8;
  }

  40% {
    transform: translate(-1px, 1px);
    opacity: 0.6;
  }

  60% {
    transform: translate(2px, -2px);
    opacity: 0.4;
  }

  80% {
    transform: translate(-2px, 2px);
    opacity: 0.2;
  }

  100% {
    transform: translate(0);
    opacity: 0;
  }
}
</style>
