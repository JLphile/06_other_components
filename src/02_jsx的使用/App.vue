<script>
import { directive } from '@babel/types';
import HelloWorld from './HelloWorld.vue';
export default {
  data() {
    return {
      counter: 0,
    };
  },
  render() {
    const increment = () => this.counter++;
    const decrement = () => this.counter--;
    return (
      <div>
        <h2>当前计数:{this.counter}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>

        <HelloWorld>
          {{ default: (props) => <button>我是插槽传入的按钮</button> }}
        </HelloWorld>
      </div>
    );
  },
};
</script>

<style scoped></style>
