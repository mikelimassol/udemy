new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods:{
        alertMe: function(){
            alert("Hi!");
        }, 
        updateValue: function(event){
            this.value=event.target.value;
        }
    }
});