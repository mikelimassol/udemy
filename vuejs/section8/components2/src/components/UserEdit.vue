<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <button @click="changeAgeBindProp">Change Date Bind Prop</button>
    <button @click="changeAgeFromParentFunction">change Age From Parent Function</button>
    <button @click="changeAgeFromEventBus()">change Age From Event Bus</button>
    <p>{{myAge}}</p>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    myAge: Number,
    changeAgeFromParentFunction: Function
  },
  methods: {
    changeAgeBindProp() {
      this.myAge = 21;
      this.$emit("ageChangedEvent", this.myAge);
    },
    changeAgeFromEventBus() {
      this.myAge = 21;
      //eventBus.$emit("ageChangedFromEventBus", this.myAge);
      eventBus.ageChangedEvent(this.myAge);
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
