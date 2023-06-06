/* Assignmnet 1 */

const myCallback = () => {
  console.log("This is from callback");
}
setTimeout(myCallback, 2000);

let mySetTimeout = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("This is from promise"), delay);
  });
};

mySetTimeout(2000).then((res) => console.log(res));

/* Assignmnet 2 */

// with .then().catch() syntax
// make toys function
const makeToys = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve("undefected");
      } else {
        reject("defected");
      }
    }, delay);
  });
};

// sell toys function
const sellToys = (status, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === "undefected") {
        if (Math.random() > 0.1) {
          resolve("Toy sold");
        } else {
          reject("Toy did not sell");
        }
      }
    }, delay);
  });
};

//deliver toys fucntion
const deliverToys = (deliverStatus, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (deliverStatus === "Toy sold") {
        if (Math.random() > 0.1) {
          resolve("Toy is delivered");
        } else {
          reject("Toy is not delivered");
        }
      }
    }, delay);
  });
};

makeToys(3000)
  .then((status) => sellToys(status, 1000))
  .then((deliverStatus) => deliverToys(deliverStatus, 2000))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));



// with async, await
async function toysFactory() {
  try {
    const status = await makeToys(3000);
    const deliverStatus = await sellToys(status, 1000);
    const result = await deliverToys(deliverStatus, 2000);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

toysFactory();
