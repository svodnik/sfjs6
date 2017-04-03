var foot = {
    kick: function () {
        this.yelp = "Ouch!"; // this.yelp returns undefined until you call this function as a method on an object. What is the ES6 way to bind the value of this to the console.log below?
        setImmediate(function () {
            console.log(this.yelp);
        });
    }
};
foot.kick();
