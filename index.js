// Write your solution in this file!

var customerName= 'bob';
var bestCustomer;


function upperCaseCustomerName(){
  customerName=customerName.toUpperCase();
}

function setBestCustomer(){
   bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
     bestCustomer = 'maybe bob'
}
 
const LeastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer(){
     LeastFavoriteCustomer = 'new name'
}