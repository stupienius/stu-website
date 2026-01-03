<template>
  <div
    id="skill_label"
    class="flex h-[90px] w-64 flex-col items-start rounded-xl p-2"
    :style="{ backgroundColor: col }"
  >
    <div id="skillname" class="font-bubblegum">
      {{ skillName }}
    </div>

    <div id="skillProficiency" class="flex h-[40px] w-64 flex-row gap-1">
      <div
        v-for="(k, index) in proficiency"
        :key="'active-' + k"
        class="via-orange700 h-full w-2 rounded-3xl border-[0.5px] border-solid border-yellow-200 bg-gradient-to-r from-yellow-600 via-orange-700 to-stone-900 bg-[length:256px_100%]"
        :style="{ backgroundPosition: `${index * -12}px 0px` }"
      ></div>

      <div
        v-for="k in 20 - proficiency"
        :key="'inactive-' + k"
        class="h-full w-2 rounded-3xl border border-dotted border-black"
      ></div>
    </div>
  </div>
</template>

<script setup>
const { skillName, proficiency, col } = defineProps({
  skillName: String,
  proficiency: Number,
  col: String,
});
</script>
<style scoped></style>
