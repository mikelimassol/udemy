import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  methods: {
    ageChangedEvent(age) {
      this.$emit("ageChangedFromEventBus", age);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
