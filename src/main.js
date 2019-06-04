import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './stores/index'

import axios from 'axios'


import 'iview/dist/styles/iview.css';
import { Button, Table,Input} from 'iview';
import 'lib-flexible/flexible.js'


// Vue.use(axios)
Vue.prototype.axios = axios;

Vue.filter('setWH',(url,arg)=>{
    return url.replace(/w\.h/,arg);
})


Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Input',Input);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
