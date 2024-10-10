<script setup>
import Rain from "../widgets/rain.vue";
import Background from "../widgets//background.vue";
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
      class="h-45 relative z-10 flex w-screen flex-col items-center justify-center gap-y-2"
    >
      <p class="text-md h-8 font-maamli text-lg font-medium text-yellow-700">
        hello I'm
      </p>
      <div class="static h-32 w-screen" id="name">
        <h1
          id="dark"
          class="absolute bottom-0 right-0 w-screen text-center font-bubblegum text-9xl font-black text-yellow-700 "
        >
          STUPIENIUS NOX
        </h1>
        <h1
          id="bright"
          class="absolute bottom-2 right-2 w-screen text-center font-bubblegum text-9xl font-black text-yellow-600"
        >
          STUPIENIUS NOX
        </h1>
      </div>
    </div>
    <div
      id="navigation"
      class="absolute bottom-2 z-30 flex flex-row items-end gap-x-10"
    >
      <Arrowbutton rotate="200" popup="me" />
      <Arrowbutton rotate="180" popup="blog" />
      <Arrowbutton rotate="160" popup="skill" />
    </div>
    <Rain class="top-0" />
  </div>
</template>

<style>
#dark{
  text-shadow: 2px 2px 1000px yellow;
}
</style>
