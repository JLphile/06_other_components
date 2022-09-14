<script>
export default {
  render() {
    return (
      <div>
        <h2>Hello Word</h2>
        {this.$slots.default ? this.$slots.default() : '我是插槽默认值'}
      </div>
    );
  },
};
</script>

<style scoped></style>
