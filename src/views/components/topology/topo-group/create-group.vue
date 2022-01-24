
<template>
  <div>
    <div v-if="create">
      <input class="group-create-input mr-5"
             placeholder="Add local view"
             v-model="name" />
      <RkButton class="mr-5"
                @click="handleCreateGroup">Confirm</RkButton>
      <RkButton @click="create = false">Cancel</RkButton>
    </div>
    <RkButton v-else
              icon="add"
              @click="create = true">Create group</RkButton>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

@Component({
  components: {},
})
export default class TopoGroupCreate extends Vue {
  @Mutation('rocketTopoGroup/CREATE_GROUP') private CREATE_GROUP: any;
  private name: string = '';
  private create: boolean = false;

  private handleCreateGroup() {
    this.CREATE_GROUP(this.name);
    this.create = false;
    this.name = '';
  }
}
</script>
<style lang="scss">
.group-create-input {
  border: none;
  outline: none;
  line-height: 26px;
  padding: 0px 8px;
  color: #ddd;
  background-color: #2b3037;
  border-radius: 4px;
}
</style>
