// singleton
// Singleton using Object.create
const singleton = Object.create({
    // properties and methods of the singleton object
    exampleProperty: 'example',
    exampleMethod: function() {
      console.log('Example method called');
    }
  });
  
  // The singleton object is now created
  console.log(singleton.exampleProperty);  // Output: 'example'
  singleton.exampleMethod();  // Output: 'Example method called'
  


// object literals
let mysbl=Symbol(key1)
const jsUser={
    name:"akash",
    "full name":"akash sharma",
    age:"19",
    course:"Btech",
    [mysbl]:"mykey"
}