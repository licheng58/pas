
<template>
  <div class="rk-event flex-v">
    <EventSearch />
    <EventTimeline />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import EventSearch from '../components/event/event-search.vue';
import EventTimeline from '../components/event/event-timeline.vue';

@Component({
  components: { EventSearch, EventTimeline },
})
export default class Event extends Vue {}
</script>

<style lang="scss" scoped>
.rk-event {
  flex-grow: 1;
  height: 100%;
  min-height: 0;
}
</style>
