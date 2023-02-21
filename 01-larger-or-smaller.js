//Author : Ranjitha

//Date: 21-02-2023

//Larger or Smaller ?

//Usage: Use simple conditional statements

//Create an application that accepts two integers within two separate prompts.

//Then, display only the larger of the two within the browser window.Don’t forget to handle the fact that the two could be equal.


let num1, num2;
num1 = parseInt(prompt('Enter first number'));
num2 = parseInt(prompt('Enter first number'));

if (num1 > num2) {
    document.write("Num1=" + num1 + " is greater among two numbers");
}
else if (num2 > num1) {
    document.write("Num2=" + num2 + " is greater among two numbers");
}
else
    document.write("Num1=" + num1 + " is equal to Num2="+num2);