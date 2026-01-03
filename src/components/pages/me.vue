<template>
  <div id="me" class="relative h-screen w-screen overflow-hidden bg-black">
    <div class="absolute inset-0 z-0">
      <svg
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        width="800"
        height="800"
        viewBox="-400 -400 800 800"
      >
        <g id="rays"></g>
      </svg>

      <img
        src="../../assets/avator.png"
        class="absolute left-1/2 top-1/2 z-10 h-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white"
      />
    </div>

    <div
      id="frame"
      class="pointer-events-none relative z-20 grid h-screen w-screen grid-cols-3 grid-rows-3"
    >
      <div
        id="personal introduction"
        class="pointer-events-auto m-10 h-48 w-64 bg-white"
      >
        <div id="name" class="p-4 font-bubblegum text-xl text-black">
          STUPIENIUS NOXOXOXOX
        </div>
      </div>

      <div id="empty1"></div>
      <div id="empty2"></div>

      <div
        id="skill"
        class="pointer-events-auto relative m-4 flex h-96 w-80 flex-col items-center border-x-8 border-solid border-gray-800 bg-gray-600/80 p-3"
      >
        <h1 class="mb-2 h-auto font-bubblegum text-4xl font-bold text-white">
          MY SKILL
        </h1>
        <div
          id="skill_list"
          class="flex h-80 w-full flex-col items-center gap-3 overflow-y-auto"
        >
          <Skill skillName="C++" :proficiency="10" col="#9a8031" />
          <Skill skillName="Volley ball" :proficiency="12" col="#9a8031" />
          <Skill skillName="trash talk" :proficiency="20" col="#9a8031" />
          <Skill skillName="math" :proficiency="8" col="#9a8031" />
          <Skill skillName="origami" :proficiency="16" col="#9a8031" />
          <Skill skillName="web design" :proficiency="14" col="#9a8031" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Skill from "../widgets/skill.vue";
import { onMounted } from "vue";

function generatePath() {
  const startAngle = Math.random() * Math.PI * 2;
  const turn = (Math.random() * 10 + 5) * (Math.random() > 0.5 ? 1 : -1);

  const r1 = 200 + Math.random() * 200;
  const r2 = r1 + 100 + Math.random() * 300;

  const a1 = startAngle;
  const a2 = startAngle + (turn * Math.PI) / 180;

  const p1 = [Math.cos(a1) * r1, Math.sin(a1) * r1];

  const p2 = [Math.cos(a2) * r1, Math.sin(a2) * r1];

  const p3 = [Math.cos(a2) * r2, Math.sin(a2) * r2];

  return `
    M 0 0
    L ${p1[0]} ${p1[1]}
    A ${r1} ${r1} 0 0 ${turn > 0 ? 1 : 0} ${p2[0]} ${p2[1]}
    L ${p3[0]} ${p3[1]}
  `;
}

function spawnRay(svg) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", generatePath());
  path.setAttribute("class", "ray-path");
  const duration = Math.random() * 5 + 2;

  const length = path.getTotalLength();
  path.style.strokeDasharray = `${length}`;
  path.style.strokeDashoffset = `${length}`;

  svg.appendChild(path);

  path.animate(
    [
      { strokeDashoffset: `${length}` },
      { opacity: "100%" },
      { strokeDashoffset: `0`, opacity: "0%" },
    ],
    {
      duration: duration * 1000,
      easing: "linear",
      fill: "forwards",
    },
  );

  setTimeout(() => {
    path.remove();
  }, duration * 1000);
}

onMounted(() => {
  const svg = document.getElementById("rays");
  if (svg) {
    setInterval(() => spawnRay(svg), 500);
  }
});
</script>
<style scoped>
:deep(.ray-path) {
  fill: none;
  stroke: #9a8031;
  stroke-width: 2;
  stroke-linecap: round;
  filter: drop-shadow(0 0 6px #9a8031);
  animation: jitter 1s infinite;
}

@keyframes jitter {
  0% {
    filter: drop-shadow(0 0 0 #9a8031);
  }
  100% {
    filter: drop-shadow(0 0 100px #9a8031);
  }
}

#skill {
  clip-path: polygon(
    5% 0%,
    95% 0%,
    100% 5%,
    100% 35%,
    95% 40%,
    95% 60%,
    100% 65%,
    100% 95%,
    95% 100%,
    5% 100%,
    0% 95%,
    0% 65%,
    5% 60%,
    5% 40%,
    0% 35%,
    0% 5%
  );
}

#me::after {
  content: "";
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.03) 0,
    rgba(255, 255, 255, 0.03) 1px,
    transparent 2px,
    transparent 4px
  );
  pointer-events: none;
  z-index: 50;
}
</style>
