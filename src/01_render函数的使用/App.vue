<script>
import { ref, h } from 'vue';
import HolloWord from './HolloWord.vue';
export default {
  render() {
    return h(HolloWord, null, {
      default: (props) =>
        h('span', null, `app传入到HelloWorld中的内容:${props.name}`),
    });
  },
};
</script>

<style scoped></style>
