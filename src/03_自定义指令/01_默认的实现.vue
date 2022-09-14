<template>
  <div>
    <input type="text" ref="inputRef" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const inputRef = ref(null);
    onMounted(() => inputRef.value.focus());
    return {
      inputRef,
    };
  },
};
</script>

<style scoped></style>
