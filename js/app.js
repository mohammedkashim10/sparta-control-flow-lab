alert('Welcome to the Control Flow Lab, let\'s go for a walk outside');
var answer1 = prompt('Oh look, there\'s an ice-cream van. Would you like to buy an ice-cream?');

var flavoursArray = ['chocolate', 'vanilla', 'strawberry']

var price = 1;

switch (answer1) {
  case 'Yes':
    var flavour = prompt('What flavour would you like?');
    if (flavour === flavoursArray[0] || flavour === flavoursArray[1] || flavour === flavoursArray[2]) {
      alert ('That\'ll be £1')
    } else {
      alert ('Sorry we are sold out')
    };
  break;
  case 'yes':
    var flavour = prompt('What flavour would you like?');
    if (flavour === flavoursArray[0] || flavour === flavoursArray[1] || flavour === flavoursArray[2]) {
      alert ('That\'ll be £1')
    } else {
      alert ('Sorry we are sold out')
    };
  break;
  case 'No':
    alert ('Let\'s go to the park instead')
  break;
  case 'no':
    alert ('Let\'s go to the park instead')
  break;
  default: prompt ('Please answer \'Yes\' or \'No\'')
}


// console.log();

// Strings - yup
// Alerts - yup
// Prompts - yup
// Integers/Floats (parseInt, parseFloat)
// Operators (+-*/)
// Booleans
// Array - yup
// Object (BONUS)
// If-Else - yup
// Switch - yup
