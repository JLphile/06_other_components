import { createApp } from 'vue';
import App from './03_自定义指令/App.vue';
import registerDirectives from './directives';

const app = createApp(App);
registerDirectives(app);

// app.directive('focus', {
//   mounted(el, binding, vnode, preVnode) {
//     console.log('focus mounted');
//     el.focus();
//   },
// });

app.mount('#app');
