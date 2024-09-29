<template>
  <div id="background" class="w-100 absolute h-screen overflow-hidden">
    <p class="phar1 text-center font-maamli text-4xl text-gray-950">
      {{ content }}
    </p>
    <p class="phar2 text-center font-maamli text-4xl text-gray-950">
      {{ content }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const content = ref(
  "She'd take the world off my shoulders,If it was ever hard to move,She'd turn the rain to a rainbow,When I was living in the blue,Why then, if she so perfect?Do I still wish that it was you?Perfect don't mean that it's working,So what can I do?When you're out of sight,In my mind'Cause sometimes I look in her eyes,And that's where I find a glimpse of us,And I try to fall for her touch,But I'm thinkin' of the way it was,Said I'm fine and said I moved on,I'm only here passin' time in her arms,Hopin' I find a glimpse of us,Tell me he savors your glory,Does he laugh the way I did?Is this a part of your story?One that I had never lived,Maybe one day you'll feel lonely,And in his eyes, you'll get a glimpse,Maybe you'll start slippin' slowly,And find me again,When you're out of sight,In my mind'Cause sometimes I look in her eyes,And that's where I find, a glimpse of us,And I try to fall for her touch,But I'm thin,kin' of the way it was,Said I'm fine and said I moved on,I'm only here passin' time in her arms,Hopin' I find a glimpse of us,Ooh, ooh, ooh,Ooh, ooh, ooh'Cause sometimes I look in her eyes,And that's where I find, a glimpse of us,And I try to fall for her touch,But I'm thin,kin' of the way it was,Said I'm fine and said I moved on,I'm only here passin' time in her arms,Hopin' I find a glimpse of us",
);
</script>
<style>
@keyframes rolldown1 {
  to {
    transform: translateY(100%);
  }
}

.phar1 {
  position: relative;
  transform: translateY(0);
  animation: rolldown1 30s linear infinite;
}

@keyframes rolldown2 {
  from {
    transfrom: translateY(-200%);
  }
  to {
    transform: translateY(-100%);
  }
}

.phar2 {
  position: relative;
  transform: translateY(-200%);
  animation: rolldown2 30s linear infinite;
}
</style>
