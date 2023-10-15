const handleDigitClick = (event) => {
  const cifra = event.target.textContent;
  const display = document.querySelector('.display');
  if (display.textContent === '0') {
    display.textContent = '';
  }
  if (display.textContent.length <= 9) {
    display.textContent += cifra;
  }
};

const buttons = document.querySelectorAll('.btn-num');
buttons.forEach((btn) => {
  btn.addEventListener('click', handleDigitClick);
});
