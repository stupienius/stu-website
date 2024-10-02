<script setup>
import Rain from "../widgets/rain.vue";
import Background from "./background.vue";
import Arrowbutton from "../widgets/arrowbutton.vue";
</script>

<template>
  <div
    id=" mainPage"
    class="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black"
  >
    <Background class="top-0 z-0" />
    <div
      id="baner"
      class="relative z-10 flex h-1/3 w-screen flex-col items-center justify-center"
    >
      <p class="text-md font-medium text-yellow-700">hello I'm</p>
      <div class="static h-16 w-screen items-center" id="name">
        <h1
          class="absolute bottom-0 right-0 w-screen text-center font-bubblegum text-9xl font-black text-yellow-700 text-shadow-lg"
        >
          STUPIENIUS NOX
        </h1>
        <h1
          class="absolute bottom-2 right-2 w-screen text-center font-bubblegum text-9xl font-black text-yellow-500 text-shadow-lg"
        >
          STUPIENIUS NOX
        </h1>
      </div>
    </div>
    <div
      id="navigation"
      class="absolute bottom-8 z-30 flex flex-row items-end gap-x-10"
    >
      <Arrowbutton rotate="200" popup="me" />
      <Arrowbutton rotate="180" popup="blog" />
      <Arrowbutton rotate="160" popup="skill" />
    </div>
    <Rain class="top-0" />
  </div>
</template>
