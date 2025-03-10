// code 1

console.log(Date.now());
console.log(performance.now());

let t1 = performance.now();
for (i = 0; i < 120; i++) {
  let para = document.createElement("P");
  para.textContent = "this is para " + (i + 1);
  document.body.appendChild(para);
}

let t2 = performance.now();
console.log("total time taken by code 1 ", t2 - t1);

// code 2

let myDiv = document.createElement("div");
let t3 = performance.now();
for (let i = 0; i < 100; i++) {
  let para = document.createElement("p");
  para.textContent = "this is para code 2 " + (i + 1);
  myDiv.appendChild(para);
}

document.body.appendChild(myDiv);

let t4 = performance.now();

console.log("total time be code 2 ", t4 - t3);

console.log(Date.now());
console.log(performance.now());
Date.now(); // 1678889977578
performance.now(); // 233936
