<script setup>
import { blogIndex } from "../../utils/blogLoader.js";
</script>

<template>
  <div id="blogIndex" class="font-chinese text-white">
    <header class="w-screen h-auto p-3 bg-stone-900">
      <h1 class="text-[2.4rem] text-center">STUPIENIUS BLOG</h1>
      <h3 class="w-screen text-center">
        My digital dump of code, builds, and brain fog
      </h3>
    </header>
    <div id="sidebar"></div>
    <main>
      <div id="blogList">
        <ul>
          <li v-for="post in blogIndex" :key="post.slug">
            <RouterLink :to="`/blog/${post.slug}`">
              {{ post.title }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </main>
    <div id="sidebar"></div>
  </div>
</template>
