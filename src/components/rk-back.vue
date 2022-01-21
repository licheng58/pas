
<template>
  <a class="rk-back"
     @click="handleBack">
    <svg class="icon">
      <use xlink:href="#chevron-left"></use>
    </svg>
  </a>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class RkBack extends Vue {
  @Prop({ default: '' }) private size!: string;
  private handleBack() {
    const query = this.$route.query as any;
    if (query.form) {
      this.$router.push(query.form);
    } else {
      this.$emit('back');
    }
  }
}
</script>
<style lang="scss">
.rk-back {
  margin-right: 10px;
  .icon {
    vertical-align: bottom;
    height: 22px;
    width: 22px;
    padding: -1px 3px;
  }
}
</style>
