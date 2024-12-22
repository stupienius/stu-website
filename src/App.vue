<template>
  <div id="app" class="overflow-hidden">
    <Greeter  ref="greeter" />
    <main  class="w-[200vw] h-screen flex flex-row gap-[-12rem]">
      <Me ref="me" />
      <Blog ref="blog" />
      <Skill ref="skill" />
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
  const me = ref(null);
  const blog = ref(null);
  const skill = ref(null);


  eventBus.on("navigate",e => {
    greeter.value.$el.style.top = "-100vh";
    me.value.$el.style.top = "-100vh";
    blog.value.$el.style.top = "-100vh";
    skill.value.$el.style.top = "-100vh";
      if(e === "me"){
        me.value.$el.style.top = "0";
      }else if(e === "blog"){
        blog.value.$el.style.top = "0";
      }else if(e === "skill"){
        skill.value.$el.style.top = "0";
      }else{
        greeter.value.$el.style.top = "0";
      }
  })

</script>
