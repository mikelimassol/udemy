new Vue({
  el: "#app",
  data: {
    counter: 0,
    result: ""
  },
  methods: {
    increase: function() {
      this.counter++;
      this.result = this.counter > 5 ? "Greater Than Five" : "Lower Than five";
    },
    decrease: function() {
      this.counter--;
      this.result = this.counter > 5 ? "Greater Than Five" : "Lower Than five";
    }
  }
});
