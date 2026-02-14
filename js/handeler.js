document
  .getElementById('update-btn')
  .addEventListener('click', function updateContent() {
    // console.log('Update button clicked');
    const pageTitlle = document.getElementById('title');
    // console.log(pageTitlle);
    pageTitlle.innerText = 'Updated Title';
  });

//   input field
document.getElementById('btn').addEventListener('click', function () {
  console.log('Button clicked');
  const inputField = document.getElementById('input');
  console.log(inputField);
  const name = inputField.value;
  console.log(name);
  const namep = document.getElementById('name-text');
  namep.innerText = name;
});
