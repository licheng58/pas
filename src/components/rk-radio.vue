

<template>
  <div>
    <span v-for="(item, index) in data"
          :key="index">
      <input type="radio"
             :value="item.key"
             @click="changeOpt(item)"
             :checked="item.key === current.key" />{{
        item.label
      }}
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class RkRadio extends Vue {
  @Prop() public data!: any;
  @Prop() public current!: any;

  private changeOpt(item: any) {
    this.$emit('onChoose', item);
  }
}
</script>
