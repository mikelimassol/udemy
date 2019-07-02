new Vue({
    el: "#app",
    data:{
        hello : "hello from var",
        link: "http://www.google.co.uk",
        finishedLink: "<a href='http://www.google.co.uk'>Google</a>"
    },
    methods : {
        helloMethod: function(){
            this.hello = "hello from method"
            return this.hello;
        },
        onHelloChange: function(event){
            this.hello = event.target.value;
        }
    }
})