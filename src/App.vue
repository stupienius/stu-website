<template>
  <div id="app" class="overflow-hidden">
    <Greeter />
    <main class="w-[200vw] h-screen flex flex-row gap-[-12rem]">
      <Me />
      <Blog />
      <Skill />
    </main>
  </div>
</template>

<script setup>
  import Greeter from "./components/pages/greeter.vue";
  import Me from "./components/pages/me.vue";
  import Blog from "./components/pages/blog.vue";
  import Skill from "./components/pages/skill.vue";
  import eventBus from "./utils/eventBus";

  eventBus.on("navigate",e => {
    console.log(e);
  })

</script>

