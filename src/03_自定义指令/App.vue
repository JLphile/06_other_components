<template>
  <div>
    <h2 v-format-time>{{ timestamp }}</h2>
    <!-- 传入参数 -->
    <h2 v-format-time="'YYYY / MM / DD'">{{ timestamp }}</h2>
  </div>
</template>

<script>
export default {
  setup() {
    const timestamp = 1663157006;
    return {
      timestamp,
    };
  },
};
</script>

<style scoped></style>
