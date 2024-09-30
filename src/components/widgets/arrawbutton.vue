<template>
  <div id="arrawbutton">
    <button
      ref="button"
      class="h-10 w-10 font-maamli text-3xl font-black text-purple-950"
    >
      ^
    </button>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({ rotate: String });
const button = ref(null);

onMounted(() => {
  if (button.value) {
    button.value.classList.add(`rotate-[${props.rotate}deg]`);
  }
});
</script>
