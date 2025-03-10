let promise1 = new Promise((resolve, reject) => {
  console.log("here why");
  setTimeout(() => resolve("I am resolving after one sec"), 1000);
  //   setTimeout(() => reject("I am rejecting after one sec"), 100);
});

// console.log(promise1);

// setTimeout(() => console.log(promise1), 2000);

let promise2 = new Promise((resolve, rejected) => {
  let success = false;
  if (success) {
    resolve("I am sucessfull");
  } else {
    rejected("I have some error");
  }
});

// promise2
//   .then((value) => {
//     console.log("first then " + value);
//     return value;
//   })
//   .then((value2) => {
//     console.log("second then " + value2);
//     return value2;
//   })
//   .catch((error) => {
//     console.log("some error " + error);
//     return error;
//   })
//   .finally((message) => console.log("I will run either ways " + message));

// let promisesAll = Promise.all([promise2, promise1]);

// promisesAll
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => console.error("there is error in promise all", error));

// let promiseAny = Promise.any([promise2, promise1]);

// promiseAny
//   .then((values) => console.log(values))
//   .catch((error) => {
//     console.log(error);
//     console.log(typeof error);
//     console.log(error.errors);
//     let errors = error.errors;
//     for (err in errors) {
//       console.log(errors[err]);
//     }
//   });

// let promiseRace = Promise.race([promise1, promise2]);

// promiseRace
//   .then((values) => console.log(values))
//   .catch((error) => console.log(error));

let promiseAllSettled = Promise.allSettled([promise1, promise2]);

promiseAllSettled
  .then((values) => console.log(values))
  .catch((error) => console.log("error" + error));
