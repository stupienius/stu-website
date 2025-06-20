<template>
  <div id="app" class="bg-stone-950">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in" v-if="hasMounted">
        <component :key="router.fullPath" :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const hasMounted = ref(false);

onMounted(() => {
  setTimeout(() => {
    hasMounted.value = true;
  }, 200);
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease;
}

.slide-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

* {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
}

*::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera */
}
</style>
