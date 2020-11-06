console.log('in javaScript'); // ensure javaScript is working

$(document).ready(onReady);

function onReady() {
    console.log('in jQuery'); // ensure jQuery is working
    
    formInput();
    $('#submitButton').on('click', submitInfo); // event handler to add info to DOM
}

function formInput(event) {
    event.preventDefault();
}

function submitInfo() {
    let employee = {
        firstName: $('#employeeFirstName').val(),
        lastName: $('#employeeLastName').val(),
        idNumber: $('#employeeIDNumber').val(),
        jobName: $('#jobTitle').val(),
        annualSal: $('#annualSalary').val(),
    }
    
    $('.listOfEmployees').append(`<thead><tr><th>${employee.firstName}</th><th>${employee.lastName}</th><th>${employee.idNumber}</th><th>${employee.jobName}</th><th>${employee.annualSal}</th></thead>`);
    console.log('Employee Data Entered');
}

/*
function appendDom(){
  let header = $('<h1>Challenge 170</h1>');
  $('.container').append(header);

  let table = $('<table></table>');
  table.append('<thead><tr><th>Name</th><th>Type</th><th>Age</th></thead>');

  let tbody = $('<tbody id="tableBody"></tbody>');
  table.append(tbody);

  $('.container').append(table);
  addInput();
  clearList();

  // YOUR CODE HERE
  // Remember, small steps!

  // Display each of the pets on the DOM.
  for (let item of pets) {
    table.append(`<thead class="remove"><tr><th>${item.name}</th><th>${item.type}</th><th>${item.age}</th></thead>`);
  }

  // Add an input field that allows users to add new pets from the index page.
  function addInput() {
    let nameBox = $('<input type="text" id="newName" />');
    $('.container').append(nameBox);

    let typeBox = $('<input type="text" id="newType" />');
    $('.container').append(typeBox);

    let ageBox = $('<input type="text" id="newAge" />');
    $('.container').append(ageBox);

    let addButton = $('<button id="addPets">Add Pet</button>');
    $('.container').append(addButton);

    $('#addPets').on('click', addPet);

  }

  function addPet(name, type, age) {
    let newPet = {
      name: $('#newName').val(),
      type: $('#newType').val(),
      age: $('#newAge').val()
    }
    table.append(`<thead class="remove"><tr><th>${newPet.name}</th><th>${newPet.type}</th><th>${newPet.age}</th></thead>`);
  } 
  // Add a button that clears out the list of pets.
}

function clearList() {
  let clearButton = $('<button id="removePets">Remove Pets</button>');
  $('.container').append(clearButton);

  $('#removePets').on('click', emptyPet);
}

function emptyPet() {
  $('.remove').remove();
}*/