<template>
    <div id ="add-blog">
        <h2>Yeni Makale Ekle</h2>
        <form >
            <label >Başlık :</label>
            <input type="text" v-model.lazy="blog.title">
                        <label >İçerik :</label>
            <textarea v-model.lazy="blog.content"></textarea>
        </form>
        <div id="preview">
            <h3>Makale Önizleme</h3>
            <p>Makale Başlık : {{blog.title}}</p>
              <p>Makale İçerik :</p>
                <p> {{blog.content}}</p>
        </div>
    </div>
</template>

<script>


export default ({
  name:'AddBlog',
  data(){
      return{
          blog: {
              title:'',
              content:''

          }
      }
  }
})
</script>

<style scoped>
#add-blog{
    margin: 20px auto;
    max-width: 500px;

}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"],textarea{
    display: block;
    width: 100%;
    padding: 8px;
}

#preview{
        
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
</style>