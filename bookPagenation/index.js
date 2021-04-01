const input = document.querySelector('.searchBook');
const booksContainer = document.querySelector('.books');
const loaderContainer =  document.querySelector('.loader');
const paginationContainer = document.querySelector('.pagination');


//input.value the same as searchState.value
const searchState = {
  value: '',
  pageCount: 0,// pageCount = numFound
  currentPage: 1,
}

const BASE_URL = "http://openlibrary.org/search.json?q=​";

const getBooks = () => {
  loaderContainer.classList.remove('hide');

  fetch(`${BASE_URL}${searchState.value}&page=${searchState.currentPage}`)
   .then((response) => response.json())
   .then((res) =>  {
      console.log(res);
      searchState.pageCount = Math.ceil(res.numFound / 100);//how many pages are there
      console.log(res.docs, 'res docs');
      renderBooks(res.docs);

      loaderContainer.classList.add('hide');
    }).catch((error) => {
      alert(error.message);
    })

}

document.querySelector('.submit-btn').addEventListener('click', () => {
  //console.log(input.value);
  searchState.value = input.value;
  //console.log(searchState.value);
  getBooks();
});

const renderBooks = (books) => {// state the same as searchState object
  console.log(books, 'books::::');
  booksContainer.innerHTML = '';

  books.forEach((book) => {
    const li = document.createElement('li');

    li.textContent = book.title || '-';// or does not have title '-'
    booksContainer.append(li);
  });


  paginationContainer.innerHTML = '';

  for(let i = 1; i <= searchState.pageCount; i++){
    const span = document.createElement('span');
    span.textContent = i;
    span.classList.add('page-count');

    if(searchState.currentPage === 1) {
      span.classList.add('active-page');
    }

    span.addEventListener('click', () => {
      searchState.currentPage = i;
      console.log(searchState);

      booksContainer.innerHTML = '';
      getBooks();

    });

    paginationContainer.append(span);
  }
};

