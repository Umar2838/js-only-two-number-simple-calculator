var num1 = +prompt("Enter 1st value")
var opt = prompt("give operator")
var num2 = +prompt("Enter the 2nd value")
var result;

if(opt === "+","-","*","/","%"){
    result=num1+num2
    result=num1-num2
    result=num1*num2
    result=num1/num2
}

alert(result);