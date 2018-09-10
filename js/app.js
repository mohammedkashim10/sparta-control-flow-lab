alert('Welcome to the Control Flow Lab, let\'s go for a walk outside');

var answer1 = prompt('Oh look, there\'s an ice-cream van. Would you like to buy an ice-cream?');

var flavoursArray = ['chocolate', 'vanilla', 'strawberry', 'mint', 'bubblegum']

var price = 1.50;

switch (answer1) {
  case 'Yes':
    var flavour = prompt('What flavour would you like?');
    if (flavour === flavoursArray[0] || flavour === flavoursArray[1] || flavour === flavoursArray[2] || flavour === flavoursArray[3] || flavour === flavoursArray[4]) {
      var quantity = prompt('How many would you like?');
      var priceTotal = quantity*price;
      alert('That\'ll be £'+ priceTotal.toFixed(2));
    } else {
      alert('Sorry we are sold out!')
    };
    break;
  case 'yes':
    var flavour = prompt('What flavour would you like?');
    if (flavour === flavoursArray[0] || flavour === flavoursArray[1] || flavour === flavoursArray[2] || flavour === flavoursArray[3] || flavour === flavoursArray[4]) {
      var quantity = prompt('How many would you like?');
      var priceTotal = quantity*price;
      alert('That\'ll be £'+ priceTotal.toFixed(2));
    } else {
      alert('Sorry we are sold out!')
    };
    break;
  case 'No':
    alert('Let\'s go to the park instead')
    break;
  case 'no':
    alert('Let\'s go to the park instead')
    break;
  // while loop needed to make this work: if invalid, loops back to initial question
  // default: alert ('Invalid input! Please answer \'Yes\' or \'No\'')
}

if (answer1 === 'Yes' || answer1 === 'yes') {
  prompt('Hope you enjoyed our service! Please give a rating out of 10.')
  alert('Thank you for your feedback!')
}

if (answer1 === 'No' || answer1 === 'no') {
  var parkActivity = prompt('What would you like to do: a) play football, b) sit on the bench, c) sunbathe. Please answer \'a\', \'b\', or \'c\'')
  switch (parkActivity) {
    case 'a':
      alert('Great, put your shooting boots on!')
      break;
    case 'b':
      alert('Nice, a little time to oneself is always healthy!')
      break;
    case 'c':
      alert('Lovely, time to relax and take in the sun!')
      break;
  }
}

// THINGS TO INCLUDE
// Strings - yup
// Alerts - yup
// Prompts - yup
// Integers/Floats - yup
// Operators (+-*/) - yup
// Booleans
// Array - yup
// Object (BONUS)
// If-Else - yup
// Switch - yup
