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
      <div id="blog-content"
        class="w-[70vw] rounded-xl border-x-2 border-solid border-[#9a8031] bg-[#171819] p-10 text-[#ffffff70] shadow-black">
        <div id="tags" class="mb-7 flex flex-row gap-3 overflow-x-auto">
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
  const t = new Date(posts[slug].frontmatter.time);
  console.log(t);
  time.value = `${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}`;
  tags.value = posts[slug].frontmatter.tags;
}
</script>

<style scoped>
:deep(#blog-content > *) {
  font-size: 16px;
}

:deep(#blog-content h1) {
  font-size: 2.4rem;
  text-align: left;
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 40px;
  border-bottom: 2px #ffffff88 solid;
}

:deep(#blog-content h2) {
  font-size: 2rem;
  text-align: left;
  font-weight: 300;
  margin-top: 30px;
  margin-bottom: 40px;
}

:deep(#blog-content p) {
  font-size: 1.2rem;
  margin-bottom: 20px;
  margin-top: 20px;
}

:deep(#blog-content li) {
  list-style-type: circle;
  list-style-position: inside;
  margin-bottom: 10px;
  margin-top: 10px;
}

:deep(#blog-content li p) {
  display: inline;
  margin: 0px;
}

:deep(#blog-content blockquote) {
  background-color: #ffffff50;
  padding: 10px;
  border-radius: 5px;
  border-left: 6px #ffffff40 solid;
  margin-top: 20px;
  margin-bottom: 20px;
}

:deep(#blog-content blockquote p) {
  margin: 0;
}

:deep(#blog-content code) {
  background-color: #ffffff20;
  font-size: 1rem;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  color: #ffffff50;
}

#tags::-webkit-scrollbar {
  display: none;
}
</style>
