<template>
  <button
    id="arrowbutton"
    class="group flex h-24 flex-col items-center justify-center"
    @click="navigate2"
  >
    <div
      ref="pop"
      id="popup"
      class="h-8 w-32 animate-hidePopup rounded-lg bg-stone-600 text-center font-maamli text-lg text-rose-400 backdrop-blur-lg group-hover:animate-showPopup"
    >
      <p>{{ popup }}</p>
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
import eventBus from "../../utils/eventBus";

const props = defineProps({ rotate: String, popup: String });
const pop = ref(null);
const arrow = ref(null);

function navigate2() {
  eventBus.emit("navigate", props.popup);
  console.log("hello");
}

onMounted(() => {
  //rotate wound'nt be affected by animatin
  arrow.value.style.transform = `rotate(${props.rotate}deg)`;

  //stop the first animation
  pop.value.style.visibility = "hidden";
  setTimeout(() => {
    pop.value.style.visibility = "visible";
  }, 1000);
});
</script>
<style></style>
