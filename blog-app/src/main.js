import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.use(VueRouter)
Vue.use(vueResource)

const router = new VueRouter({
  routes:Routes,
  mode:'history'
})


Vue.filter('uppercase',function(value){
  return value.toUpperCase();
})

Vue.filter('snipped',function(value){
  return value.slice(0,200)+'...';
})

Vue.directive('tema',{
  bind(el,binding,vnode){
   if(binding.value=='uzun'){
     el.style.maxWidth='1200px';
   }
   else if(binding.value=='kısa'){
    el.style.maxWidth='560px';
   }
   if(binding.arg=='kolon'){
    el.style.background='#ddd';
    el.style.padding='20px';
   }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
