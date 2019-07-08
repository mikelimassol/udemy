new Vue({
  el: "#exercise",
  data: {
    highlight: false,
    customClass: "red-box",
    customBackgroundStyle: "green",
    progress: 0,
    hide: false
  },
  methods: {
    startEffect: function() {
      ve = this;
      i = 0;
      hightlightInterval = setInterval(function() {
        ve.highlight = !ve.highlight;
        i++;
        if (i == 4) {
          clearInterval(hightlightInterval);
        }
      }, 2000);
    },
    startInterval: function() {
      ve = this;
      ve.progress = 0;
      progressBarInterval = setInterval(function() {
        ve.progress = ve.progress + 10;
        console.log(ve.progress);
        if (ve.progress == 100) {
          clearInterval(progressBarInterval);
        }
      }, 1000);
    }
  }
});
