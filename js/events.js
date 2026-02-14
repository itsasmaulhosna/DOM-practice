const blueBtn = document.getElementById('blue-btn');
blueBtn.onclick = function makeBlue() {
  document.body.style.backgroundColor = 'blue';
};
document
  .getElementById('green-btn')
  .addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
  });
