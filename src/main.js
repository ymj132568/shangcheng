
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import '../static/currency.css'
import '../static/font/iconfont.css'
import '../static/js/rem.js'
import '../static/mui/dist/css/mui.css'

Vue.prototype.$http = axios

Vue.config.productionTip = false
import { Swipe,SwipeItem,Loadmore,Button,Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.component(Loadmore.name, Loadmore)
Vue.component(Button.name, Button);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

router.beforeEach((to, from, next) => {
    if (to.meta.headerShow) {
        store.commit('headerShow',{header:true,slot:to.meta.title})
    }else{
        store.commit('headerShow',{header:false})
    }
    if (to.meta.footerShow) {
        store.commit('footerShow',true)
    }else{
        store.commit('footerShow',false)
    }
    next()
})

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

axios.interceptors.request.use(function (config) {
   


    return config;
  }, function (error) {
  
    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
   

    return response;
  }, function (error) {
   
    return Promise.reject(error);
  });



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
