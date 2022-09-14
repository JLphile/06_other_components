<template>
  <div>
    <input type="text" v-focus />
    <!-- aaa bbb为修饰符 -->
    <button
      v-if="counter < 2"
      @click="changeCounter"
      v-why.aaa.bbb="'coderwhy'"
    >
      当前计数：{{ counter }}
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  // 局部指令
  directives: {
    focus: {
      mounted(el) {
        console.log('focus mounted');
        el.focus();
      },
    },
    why: {
      created(el, binding, vnode, preVnode) {
        console.log('why created');
        console.log(el);
        console.log(binding);
        console.log(vnode);
        console.log(preVnode);
        console.log(binding.value);
        console.log(binding.modifiers);
      },
      beforeMount() {
        console.log('why beforeMount');
      },
      mounted() {
        console.log('why mounted');
      },
      beforeUpdate() {
        console.log('why beforeUpdate');
      },
      updated() {
        console.log('why updated');
      },
      beforeUnmount() {
        console.log('why beforeUnmount');
      },
      unmounted() {
        console.log('why unmounted');
      },
    },
  },
  setup() {
    const counter = ref(0);

    const changeCounter = () => counter.value++;

    return {
      counter,
      changeCounter,
    };
  },
};
</script>

<style scoped></style>
