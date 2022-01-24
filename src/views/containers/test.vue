<template>
  <div class="test">
    测试页面
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { AxiosResponse } from 'axios';
import graph from '@/graph';
interface Option {
  value: string;
  name: number;
}

type aa = 1 | 11;
@Component
export default class test extends Vue {
  private msg: string = 'HHH';

  private created() {
    const user: Option = {
      value: '123',
      name: 11,
    };

    console.log(aa);
  }
}

// export default {
//   data() {
//     msg: '哈哈哈';
//   },

//   created() {
//     // this.getInfo();
//   },

//   methods: {
//     getInfo() {
//       const params = {
//         id: 111,
//         name: 'zuosw',
//       };
//       return graph
//         .query('queryTest1')
//         .params({
//           condition: params,
//         })
//         .then((res: AxiosResponse) => {
//           if (res.data.errors) {
//             console.log(res.data);

//             return;
//           }
//           console.log(res.data.data);

//           return res.data.data || [];
//         });
//     },
//   },
// };
</script>
