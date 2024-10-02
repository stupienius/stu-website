<template>
  <button
    id="arrowbutton"
    class="group flex h-20 flex-col items-center justify-end"
  >
    <div
      id="popup"
      class="hidden h-8 w-32 rounded-lg bg-stone-600 text-center font-maamli text-lg text-rose-400 backdrop-blur-lg group-hover:block group-hover:animate-showPopup"
    >
      <P> {{ popup }} </P>
    </div>
    <div :style="{ transform: `rotate(${props.rotate}deg)` }">
      <div
        ref="arrow"
        class="h-10 w-48 animate-bounce font-maamli text-3xl font-black text-purple-950"
      >
        ^
      </div>
    </div>
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({ rotate: String, popup: String });
const arrow = ref(null);

onMounted(() => {
  arrow.value.style.transform = `rotate(${props.rotate}deg)`;
});
</script>
<style>
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(20px); /* Start from below and zoomed in */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* End at normal size */
  }
}

.popupAnimatioin {
  animation: appear 0.25s linear forwards;
}
</style>
