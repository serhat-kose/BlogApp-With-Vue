<template>
  <div id="show-blogs">
      <h1>Makaleler</h1>
      <div v-for="(data,index) in blogs" :key="index" class="single-blog">
          <h3>{{data.title}}</h3>
          <article>{{data.body}}</article>
      </div>
  </div>
</template>

<script>

export default {
    name:'ShowBlogs',
    data(){
        return{
            blogs:[]
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
           // console.log(data);
            this.blogs=data.body.slice(0,10);
        })
    }

}
</script>

<style scoped>
body{
    background-color: #f8c291;
}
#show-blogs{
    max-width: 800px;
    margin: auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #38ada9;
}
</style>>

