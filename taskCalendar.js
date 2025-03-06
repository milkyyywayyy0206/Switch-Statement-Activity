// prompt the user to enter the day of the week
let dayInWeek = prompt("Enter the day of the week: ").tolowerCase();

// Check the day and assign a task
switch (dayInWeek) {
    case "monday":
        console.log("Your task for Mondat is: Finish your assignment")
        break;
    case "tuesday":
        console.log("Your task for Tuesday is: Go to the gym")
        break;
    case "wednesday":
        console.log("Your task for Wednesday is: Attend your online class")
        break;
    case "thursday":
        console.log("Your task for Thursday is: Finish your project")
        break;
    case "friday":
        console.log("Your task for Friday is: Submit your assignment")
        break;
    case "saturday":
        console.log("Your task for Saturday is: take a break")
        break;
    case "sunday":
        console.log("Your task for Sunday is: Attend church service")
        break;
    default:
        console.log("Invalid day");
        break;
}