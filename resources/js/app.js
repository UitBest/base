import { createApp } from 'vue';
import App from './App.vue';
import _ from 'lodash';
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import pinia from '@/plugins/pinia';

// Vuetify
import 'vuetify/styles';

const app = createApp(App);

app.config.globalProperties.$_ = _;
window._ = _;

app.use(router);
app.use(vuetify);
app.use(pinia);

app.mount('#app');
