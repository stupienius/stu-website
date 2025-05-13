<template>
  <slot />
</template>
<script setup></script>
<!-- <style scoped> -->
<!-- #main { -->
<!--   position: relative; -->
<!-- } -->
<!---->
<!-- /* pseudo-element that copies and glitches the content */ -->
<!-- #glitch1 { -->
<!--   content: ""; -->
<!--   position: absolute; -->
<!--   top: 0; -->
<!--   left: 0; -->
<!--   width: 100%; -->
<!--   height: 100%; -->
<!--   background: white; -->
<!--   mix-blend-mode: screen; -->
<!--   pointer-events: none; -->
<!--   animation: glitch-effect 4s infinite; -->
<!--   z-index: 9999; -->
<!--   clip-path: polygon(0 0, 100% 0, 100% 10%, 0 10%); -->
<!-- } -->
<!---->
<!-- #glitch2 { -->
<!--   content: ""; -->
<!--   position: absolute; -->
<!--   top: 0; -->
<!--   left: 0; -->
<!--   width: 100%; -->
<!--   height: 100%; -->
<!--   background: inherit; -->
<!--   mix-blend-mode: lighten; -->
<!--   pointer-events: none; -->
<!--   animation: glitch-effect 4s infinite alternate; -->
<!--   z-index: 9998; -->
<!--   clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%); -->
<!--   animation-delay: 0.2s; -->
<!-- } -->
<!---->
<!-- @keyframes glitch-effect { -->
<!--   0% { -->
<!--     transform: translateX(10px); -->
<!--     clip-path: polygon(0 2%, 100% 2%, 100% 6%, 0 6%); -->
<!--   } -->
<!---->
<!--   10% { -->
<!--     transform: translateX(-15px); -->
<!--     clip-path: polygon(0 15%, 100% 15%, 100% 20%, 0 20%); -->
<!--   } -->
<!---->
<!--   20% { -->
<!--     transform: translateX(5px); -->
<!--     clip-path: polygon(0 30%, 100% 30%, 100% 32%, 0 32%); -->
<!--   } -->
<!---->
<!--   30% { -->
<!--     transform: translateX(-20px); -->
<!--     clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); -->
<!--   } -->
<!---->
<!--   40% { -->
<!--     transform: translateX(23px); -->
<!--     clip-path: polygon(0 70%, 100% 70%, 100% 73%, 0 73%); -->
<!--   } -->
<!---->
<!--   50% { -->
<!--     transform: translateX(-10px); -->
<!--     clip-path: polygon(0 90%, 100% 90%, 100% 92%, 0 92%); -->
<!--   } -->
<!---->
<!--   100% { -->
<!--     transform: translateX(10px); -->
<!--     clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); -->
<!--   } -->
<!-- } -->
<!-- </style> -->
