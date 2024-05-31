import { createApp } from 'vue';
import App from './App.vue';
import _ from 'lodash';
import vuetify from '@/js/plugins/vuetify';
import router from '@/js/router';
import pinia from '@/js/plugins/pinia';
import 'vuetify/styles';
// import api from '@weapnl/js-junction';

const app = createApp(App);

app.config.globalProperties.$_ = _;
window._ = _;

// api.host(import.meta.env.VITE_API_URL);

app.use(router);
app.use(vuetify);
app.use(pinia);

app.mount('#app');
