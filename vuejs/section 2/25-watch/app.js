new Vue({
  el: "#app",
  data: {
    counter: 0,
    secondCounter: 0
  },
  computed: {
    output: function() {
      console.log("compute");
      return this.counter > 5 ? "Greater Than Five" : "Lower Than five";
    }
  },
  watch:{
    counter: function(value){
      vm = this;
      setTimeout(function() {
        console.log(value);
        vm.counter = 0;
      }, 2000);
    }
  },
  methods: {
    result: function() {
      console.log("method");
      return this.counter > 5 ? "Greater Than Five" : "Lower Than five";
    }
  }
});
