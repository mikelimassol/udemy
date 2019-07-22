<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change Name</button>
    <p>My name {{name}}</p>
    <p>My age {{age}}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :myName="name"
          :myAge="age"
          :resetName="resetName"
          @nameChangedBack="name = $event"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :myAge="age"
          :changeAgeFromParentFunction="changeAge"
          @ageChangedEvent="age = $event"
        ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  data: function() {
    return {
      name: "michael",
      age: 42
    };
  },
  methods: {
    changeName() {
      this.name = "papamichael";
    },
    resetName() {
      this.name = "michael";
    },
    changeAge() {
      this.age = 21;
    }
  },

  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
