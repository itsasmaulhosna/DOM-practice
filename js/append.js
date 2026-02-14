const mainContainer = document.getElementById('main-container');

// Create a new element
const placesSection = document.createElement('section');

// create a heading for the new section
const h1 = document.createElement('h1');
h1.textContent = 'Places to Visit';

// create a list of places
const ul = document.createElement('ul');
const listItems = document.createElement('li');
listItems.innerText = 'Paris';
ul.appendChild(listItems);

const listItems2 = document.createElement('li');
listItems2.innerText = 'New York';
ul.appendChild(listItems2);

const listItems3 = document.createElement('li');
listItems3.innerText = 'Tokyo';
ul.appendChild(listItems3);

// append the heading and the list to the new section
placesSection.appendChild(h1);
placesSection.appendChild(ul);

// append the new element to the main container
mainContainer.appendChild(placesSection);

// easier to use innerHTML to add content to the new section
const booksSection = document.createElement('section');
booksSection.innerHTML = `
  <h1>Books to Read</h1>
  <ul>
    <li>The Great Gatsby</li>
    <li>To Kill a Mockingbird</li>
    <li>1984</li>
  </ul>
`;

// append the new section to the main container
mainContainer.appendChild(booksSection);
