
<template>
  <div id="app">
    <RkHeader />
    <router-view></router-view>
    <AlertsContent />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RkHeader from '@/views/components/common/rk-header.vue';
import AlertsContent from '@/views/components/common/alerts-content.vue';

@Component({
  components: {
    RkHeader,
    AlertsContent,
  },
})
export default class RouterIndex extends Vue {}
</script>
