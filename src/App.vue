<template>
  <div id="app" class="overflow-hidden">
    <Greeter  ref="greeter" />
    <main  class="w-[200vw] h-screen flex flex-row gap-[-12rem]">
      <Me />
      <Blog />
      <Skill />
    </main>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import Greeter from "./components/pages/greeter.vue";
  import Me from "./components/pages/me.vue";
  import Blog from "./components/pages/blog.vue";
  import Skill from "./components/pages/skill.vue";
  import eventBus from "./utils/eventBus";

  const greeter = ref(null);

  function greeterOut(){
    console.log(greeter.value.$el.style.top);
    greeter.value.$el.style.top = "100vh";
  }

  eventBus.on("navigate",e => {
    greeterOut();
  })

</script>

