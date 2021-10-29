// 1a. Select the 1st button element and set it to a const variable called button1
const button1 = document.querySelector(`button`);

// 1b. Using the ONCLICK event property, have an alert that says "Cool! You can hear/understand a hummingbird and ants" pop up when you click on the button
button1.onclick = () => {
  alert ('Cool! You can hear/understand a hummingbird and ants');
}

// 2a. Select the h3 and set it to a const variable called h3
const h3 = document.querySelector(`h3`);

// 2b. Using addEventListener, have an alert that says "OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one" pop up when you hover over the h3
h3.addEventListener (`mouseenter`, () => {
  alert(`OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one`);
});

// 3a. Select the form element/tag and set it to a const variable called form
const form = document.querySelector(`form`);
console.dir(form);

// 3b. Using addEventListener, display the value in the text input with an alert when the submit input in the form is pressed.
form.addEventListener(`submit`, () => {
  const quote = form.elements.quote.value;
  alert(quote);
});