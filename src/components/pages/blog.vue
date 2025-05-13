<template>
  <div
    id="blog"
    class="bsolute h-screen w-screen bg-[#0e0a03] font-chinese text-[#9a8031]"
  >
    <h1>this is blog</h1>
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
