import dayjs from 'dayjs';
export default function (app) {
  app.directive('format-time', {
    mounted(el, bindings) {
      console.log(bindings);

      let formatString = bindings.value;

      if (!formatString) {
        formatString = 'YYYY-MM-DD HH:mm:ss';
      }

      const textContent = el.textContent;
      //   此时，数据为String类型
      console.log(typeof textContent);
      //   转成数字类型
      let timestamp = parseInt(textContent);
      if (textContent.length === 10) {
        timestamp = timestamp * 1000;
        el.textContent = dayjs(timestamp).format(formatString);
      }
    },
  });
}
