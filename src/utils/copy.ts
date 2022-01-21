

import { Vue } from 'vue-property-decorator';
export default (value: any) => {
  const input = document.createElement('input');
  input.value = value;
  document.body.appendChild(input);
  input.select();
  if (document.execCommand('Copy')) {
    document.execCommand('Copy');
  }
  input.remove();
  Vue.prototype.$noty.success('Copied!', { timeout: 500 });
};
