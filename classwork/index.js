const BASE_URL = 'https://ghibliapi.herokuapp.com/films';

const fetchBooks = (searchString) => {
  let booksData = {

  }
  fetch(BASE_URL).then((res) => {
    return res.json();
  }).then(data => console.log(data));

  
}
fetchBooks();
const singleCardCreator = (cardTitle, year) => {
  let container = document.createElement('div');
  let title = document.createElement('h3');
  let yearOfPublish = document.createElement('h6');
  title.textContent = cardTitle;
  yearOfPublish.textContent = year;
  container.append(title, yearOfPublish);
}
const uiForBooks = (books) => {
  books.map(({author_name, publish_year}) => {
    return singleCardCreator(author_name[0], publish_year[0] )
  } )
}
const searchInput = document.querySelector('.searchInput');
const searchButton = doument.querySelector('.searchButton');
const pictureData =  document.querySelector('.pictureData');
searchInput.addEventListener('input', (event) =>{
  console.log(event.target.value)
});
searchButton.addEventListener('click', () => {
  return fetchBooks(searchInput.value);
})