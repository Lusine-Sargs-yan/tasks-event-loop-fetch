const favoriteDogList = document.querySelector('#favorite-dogs')
console.log(favoriteDogList);
const searchButton = document.querySelector('.search-dog-image');

//https://dog.ceo/api/breeds/list/all
//https://dog.ceo/api/breed/hound/images

searchButton.addEventListener('click', (event) => {
  //console.log(event.target.value, 'serach');
  console.log(favoriteDogList.value, 'value::');
  const searchValue = favoriteDogList.value;


  fetch(`https://dog.ceo/api/breed/${searchValue}/images`)
  .then((resopnse) => {
    console.log(resopnse, 'search dogs response');
    return resopnse.json();
  })
  .then(({message}) => {
    console.log(message, 'all images link of dogs');

    message.forEach((dogImage) => {
      console.log(dogImage, 'every image of dogs');

      const div = document.createElement('div');
      const img = document.createElement('img');
      img.setAttribute('src', dogImage);
      //img.classList.add('dog-image');
      img.style.width = '250px';
      div.append(img);
      searchButton.append(div);
    });

  });

  
});



