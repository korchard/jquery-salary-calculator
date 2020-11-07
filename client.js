console.log('in javaScript'); // ensure javaScript is working

$(document).ready(onReady);

let salaryArray = [];

function onReady() {
    console.log('in jQuery'); // ensure jQuery is working
    $('#submitButton').on('click', submitInfo); // event handler to add info to DOM
    $('.listOfEmployees').on('click', '#deleteInfo', removeEmployee);
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
    employeeList.append(`<tr id="deleteInfo"><th>${employee.firstName}</th><th>${employee.lastName}</th><th>${employee.idNumber}</th><th>${employee.jobName}</th><th id="money">${employee.annualSal}</th><th><button class="remove">Remove</button></th></tr>`);
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
        $('.turnRed').addClass('red');
    }
} // end calculateTotalCost function 

function removeEmployee() {
    $(this).remove();
}

/*function onReady(){
   
    $('.container').on('click', '.red-square', removeRed); //event handler to remove
  
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

function removeRed(){
    $(this).remove(); // removes specific square
    redCount--; // updates total count
    $('#redCount').text(`${redCount}`); // displays total count
} // end removeRed function */