<template>
  <div v-tema:kolon="'uzun'" id="show-blogs">
      <input class="input" type="text" v-model="search" placeholder="Makale Ara" />
      <h1>Makaleler</h1>
      <div v-for="(data,index) in filteredBlogs" :key="index" class="single-blog">
           <router-link :to="'/blog/'+data.id">
          <h3>{{data.title | uppercase}}</h3>
         
          </router-link>
           <article>{{data.content | snipped}}</article>
      </div>
     
  </div>
</template>

<script>

export default {
    name:'ShowBlogs',
    data(){
        return{
            blogs:[],
            search:''
        }
    },
    created(){
        this.$http.get('https://blog-app-vue-default-rtdb.firebaseio.com/post.json').then(function(data){
           // console.log(data);
            return data.json();
        }).then(function(data){
            var blogsArray=[];
            for(let key in data){
                data[key].id=key;
                blogsArray.push(data[key]);
            }

            this.blogs=blogsArray;
        })

        

        
    },
    computed:{
        filteredBlogs:function(){

            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search)
            })
        }
    }

}
</script>

<style scoped>
body{
    background-color: #e5f891;
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
.input{
    padding: 10px;
    text-align: center;
    background-color: #e1e2d5;
    display: block;
    width: 100%;
}
</style>>

