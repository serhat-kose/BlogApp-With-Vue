<template>
  <div id="app">
    
    <show-blogs></show-blogs>
  </div>
</template>

<script>

import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'

export default {
  name: 'App',
  components: {
    'add-blog' :AddBlog,
    'show-blogs' :ShowBlogs
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
