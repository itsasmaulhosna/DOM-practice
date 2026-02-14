document
  .getElementById('update-btn')
  .addEventListener('click', function updateContent() {
    // console.log('Update button clicked');
    const pageTitlle = document.getElementById('title');
    // console.log(pageTitlle);
    pageTitlle.innerText = 'Updated Title';
  });
