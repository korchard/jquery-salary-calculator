console.log('in javaScript'); // ensure javaScript is working

$(document).ready(onReady);

let salaryArray = [];

function onReady() {
    console.log('in jQuery'); // ensure jQuery is working
    $('#submitButton').on('click', submitInfo); // event handler to add info to DOM
}

function submitInfo(event) {
  event.preventDefault(); // makes event handler not auto refresh

  let employee = {
        firstName: $('#employeeFirstName').val(),
        lastName: $('#employeeLastName').val(),
        idNumber: $('#employeeIDNumber').val(),
        jobName: $('#jobTitle').val(),
        annualSal: $('#annualSalary').val(),
    };
    
    let employeeList = $('.listOfEmployees');
    // append the employee content to the table on the DOM
    employeeList.append(`<thead><tr><th>${employee.firstName}</th><th>${employee.lastName}</th><th>${employee.idNumber}</th><th>${employee.jobName}</th><th>${employee.annualSal}</th></thead>`);
    console.log('Employee Data Entered'); // to ensure function is working
    salaryArray.push(employee.annualSal); // push annual salary into empty salary array

    emptyList(); // empty the input bars   
    calculateTotalCost(); // call totalCost to add new employee salary to monthly cost
} // end submitInfo function 

function emptyList() {
    $('#employeeFirstName').val('');
    $('#employeeLastName').val('');
    $('#employeeIDNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
} // end emptyList function

function calculateTotalCost() {
    let totalCost = 0; // declared total cost of 0 initially
    for (let i = 0; i < salaryArray.length; i++) {
        totalCost += Number(salaryArray[i]); //iterates through the salary array to add the total cost
    } console.log('Total Monthly Cost is: ', totalCost); // end for loop
    $('#monthlyCosts').text(`${totalCost}`);

    if (totalCost > 20000) {
        $('.turnRed').addClass()
    }
} // end calculateTotalCost function 


/*function onReady(){
   
    $('.container').on('click', '.red-square', removeRed); //event handler to remove
    $('.container').on('click', '.blue-square', removeBlue); //same as above
    $('.container').on('click', '.green-square', removeGreen); // same as above
    $('.container').on('click', '.yellow-square', removeYellow); // same as above

} // end onReady function

function popRed() {
    let value = $('#redInput').val();
    for (let i = 0; i < value; i++) { // loop adds value amount
        console.log('Red Button');
        $('.container').append(`<div class="size red-square" id="clickRed"></div>`);
    }
    redCount += Number(value); // updates and adds total count
    $('#redCount').text(`${redCount}`); // displays total count
} // end popRed function

function popBlue() {
    let value = $('#blueInput').val();
    for (let i = 0; i < value; i++) { // loop adds value amount
        console.log('Blue Button');
        $('.container').append(`<div class="size blue-square" id="clickBlue"></div>`);
    }
    blueCount += Number(value); // updates and adds total count
    $('#blueCount').text(`${blueCount}`); // displays total count
} // end popBlue function


function popGreen() {
    let value = $('#greenInput').val();
    for (let i = 0; i < value; i++) { //loop adds value amount of squares
        console.log('Green Button');
        $('.container').append(`<div class="size green-square" id="clickGreen"></div>`);
    }
    greenCount += Number(value); // updates and adds total count
    $('#greenCount').text(`${greenCount}`); // displays total count
} // end popGreen function


function popYellow() {
    let value = $('#yellowInput').val();
    for (let i = 0; i < value; i++) { // loop adds value amount of squares
        console.log('Yellow Button');
        $('.container').append(`<div class="size yellow-square" id="clickYellow"></div>`);
    }
    yellowCount += Number(value); // updates and adds total count
    $('#yellowCount').text(`${yellowCount}`); // displays total count
} // end popYellow function

function removeRed(){
    $(this).remove(); // removes specific square
    redCount--; // updates total count
    $('#redCount').text(`${redCount}`); // displays total count
} // end removeRed function

function removeBlue(){
    $(this).remove(); //removes specific square
    blueCount--; // updates total count
    $('#blueCount').text(`${blueCount}`); // displays total count
} // end removeBlue function

function removeGreen(){
    $(this).remove(); // removes specific square
    greenCount--; // updates total count
    $('#greenCount').text(`${greenCount}`); // displays total count
} // end removeGreen function

function removeYellow(){
    $(this).remove(); // removes specific square
    yellowCount--; // updates total count
    $('#yellowCount').text(`${yellowCount}`); // displays total count
} // end removeYellow function */