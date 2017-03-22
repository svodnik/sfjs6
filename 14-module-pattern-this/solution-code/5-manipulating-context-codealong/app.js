var userData = {
  fullName: "Not Set",
  // setUserName is a method on the userData object​
  setUserName: function (firstName, lastName)  {
  // this refers to the fullName property in this object​
    this.fullName = firstName + " " + lastName;
  }
}

function getUserInput (firstName, lastName, callback, callbackObj) {
  callback(firstName, lastName); 
  console.log(this);
  // The use of the call() or apply() method below will set the "this" value to callbackObj​
  //callback.call(callbackObj, firstName, lastName);
  //callback.apply (callbackObj, [firstName, lastName]); // apply just lets you specify a single array -- for situations where you don't know how many arguments you'll be passing
}

// using bind() 
var contextSetUser = userData.setUserName.bind(userData)

