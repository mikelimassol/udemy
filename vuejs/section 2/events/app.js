new Vue({
    el:"#app",
    data:{
        counter: 0,
        x:0,
        y:0
    },
    methods: {
        increaseCounter: function(step, event){
            this.counter += (step + event.clientX);
        },
        updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        },
        stop: function(event){
            event.stopPropagation();
        },
        alertMe: function(){
            alert("Alert!")
        }


    }
})