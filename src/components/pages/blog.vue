<template>
  <div id="blog" class="absolute h-screen w-screen bg-violet-200 font-chinese">
    <h1>this in blog</h1>
    <FirstBlog class="p-9" />
  </div>
</template>
<script setup>
import FirstBlog from "../../content/blog/firstBlog.md";
</script>
<style>
h1 {
  text-align: center;
  font-size: 1.6rem;
}

li {
  list-style-type: circle;
  list-style-position: outside;
}
</style>
