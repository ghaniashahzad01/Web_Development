const display = document.getElementById('display');

// Add number buttons
document.querySelectorAll('.number').forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

// Add operator buttons
document.querySelectorAll('.operator').forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

// Add decimal button
document.querySelector('.decimal').addEventListener('click', () => {
  display.value += '.';
});

// Equal (=) button
document.querySelector('.equal').addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert('Invalid Expression');
    display.value = '';
  }
});

// Clear button
document.querySelector('.clear').addEventListener('click', () => {
  display.value = '';
});

// Delete button
document.querySelector('.delete').addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});
