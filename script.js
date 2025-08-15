
function calculate(){

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let numcalculate = document.getElementById("Calculate").value;

    if (numcalculate === "+"){
        result = num1 + num2;
        document.getElementById("result").innerHTML = "The result is : "
        + result.toString();
    }
    else if(numcalculate === "-")
    {
        result = num1 - num2;
        document.getElementById("result").innerHTML = "The result is : "
        + result.toString();
    }
     else if(numcalculate === "*")
    {
        result = num1 * num2;
        document.getElementById("result").innerHTML = "The result is : "
        + result.toString();
    }
     else if(numcalculate === "/")
    {
        result = num1 / num2;
        document.getElementById("result").innerHTML = "The result is : "
        + result.toString();
    }

}
