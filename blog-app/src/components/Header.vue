<template>
    <nav>
        <ul>
            <li><router-link to='/' exact>Makaleler</router-link></li>
             <li><router-link to='/add' exact>Makale Ekle</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: rgba(68, 68, 68, 0.303);
    padding: 14px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: #eee;
    color: rgb(68, 68, 68);
}
</style>>

