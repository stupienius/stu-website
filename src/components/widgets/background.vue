<template>
  <div id="background" class="w-100 absolute h-screen overflow-hidden">
    <p class="phar1 px-4 text-center font-mawn text-5xl text-[#070707]">
      {{ content }}
    </p>
    <p class="phar2 px-4 text-center font-mawn text-5xl text-[#070707]">
      {{ content }}
      <br />
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const content = ref(
  "She'd take the world off my shoulders If it was ever hard to move She'd turn the rain to a rainbow When I was living in the blue Why then, if she so perfect? Do I still wish that it was you? Perfect don't mean that it's working So what can I do? When you're out of sight In my mind 'Cause sometimes I look in her eyes And that's where I find a glimpse of us And I try to fall for her touch But I'm thinkin' of the way it was Said I'm fine and said I moved on I'm only here passin' time in her arms Hopin' I find a glimpse of us Tell me he savors your glory Does he laugh the way I did? Is this a part of your story? One that I had never lived Maybe one day you'll feel lonely And in his eyes, you'll get a glimpse Maybe you'll start slippin' slowly And find me again When you're out of sight In my mind 'Cause sometimes I look in her eyes And that's where I find, a glimpse of us And I try to fall for her touch But I'm thinkin' of the way it was Said I'm fine and said I moved on I'm only here passin' time in her arms Hopin' I find a glimpse of us Ooh, ooh, ooh Ooh, ooh, ooh 'Cause sometimes I look in her eyes And that's where I find, a glimpse of us And I try to fall for her touch But I'm thinkin' of the way it was Said I'm fine and said I moved on I'm only here passin' time in her arms Hopin'I find a gilmpse of us",
);
</script>
<style>
@keyframes rolldown1 {
  from {
    transfrom: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
}

.phar1 {
  position: relative;
  transform: translateY(-100%);
  animation: rolldown1 60s linear infinite;
}

@keyframes rolldown2 {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
}

.phar2 {
  position: relative;
  transform: translateY(-100%);
  animation: rolldown2 60s linear infinite;
}
</style>
