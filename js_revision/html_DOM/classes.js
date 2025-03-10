class Human {
  age = 12;
  ht = 180;
  wt = 82;
  #pay = 8000;

  constructor(newAge, newht, newwt = 75) {
    this.age = newAge;
    this.ht = newht;
    this.wt = newwt;
  }

  set modifySal(salary) {
    console.log("setting the salaryy to ", salary);
    this.#pay = salary;
  }

  get getSal() {
    console.log("the pay of the employe ", this.#pay);
  }

  walking() {
    console.log("Human are walking");
  }
}

// const obj1 = new Human(28, 178);
// obj1.walking();
// console.log(obj1.age);
// console.log(obj1.wt);
// console.log(obj1.ht);
// obj1.getSal;

// obj1.modifySal = 20000;
// obj1.getSal;

let obj1 = {
  age: 12,
};

let prop = {
  sal: 20,
};
// obj2 = { ...obj1, ...prop };
// obj2 = Object.assign({}, obj1, prop);
// also we can do from the iteration

// console.log(obj1);
// console.log(obj2);

// obj1["ht"] = 120;
// console.log(obj1);

// console.log(obj2);

// error handling

try {
  //   let c = 1;
  console.log(c);
} catch (err) {
  throw new Error("variable is not declared");
  console.log("there is a error");
} finally {
  console.log("I will execute in both cases");
}
