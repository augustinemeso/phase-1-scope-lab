// 1. Declare a variable in global scope called customerName
var customerName = 'bob';

// 2. Function that uppercases the global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Function that declares a global variable called bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declare in global scope and assign
}

// 4. Function that overwrites the bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Change bestCustomer
}

// 5. Declare a constant in global scope called leastFavoriteCustomer
const leastFavoriteCustomer = 'alice';

// 6. Function that attempts to change the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
    // This line should throw an error since you can't change a constant
    leastFavoriteCustomer = 'charlie';
}
