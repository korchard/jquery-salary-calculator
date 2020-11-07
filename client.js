console.log('in javaScript'); // ensure javaScript is working

$(document).ready(onReady);

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

    emptyList(); // empty the input bars   
} // end submitInfo function 

function emptyList() {
    $('#employeeFirstName').val('');
    $('#employeeLastName').val('');
    $('#employeeIDNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
} // end emptyList function