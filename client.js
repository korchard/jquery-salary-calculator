console.log('in javaScript'); // ensure javaScript is working

$(document).ready(onReady);

let totalCost = 0; // declared total cost of 0 initially
let maxMonthly = 20000; // declared a variable for monthly max so this could be adjusted at a later date

function onReady() {
    console.log('in jQuery'); // ensure jQuery is working
    $('#submitButton').on('click', submitInfo); // event handler to add info to DOM
    $('.listOfEmployees').on('click', '.remove', removeEmployee); // removes the specidic employee from the list
    $('#monthlyCosts').text(`${0}`) // added this so that $0 shows up on the page refresh
}

function submitInfo(event) {
  event.preventDefault(); // makes event handler not auto refresh

  let employee = {
        firstName: $('#employeeFirstName').val(),
        lastName: $('#employeeLastName').val(),
        idNumber: $('#employeeIDNumber').val(),
        jobName: $('#jobTitle').val(),
        annualSal: $('#annualSalary').val()
    };
    // conditional to prevent you from adding an employee to the DOM without inputting all of the information
    if (!employee.firstName|| !employee.lastName|| !employee.idNumber || !employee.jobName || !employee.annualSal) { 
        console.log('Please fill out all information');
      } else {
        // append the employee content to the table on the DOM
        $('.listOfEmployees').append(`<tr class="row" id="deleteInfo">
            <th class="column">${employee.firstName}</th>
            <th class="column">${employee.lastName}</th>
            <th class="column">${employee.idNumber}</th>
            <th class="column">${employee.jobName}</th>
            <th class="column money">${employee.annualSal}</th>
            <th class="column"><button class="remove">Remove</button></th>
            </tr>`);
        console.log('Employee Data Entered'); // to ensure function is working
      } // end conditional 
    emptyList(); // empty the input bars   
    calculateTotalCost(employee); // call totalCost to add new employee salary to monthly cost
} // end submitInfo function 

function emptyList() { // emptys the input fields
    $('#employeeFirstName').val('');
    $('#employeeLastName').val('');
    $('#employeeIDNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
} // end emptyList function

function calculateTotalCost(employee) {
    totalCost += Number(employee.annualSal / 12); 
    // adjusts the totalCost to display only two digits after decimal
    $('#monthlyCosts').text(`${totalCost.toFixed(2)}`);
    // conditional to have a display change when maxMonthly is reached - background change
    if (totalCost > maxMonthly) { 
        $('.turnRed').addClass('red');
    } // end conditional
} // end calculateTotalCost function 

function removeEmployee() {
    $(this).parents('#deleteInfo').remove(); // targets the employee row to be deleted

    let targetRow = $(this).parents('#deleteInfo'); // created a variable to then retrieve annual salary from deleted employee

    let deletedSalary = targetRow.children('.money').text(); // created a variable and pulls the annual salary from the deleted employee

    let monthlyCost = (deletedSalary / 12); // takes the annual salary and converts it to monthly cost
        totalCost -= monthlyCost; // removes the deleted salary from the totalCost
    // adjusts the totalCost to display only two digits after decimal
    $('#monthlyCosts').text(`${totalCost.toFixed(2)}`); // displays the adjusted monthly cost on the DOM
} // end removeEmployee function
