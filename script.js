// ===========|Example 01|==========
// class Person {
  
//     eat() {
//         console.log("Just eat and Eat");

//     };
//     work() {
//         console.log("Lazy Man");

//     };
// }

// class Engineer extends Person {
//     eat() {
//         console.log("All halah Foods need");

//     };
//     work(){
//         console.log("Creative think");
        
//     };
// }

// let engObj = new Person();
// engObj.work()

// ===========|Example 02|==========
class Person {
  constructor(name){
    console.log("Enter Parents");
    
    this.name = name
  }
    eat() {
        console.log("Just eat and Eat");

    };
    work() {
        console.log("Lazy Man");

    };
}

class Engineer extends Person {
    constructor(branch){
        console.log("Enter Child");
        
        super();
        this.branch = branch;
        console.log("Exit");
        
    }
    eat() {
        console.log("All halah Foods need");

    };
    work(){
        console.log("Creative think");
        
    };
}

let EngObj = new Person("CSE")
// EngObj.name()
console.log(EngObj);
