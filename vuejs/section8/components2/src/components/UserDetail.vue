<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>My name: {{myName}}</p>
    <p>My reverse name: {{reverseName()}}</p>
    <p>My age {{myAge}}</p>
    <p>
      <button @click="changeNameBack">Change name back</button>
    </p>
    <p>
      <button @click="resetName">Reset Name</button>
    </p>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  //example 1 - arrays props
  //props: ["myName"],
  //example 2 - default value
  //props: {
  //   myName: {
  //     type: String,
  //     default: "max"
  //   }
  // ,
  // example 3 - type object
  // props: {
  //   myName: {
  //     type: Object,
  //     default: function(){
  //       return {
  //           myName:"max"
  //       }
  //     }
  //   }
  // },
  props: {
    myName: {
      type: String,
      required: true
    },
    myAge: Number,
    resetName: Function
  },
  methods: {
    reverseName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    changeNameBack() {
      this.myName = "Michael";
      this.$emit("nameChangedBack", this.myName);
    }
  },
  created() {
    eventBus.$on("ageChangedFromEventBus", age => {
      this.myAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
