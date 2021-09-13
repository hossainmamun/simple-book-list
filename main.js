/* 
01. Dom Selection
02. event listener
03. basic validation
04. creating element
05. append
*/

// 01 Dom selection
const title = document.getElementById('title');
const author = document.getElementById('author');
const publisher = document.getElementById('publisher');
const year = document.getElementById('year');
const addBtn = document.getElementById('add-btn');
const bookList = document.getElementById('book-list');

// 02 event listener
addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // 03 basic validation
    if (title.value == '' && author.value == '' && publisher.value == '' && year.value == '') {
        alert('please input something')
    }
    else {
        // creating element
        const newRow = document.createElement('tr');

        // creating title
        const newTitle = document.createElement('td')
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // creating author
        const newAuthor = document.createElement('td')
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // creating publisher
        const newPublisher = document.createElement('td')
        newPublisher.innerHTML = publisher.value;
        newRow.appendChild(newPublisher);

        // creating year
        const newYear = document.createElement('td')
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear)

        // display in ui
        bookList.appendChild(newRow);
    }
})