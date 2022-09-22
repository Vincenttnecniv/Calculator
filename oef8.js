let calcDisplay = [];
window.onload = function () {
  //Add a plus to sum
  let plus = document.getElementById("plus");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let plusVal = document.getElementById("plus").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addPlus = () => {
    console.log("Add plus is called");
    calcDisplay.push(plusVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (plus) {
    plus.addEventListener("click", addPlus);
  }

  //Add a minus to sum
  let minus = document.getElementById("minus");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let minusVal = document.getElementById("minus").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addMinus = () => {
    console.log("Add minus is called");
    calcDisplay.push(minusVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (minus) {
    minus.addEventListener("click", addMinus);
  }

  //Add a devide to sum
  let devide = document.getElementById("devide");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let devideVal = document.getElementById("devide").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addDevide = () => {
    console.log("Add devide is called");
    calcDisplay.push(devideVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (devide) {
    devide.addEventListener("click", addDevide);
  }

  //Add a times to sum
  let times = document.getElementById("times");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let timesVal = document.getElementById("times").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addTimes = () => {
    console.log("Add times is called");
    calcDisplay.push(timesVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (times) {
    times.addEventListener("click", addTimes);
  }

  //Add a one to sum
  let one = document.getElementById("one");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let valOne = document.getElementById("one").value;
  let oneVal = Number(valOne);
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addOne = () => {
    console.log("Add one is called");
    calcDisplay.push(oneVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (one) {
    one.addEventListener("click", addOne);
  }

  //Add a two to sum
  let two = document.getElementById("two");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let twoVal = document.getElementById("two").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addTwo = () => {
    console.log("Add two is called");
    calcDisplay.push(twoVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (two) {
    two.addEventListener("click", addTwo);
  }

  //Add a three to sum
  let three = document.getElementById("three");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let threeVal = document.getElementById("three").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addThree = () => {
    console.log("Add three is called");
    calcDisplay.push(threeVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (three) {
    three.addEventListener("click", addThree);
  }

  //Add a four to sum
  let four = document.getElementById("four");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let fourVal = document.getElementById("four").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addFour = () => {
    console.log("Add four is called");
    calcDisplay.push(fourVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (four) {
    four.addEventListener("click", addFour);
  }

  //Add a five to sum
  let five = document.getElementById("five");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let fiveVal = document.getElementById("five").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addFive = () => {
    console.log("Add five is called");
    calcDisplay.push(fiveVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (five) {
    five.addEventListener("click", addFive);
  }

  //Add a six to sum
  let six = document.getElementById("six");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let sixVal = document.getElementById("six").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addSix = () => {
    console.log("Add six is called");
    calcDisplay.push(sixVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (six) {
    six.addEventListener("click", addSix);
  }

  //Add a seven to sum
  let seven = document.getElementById("seven");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let sevenVal = document.getElementById("seven").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addSeven = () => {
    console.log("Add seven is called");
    calcDisplay.push(sevenVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (seven) {
    seven.addEventListener("click", addSeven);
  }

  //Add a eight to sum
  let eight = document.getElementById("eight");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let eightVal = document.getElementById("eight").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addEight = () => {
    console.log("Add eight is called");
    calcDisplay.push(eightVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (eight) {
    eight.addEventListener("click", addEight);
  }

  //Add a nine to sum
  let nine = document.getElementById("nine");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let nineVal = document.getElementById("nine").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addNine = () => {
    console.log("Add nine is called");
    calcDisplay.push(nineVal);
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (nine) {
    nine.addEventListener("click", addNine);
  }

  //Add a zero to sum
  let zero = document.getElementById("zero");
  // console.log("🚀 ~ file: oef8.js ~ line 4 ~ plus", plus);
  let zeroVal = document.getElementById("zero").value;
  // console.log("🚀 ~ file: oef8.js ~ line 6 ~ plusVal", plusVal);
  const addZero = () => {
    console.log("Add zero is called");
    calcDisplay.push(zeroVal);
    console.log(
      "🚀 ~ file: oef8.js ~ line 219 ~ addZero ~ calcDisplay",
      calcDisplay
    );
    console.log("🚀 ~ file: oef8.js ~ line 2 ~ calcDisplay", calcDisplay);
    let removeQuotes = calcDisplay.reduce((a, b) => a + " " + b);
    document.getElementById("display-array").textContent = removeQuotes;
  };
  if (zero) {
    zero.addEventListener("click", addZero);
  }

  //go back
  let goBackOne = document.getElementById("back");

  const removeOne = () => {
    console.log("Add removeOne is called");

    if (calcDisplay.length > 1) {
      calcDisplay.pop();
      document.getElementById("display-array").textContent = calcDisplay;
    } else {
      calcDisplay = [];
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
    return (calcDisplay = []);
  }
  form.addEventListener("submit", handleForm);

  //Do equation
  let equal = document.getElementById("do-eq");

  const doEquation = () => {
    console.log("Do equation");
    let removeQuotes = calcDisplay.reduce((a, b) => {
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
      calcDisplay = [];
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
