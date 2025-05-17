<template>
  <div class="font-chinese text-white">
    <header class="h-auto w-screen bg-stone-900 p-3">
      <h1 class="text-center text-[2.4rem]">STUPIENIUS BLOG</h1>
      <h3 class="w-screen text-center">
        My digital dump of code, builds, and brain fog
      </h3>
    </header>
    <main class="flex w-screen justify-center text-white">
      <div id="number" class="w-3 text-orange-400">
        1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27
      </div>
      <div id="blogList">
        <div id="right">
          <div id="code">
            #include "iostream.h"<br />
            int main(){<br />
            const name = stupienius;<br />
            title = blog;<br />
            return { where : blog , name : name} }
          </div>
          <ul class="flex flex-col">
            <li v-for="post in blogIndex" :key="post.slug" class="w-[60%] list-none text-red-300 rounded-md">
              <RouterLink :to="`/blog/${post.slug}`">
                <div id="title" class="">{{ post.title }}</div>
                <div id="subtitle">{{ post.subtitle }}</div>
                <div id="time">{{ post.data }}</div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { blogIndex } from "../../../utils/blogLoader.js";
</script>
