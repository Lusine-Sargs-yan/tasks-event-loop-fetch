const searchInput = document.querySelector('.search-film');
const searchButton = document.querySelector('.submit-btn');
const filmContainer = document.querySelector('.film-data');

const BASE_URL = 'https://ghibliapi.herokuapp.com/films';


searchButton.addEventListener('click', (event) => {

  fetch(`${BASE_URL}`)
  .then((response) => {
    console.log(response);
    //console.log(response.json());
    return response.json();
  })
  .then((film) => {
    console.log(film);
    film.forEach((everyFilm, index) => {
      //console.log(everyFilm.producer, everyFilm.title, everyFilm.description,  '::::');
      const div = document.createElement('div');
      div.classList.add('film-container');

      const makeElement = () => {
        const dataBlocks = ['Title', 'Description', 'Director', 'Producer', 'Relase date'];

        return dataBlocks.map((elem) => {
          //console.log(elem);

          const divBlock =  document.createElement('div');
          divBlock.classList.add('film-blok');
          divBlock.textContent = `${elem}`;
          const title = document.createElement('span');
          title.textContent = `${everyFilm[elem.toLowerCase()] || everyFilm['relase_date']}`;//everyFilm.relase_date
          divBlock.append(title);
          title.classList.add('block-title');

          return divBlock;
        });
      };
      div.append(...makeElement());
      filmContainer.append(div);
      searchInput.innerHTML = '';
    });
  });
  
});  
