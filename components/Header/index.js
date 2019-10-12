// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');

function Header() {
    const header = document.createElement('div');
	header.classList.add('header');
    document.querySelector('.header-container').appendChild(header);

    const temp = document.createElement('span')
	temp.classList.add('temp')
	temp.textContent = '98°';
    header.appendChild(temp);  

    const headerTitle = document.createElement('h1');
	headerTitle.textContent = 'Lambda Times';
    header.appendChild(headerTitle);

    const headerDate = document.createElement('span');
	headerDate.classList.add('date');
	headerDate.textContent = 'September 6th, 2019';
	header.appendChild(headerDate);
    
	return header;
};

headerCreator();