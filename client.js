console.log('in javaScript'); // ensure javaScript is working

$(document).ready(onReady);

let employeeArray = [];

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

    //let employeeList = $('.listOfEmployees');
    // append the employee content to the table on the DOM

    if (!employee.firstName|| !employee.lastName|| !employee.idNumber || !employee.jobName || !employee.annualSal) { 
        console.log('Please fill out all information');
      } else {
        /*employeeList.append(`<tr class="row" id="deleteInfo"><th class="column">${employee.firstName}</th>
            <th class="column">${employee.lastName}</th>
            <th class="column">${employee.idNumber}</th>
            <th class="column">${employee.jobName}</th>
            <th class="column" class="money">${employee.annualSal}</th>
            <th class="column"><button class="remove">Remove</button></th></tr>`);*/
        console.log('Employee Data Entered'); // to ensure function is working
        employeeArray.push(employee); // push annual salary into empty salary array
        display(); //inputs the appended employee to the DOM
      }
    emptyList(); // empty the input bars   
    //calculateTotalCost(); // call totalCost to add new employee salary to monthly cost
    
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
    for (let i = 0; i < employeeArray.length; i++) {
        totalCost += Number(employeeArray[i].annualSal); //iterates through the employee array to add the total cost
    } // end for loop
    $('#monthlyCosts').text(`${totalCost}`);

    if (totalCost > 20000) {
        $('.turnRed').addClass('red');
    }
} // end calculateTotalCost function 

function display() {
    console.log(employeeArray);
    let employeeList = $('.displayEmployees');
    employeeList.empty(); 
    for (let i = 0; i < employeeArray.length; i++) {
        employeeList.append(`<tr class="row" id="deleteInfo"><th class="column">${employeeArray[i].firstName}</th>
            <th class="column">${employeeArray[i].lastName}</th>
            <th class="column">${employeeArray[i].idNumber}</th>
            <th class="column">${employeeArray[i].jobName}</th>
            <th class="column" class="money">${employeeArray[i].annualSal}</th>
            <th class="column"><button onclick=removeEmployee(${i}) class="remove">Remove</button></th></tr>`);
        } // end for loop - which appends the employee info to the table on the DOM
        calculateTotalCost();
} // end display function

function removeEmployee(idx) {
    $(this).remove();
    employeeArray.splice(idx, 1);
    display();
    console.log(employeeArray);
} // end removeEmployee function
