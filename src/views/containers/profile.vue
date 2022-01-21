

<template>
  <div class="rk-profile flex-v">
    <ProfileHeader :headerSource="profile.headerSource"
                   :newTaskFields="profile.newTaskFields"
                   :taskFieldSource="profile.taskFieldSource" />
    <div class="rk-profile-context">
      <ProfileTaskList :headerSource="profile.headerSource"
                       :taskListSource="profile.taskListSource"
                       :segmentList="profile.segmentList" />
      <ProfileTraceDetail :currentSegment="profile.currentSegment"
                          :segmentSpans="profile.segmentSpans"
                          :profileAnalyzation="profile.profileAnalyzation"
                          :highlightTop="profile.highlightTop"
                          :currentSpan="profile.currentSpan" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';
import { State as profileState } from '@/store/modules/profile/profile-store';
import ProfileHeader from '@/views/components/profile/profile-header.vue';
import ProfileTaskList from '@/views/components/profile/task-list.vue';
import ProfileTraceDetail from '@/views/components/profile/profile-trace-detail.vue';

@Component({
  components: { ProfileHeader, ProfileTaskList, ProfileTraceDetail },
})
export default class Profile extends Vue {
  @State('profileStore') private profile!: profileState;
  @Getter('durationTime') private durationTime: any;
  @Action('profileStore/GET_SERVICES') private GET_SERVICES: any;
  @Mutation('SET_EVENTS') private SET_EVENTS: any;

  private beforeMount() {
    this.SET_EVENTS([
      () => {
        this.GET_SERVICES({ duration: this.durationTime });
      },
    ]);
  }
  private beforeDestroy() {
    this.SET_EVENTS([]);
  }
}
</script>

<style lang="scss">
.rk-profile {
  height: 100%;
  overflow: auto;
}
.rk-profile-context {
  height: 100%;
  display: flex;
  min-height: 0;
}
</style>
