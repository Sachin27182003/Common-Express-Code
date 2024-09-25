// Define a class or constructor function
class User {
    constructor(xyz) {
      // 'this' refers to the new object
      this.name = xyz.name;
      this.age = xyz.age;
      console.log(`first ${this.name}`)
      console.log(`first ${this.age}`)
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  class User2 {
    constructor(xyz) {
      // 'this' refers to the new object
      this.name = xyz.name;
      this.age = xyz.age;
      console.log(`second ${this.name}`)
      console.log(`second ${this.age}`)
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const xyz = {
    name: "Sachin",
    age: 20
  }
  
  const user1 = new User(new User2(xyz));
  
  console.log(user1)
  
  