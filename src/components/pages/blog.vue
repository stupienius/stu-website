<template>
  <div id="blog" class="bsolute h-screen w-screen bg-[#0e0a03] font-chinese text-[#9a8031]">
    <header>

    </header>
    <main class="flex justify-center">
      <div id="sidebar" class="w-auto bg-slate-50"></div>
      <div id="blog-content" class="w-[70vw] bg-slate-50">
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
import { computed } from "vue";

const route = useRoute();
const slug = route.params.title;
console.log(slug);

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
</script>

<style>
* {
  font-size: 16px;
  margin: 0;
  padding: 0;
  border: 0;
}

h1 {
  font-size: 1.6rem;
}

li {
  list-style-type: circle;
  list-style-position: inside;
}
</style>
