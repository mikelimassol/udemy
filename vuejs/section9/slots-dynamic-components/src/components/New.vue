<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter ++">increment</button>
    {{counter}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {},
  destroyed() {
    console.log("destroyed");
  },
  deactivated() {
    console.log("deactivated");
    this.$destroy();
  },
  activated() {
    console.log("activated");
  }
};
</script>

<style scoped>
div {
  color: red;
  border: 1px solid red;
  box-shadow: 1px 1px 10px 10px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
</style>
