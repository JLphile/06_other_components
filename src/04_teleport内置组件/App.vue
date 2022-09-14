<template>
  <div class="app">
    <Teleport to="#why">
      <h2>当前计数：</h2>
      <button>+1</button>
      <hello-world></hello-world>
    </Teleport>

    <teleport to="#why">
      <span>我是span</span>
    </teleport>
  </div>
</template>

<script>
// 获取组件实例
import { getCurrentInstance } from 'vue';
import HelloWorld from './HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const instance = getCurrentInstance();
    console.log(instance.appContext.config.globalProperties.$name);
  },

  mounted() {
    console.log(this.$name);
  },
  methods: {
    foo() {
      console.log(this.$name);
    },
  },
};
</script>

<style scoped></style>
