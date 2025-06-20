<template>
  <div id="blog" class="flex h-auto w-screen flex-col items-center gap-3 bg-[#0e0a03] font-chinese text-[#9a8031]">
    <header
      class="mt-3 flex h-[55vh] w-screen flex-col items-center justify-center border-y-2 border-solid border-gray-600 bg-[#272829] font-serif">
      <div id="title" class="text-6xl">{{ title }}</div>
      <div id="subtitle">{{ subtitle }}</div>
      <div id="time">{{ time }}</div>
    </header>
    <main class="flex justify-center">
      <div id="sidebar" class="w-auto bg-slate-50"></div>
      <div id="blog-content" class="w-[70vw] rounded-xl bg-[#171819] p-6 text-[#ffffff88] shadow-black">
        <div id="tags" class="m-3 mb-7 flex flex-row gap-3 overflow-x-auto">
          <div v-for="tag in tags" :key="tag"
            class="inline-block h-auto w-auto text-nowrap rounded-xl bg-[#D8D9DA77] p-1 text-gray-800">
            {{ tag }}
          </div>
        </div>
        <div v-if="PostComponent">
          <component :is="PostComponent" />
        </div>
        <div v-else>
          <p>Post not found: {{ slug }}</p>
        </div>
      </div>
      <div id="right-sidebar" class="w-auto bg-slate-50"></div>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, ref } from "vue";

const title = ref(null);
const subtitle = ref(null);
const time = ref(null);
const tags = ref(null);

const route = useRoute();
const slug = route.params.title;

const markdownModules = import.meta.glob("../../content/blog/*.md", {
  eager: true,
});

const posts = Object.fromEntries(
  Object.entries(markdownModules).map(([path, mod]) => {
    const name = path.split("/").pop().replace(".md", "");
    return [name, mod];
  }),
);

const PostComponent = computed(() => posts[slug]?.default || null);
if (PostComponent) {
  title.value = posts[slug].frontmatter.title.toUpperCase();
  subtitle.value = posts[slug].frontmatter.subtitle;
  time.value = posts[slug].frontmatter.date;
  tags.value = posts[slug].frontmatter.tags;
}
</script>

<style>
* {
  font-size: 16px;
  margin: 0;
  padding: 0;
  border: 0;
}

h1 {
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 10px;
}

li {
  list-style-type: circle;
  list-style-position: inside;
}

#tags::-webkit-scrollbar {
  display: none;
}
</style>
