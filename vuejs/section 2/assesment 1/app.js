new Vue({
    el: "#exercise",
    data:{
      name: "Michael",
      age:  41,
      image: "http://pap-www-prod.s3.amazonaws.com/color_change/image_preview/9357/cropped_previewSwap.png"
    },
    methods : {
        ageMultiplied: function(){
            return this.age * 3;
        },
        getRandomNumber: function(){
            return Math.random();
        },
        onChangeName: function(event){
            this.name=event.target.value;
        }
    }
})