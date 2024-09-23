const firstFunction = function(){
      let name="akki";
      displayName=()=>{

        console.log(`Hello, ${name}`);
      }
      displayName();
}
// lexical function
const parent=function(){
    let age=25;
    // console.log(childAge); not able to access
    childFunction=function(){
        let childAge="12"
      console.log(`My age is ${age}`);
    }
    child2=function()
    {
        
        // console.log(`My child's age is ${childAge}`); cant access child another child
    }
    childFunction();
}
parent()
firstFunction();

// closure
function outerFunction() {
    let outerVariable = "This is a variable in outerFunction";

    function innerFunction() {
        console.log(outerVariable);
    }
    //  not only innerFunction is return but also return lexical scope send with innerfunction all reated varible from outer function
    
    return innerFunction;
}

let closureFunction = outerFunction();
// 
closureFunction();
