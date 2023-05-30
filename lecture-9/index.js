/* Asssignment - 1 */
//Get references to the elements
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");

// onclick events
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

/* Asssignment - 2 */
//Get references to the elements
const colorInput = document.getElementById("colorInput");
const colorBtn = document.getElementById("changeColorBtn");

// possible colors
const colors = ["red", "blue", "green", "black", "white"];

// onclick event
colorBtn.addEventListener("click", () => {
  const inputValue = colorInput.value;

  if (colors.includes(inputValue)) {
    document.body.style.backgroundColor = inputValue;
  } else {
    alert("color is incorrect");
  }
});

/* Asssignment - 3 */
//Get references to the elements
const numbersInput = document.getElementById("numbersInput");
const averageBtn = document.getElementById("averageBtn");
const answer = document.getElementById("answer");

const fcAverage = () => {
  const numbersArr = numbersInput.value.split(":");
  let sum = 0;
  for (const number of numbersArr) {
    sum += parseFloat(number);
  }

  let average = sum / numbersArr.length;

  if (isNaN(average)) {
    return (answer.innerText = "please enter correct numbers");
  } else {
    return (answer.innerText = `Average number ${average}`);
  }
};

averageBtn.addEventListener("click", fcAverage);
