import { createApp } from 'vue';
import App from './04_teleport内置组件/App.vue';
// import registerDirectives from './directives';
import pluginObject from './plugins/plugins_object';
import pluginFunction from './plugins/plugins_function';

const app = createApp(App);
// registerDirectives(app);

// app.directive('focus', {
//   mounted(el, binding, vnode, preVnode) {
//     console.log('focus mounted');
//     el.focus();
//   },
// });
app.use(pluginObject);
app.use(pluginFunction);

app.mount('#app');
