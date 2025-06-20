<template>
  <div id="blogIndex" class="relative min-h-screen overflow-y-hidden bg-[#272829] font-serif text-[#FFF6E0]">
    <div id="binary-background"
      class="pointer-events-none fixed left-0 top-[-35px] z-0 h-auto w-screen select-none overflow-hidden text-[#187a1387] opacity-10">
      <transition name="appear" module="out-in">
        <pre v-if="flag" class="select-none whitespace-pre-wrap font-mono text-5xl leading-none">
          {{ binaryString }}
        </pre>
      </transition>
    </div>

    <div class="relative z-10 flex w-screen flex-col items-center">
      <header
        class="h-auto w-[95vw] rounded-b-2xl border-4 border-t-[0px] border-solid border-[#D8D9DA] bg-[#D8D9DAB9] py-5 font-serif text-[#61677A]">
        <h1 class="h-auto w-[95vw] text-center text-7xl font-medium">
          STUPIENIUS BLOG
        </h1>
        <h3 class="w-[95vw] text-center">
          My digital dump of code, builds, and brain fog
        </h3>
      </header>
      <main>
        <div id="blogList">
          <ul class="flex w-screen flex-col items-center justify-center">
            <li v-for="post in blogIndex" :key="post.slug"
              class="m-3 flex w-[60%] list-none rounded-lg bg-[#61677A7f] p-3 px-5 transition-all duration-500 ease-in hover:bg-yellow-500 hover:text-orange-950">
              <RouterLink :to="`/blog/${post.slug}`" class="flex size-full flex-col gap-3">
                <div id="title" class="mb-[-20px] font-maamli text-[3rem]">
                  {{ post.title }}
                </div>
                <div id="subtitle">{{ post.subtitle }}</div>
                <div id="tags" class="flex flex-row gap-3 overflow-x-auto">
                  <div v-for="tag in post.tags" :key="tag"
                    class="inline-block h-auto w-auto text-nowrap rounded-xl bg-[#D8D9DA77] p-0 px-3 text-sm text-gray-800">
                    {{ tag }}
                  </div>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { blogIndex } from "../../utils/blogLoader.js";

const rows = 100;
const cols = 100;

const binaryGrid = ref([]);
const binaryString = ref("");
const flag = ref(false);

let timers = [];

function randomBit() {
  return Math.random() > 0.5 ? "1" : "0";
}

function updateBinaryString() {
  binaryString.value = binaryGrid.value.map((row) => row.join("")).join("\n");
}

function initializeGrid() {
  binaryGrid.value = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: cols }, (_, col) => randomBit()),
  );
  updateBinaryString();

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const randomDelay = 1000 + Math.random() * 1000; // 100–1100ms
      const timer = setInterval(() => {
        binaryGrid.value[r][c] = randomBit();
        updateBinaryString();
      }, randomDelay);
      timers.push(timer);
    }
  }
}

onMounted(() => {
  initializeGrid();
  setTimeout(() => {
    flag.value = true;
  }, 1000);
});

onUnmounted(() => {
  timers.forEach(clearInterval);
});
</script>
<style scoped>
#binary-background {
  font-family: monospace;
  user-select: none;
  line-height: 1;
  white-space: pre;
}

.appear-enter-active,
.appear-leave-active {
  transition: all 1.5s ease;
}

.appear-enter-from {
  opacity: 0;
}

.appear-leave-to {
  opacity: 0;
}
</style>
