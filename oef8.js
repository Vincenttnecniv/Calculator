let calcDisplayArray = [];

//handle button click
function handleButtonClick(element) {
  let number = element.value;
  calcDisplayArray.push(number);
  let calcDisplayText = calcDisplayArray.join(" ");
  calcDisplayText = calcDisplayText.replaceAll("*", "x");
  calcDisplayText = calcDisplayText.replaceAll("/", "÷");
  document.getElementById("display-array").textContent = calcDisplayText;
  let buttonType = element.getAttribute("data:buttontype");
}

window.onload = function () {
  //go back
  let goBackOne = document.getElementById("back");

  const removeOne = () => {
    console.log("Add removeOne is called");

    if (calcDisplayArray.length > 1) {
      calcDisplayArray.pop();
      document.getElementById("display-array").textContent = calcDisplayArray;
    } else {
      calcDisplayArray = [];
      document.getElementById("display-array").textContent = 0;
    }
  };

  if (goBackOne) {
    goBackOne.addEventListener("click", removeOne);
  }

  let form = document.getElementById("clear");
  function handleForm(event) {
    event.preventDefault();
    console.log("handleForm");
    document.getElementById("display-array").textContent = [];
    return (calcDisplayArray = []);
  }
  form.addEventListener("submit", handleForm);

  //Do equation
  let equal = document.getElementById("do-eq");

  const doEquation = () => {
    console.log("Do equation");
    let removeQuotes = calcDisplayArray.reduce((a, b) => {
      return a + "" + b;
    });
    try {
      console.log(eval(removeQuotes));
      var result = eval(removeQuotes);
      console.log(
        "🚀 ~ file: oef8.js ~ line 248 ~ doEquation ~ result",
        result
      );
    } catch (e) {
      // showing message or other proses you want
      let error = "Incorrect equation ! Try again !";
      alert(error);
      console.log(e.message);
      console.log("yes");
      calcDisplayArray = [];
      window.location.reload();
    }
    if (result < 0) {
      document.getElementById("display-array").textContent = result;
    }

    document.getElementById("display-array").textContent = result;
  };
  if (equal) {
    equal.addEventListener("click", doEquation);
  }
};
