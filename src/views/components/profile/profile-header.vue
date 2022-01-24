

<template>
  <div class="rk-profile-header">
    <div>
      <!-- 新建任务按钮 -->
      <a class="rk-new-task-btn r"
         @click="showDialogTask">
        <span class="mr-5 vm">{{ $t('newTask') }}</span>
      </a>

      <!-- 搜索按钮 -->
      <a class="rk-profile-header-btn bg-blue r mr-10"
         @click="searchTask">
        <svg class="icon mr-5 vm">
          <use xlink:href="#search"></use>
        </svg>
        <span class="vm">{{ $t('search') }}</span>
      </a>

      <!-- 服务 端点名称 -->
      <div class="flex-h">
        <!-- 服务 -->
        <CommonSelector :hasSearch="true"
                        title="服务 :"
                        :value="headerSource.currentService"
                        @input="chooseService"
                        :data="headerSource.serviceSource" />
        <div class="f-14 grey">端点名称 :</div>
        <div class="mr-10"
             style="padding: 3px 15px 0">

          <input type="text"
                 v-model="endpointName"
                 class="rk-profile-header-input" />
        </div>
      </div>

      <!-- 弹框 -->
      <rk-sidebox class="profile-task-box"
                  width="600px"
                  :title="$t('newTask')"
                  :show.sync="dialogVisible">
        <ProfileTask :taskFieldSource="taskFieldSource"
                     :newTaskFields="newTaskFields"
                     @closeSidebox="closeSidebox" />
      </rk-sidebox>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Mutation, Action } from 'vuex-class';
import { CommonSelector } from '../common/index';
import ProfileTask from './profile-task.vue';

@Component({ components: { CommonSelector, ProfileTask } })
export default class ProfileHeader extends Vue {
  @Prop() private headerSource: any;
  @Prop() private newTaskFields: any;
  @Prop() private taskFieldSource: any;
  @Mutation('profileStore/SET_HEADER_SOURCE') private SET_HEADER_SOURCE: any;
  @Action('profileStore/GET_TASK_LIST') private GET_TASK_LIST: any;

  private endpointName: string = '';
  private dialogVisible = false;
  private serviceOpt: any;

  private chooseService(item: { key: string; label: string }) {
    this.SET_HEADER_SOURCE({ currentService: item });
  }

  private searchTask() {
    this.SET_HEADER_SOURCE({ endpointName: this.endpointName });
    this.GET_TASK_LIST();
  }

  private created() {
    this.SET_HEADER_SOURCE({ endpointName: this.endpointName });
  }

  private showDialogTask() {
    this.dialogVisible = true;
  }

  private closeSidebox() {
    this.dialogVisible = false;
  }
}
</script>

<style lang="scss">
.rk-profile-header {
  flex-shrink: 0;
  background-color: var(--main-bg);
  color: #eee;
  width: 100%;
  padding: 8px 15px;
  border-left: 1px solid var(--border-color);
}

.rk-profile-header-input {
  border-style: unset;
  outline: 0;
  padding: 4px 10px;
  border-radius: 3px;
}

.rk-profile-header-btn {
  padding: 3px 9px;
  background-color: #484b55;
  border-radius: 4px;
  // margin-top: 12px;

  &.bg-blue {
    background-color: #448dfe;
  }
}

.rk-new-task-btn {
  padding: 3px 9px;
  background-color: #484b55;
  border-radius: 4px;
  // margin-top: 12px;

  &.bg-warning {
    background-color: #fbb03b;
  }
}
.profile-task-box {
  color: #333840;
}
</style>
