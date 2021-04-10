<template>
  <div id="app">
    <app-header></app-header>
   <router-view></router-view>
  </div>
</template>

<script>

import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs'
import Header from './components/Header'
import SingleBlog from './components/SingleBlog'

export default {
  name: 'app',
  components: {
    'add-blog':AddBlog,
    'show-blogs':ShowBlogs,
     'app-header':Header,
      'single-blog':SingleBlog
    
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
