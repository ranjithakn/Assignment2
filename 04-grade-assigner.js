//Author : Ranjitha

//Date: 21-02-2023
/*The “Grade Assigner” Application

Usage: Use else if or switch statements

    Collect the a number between 1 and 100 from the user.
Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console*/

// Set the student's grade
let grade = prompt("Enter a number between 1 and 100");

if (grade > 100) {
	alert("Please enter a number between 1 and 100");
}

switch (true) {
	// If score is 90 or greater
	case grade >= 90:
		document.write("You received an A");
		break;
	// If score is 80 or greater
	case grade >= 80:
		document.write("You received an B");
		break;
	// If score is 70 or greater
	case grade >= 70:
		document.write("You received an C");
		break;
	// If score is 60 or greater
	case grade >= 60:
		document.write("You received an D");
		break;
	// Anything 59 or below is failing
	default:
		document.write("You received an F");
}