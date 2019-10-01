import Vue from 'vue'
import App from './App.vue'
import Button from './components/Controls/Button'
import Dropdown from './components/Controls/Dropdown'
import InputField from './components/Controls/InputField'
import Slider from './components/Controls/Slider'
import Table from './components/Controls/Table'
import TextField from './components/Controls/TextField'
import api from './api/main'

Vue.component('Button', Button);
Vue.component('Dropdown', Dropdown);
Vue.component('InputField', InputField);
Vue.component('Slider', Slider);
Vue.component('Table', Table);
Vue.component('TextField', TextField);

Vue.config.productionTip = false;
Vue.mixin({
  data: function (){
    return {
      api: api
    }
  }
});
new Vue({
  render: h => h(App),
}).$mount('#app');
