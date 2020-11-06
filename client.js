console.log('in javaScript'); // ensure javaScript is working

$(document).ready(onReady);

function onReady() {
    console.log('in jQuery'); // ensure jQuery is working
    
    $('#submitButton').on('click', submitInfo); // event handler to add info to DOM
}

function submitInfo() {
    let firstName = $('#employeeFirstName').text();
    let lastName = $('#employeeLastName').text();
    let idNumber = $('#employeeIDNumber').val();
    let jobName = $('#jobTitle').text();
    let annualSal = $('#annualSalary').val();

    $('.listOfEmployees').append(`<li></li>`)
}