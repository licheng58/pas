

import noty from './noty';
import RkFooterTime from './rk-footer-time.vue';
import RkProgress from './rk-progress.vue';
import RkPage from './rk-page.vue';
import RkDate from './rk-date.vue';
import RkPanel from './rk-panel.vue';
import RkSidebox from './rk-sidebox.vue';
import RkModal from './rk-modal.vue';
import RkEcharts from './rk-echarts.vue';
import RkSelect from './rk-select.vue';
import RkPopper from './rk-popper.vue';
import RkDropdown from './rk-dropdown.vue';
import RkBack from './rk-back.vue';
import RkButton from './rk-button.vue';
import RkIcon from './rk-icon.vue';
import RkRadio from './rk-radio.vue';
import RkAlert from './rk-alert.vue';
import RkSwitch from './rk-switch.vue';

const components: any = {
  RkProgress,
  RkDate,
  RkPanel,
  RkEcharts,
  RkPage,
  RkSidebox,
  RkModal,
  RkFooterTime,
  RkSelect,
  RkPopper,
  RkDropdown,
  RkBack,
  RkButton,
  RkIcon,
  RkRadio,
  RkAlert,
  RkSwitch,
};

const componentsName: string[] = Object.keys(components);
export default {
  install: (vue: any) => {
    componentsName.forEach((i) => {
      vue.component(i, components[i]);
    });
    vue.use(noty);
  },
};
