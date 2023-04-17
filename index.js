const  myInput = document.getElementById('my-input');
const myParagraph = document.getElementById('my-paragraph');
const myButton = document.getElementById('my-button');

myButton.addEventListener('click', function() {
  myParagraph.textContent = 'You clicked the button!';
});

myInput.addEventListener('input', function() {
  myParagraph.textContent = myInput.value;
});