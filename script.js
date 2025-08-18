function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let numcalculate = document.getElementById("Calculate").value;

  // Here i'm valdiating the input from te user...
  if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
    document.getElementById("result").innerHTML =
      "Entered input is not correct";
  }

  //Here the Calculate funcation
  else if (numcalculate === "+") {
    result = num1 + num2;
    document.getElementById("result").innerHTML =
      "The result is : " + result.toString();
  } else if (numcalculate === "-") {
    result = num1 - num2;
    document.getElementById("result").innerHTML =
      "The result is : " + result.toString();
  } else if (numcalculate === "*") {
    result = num1 * num2;
    document.getElementById("result").innerHTML =
      "The result is : " + result.toString();
  } else if (numcalculate === "/") {
    result = num1 / num2;
    document.getElementById("result").innerHTML =
      "The result is : " + result.toString();
  } else {
    console.log("ERROR should never reach here");
  }
}
