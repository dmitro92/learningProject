
const movieDB = {
    movies: [
        "Бургер",
        "Лига Справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."                                                                                           
    ]
};
const promoAdvImage = document.querySelectorAll(".promo__adv img");
const promoGenre = document.querySelector(".promo__genre");
const promoBg = document.querySelector(".promo__bg");
let movieList = document.querySelector(".promo__interactive-list");
let buttonOne = document.querySelector("#buttonOne");
let addInput = document.querySelector("#add_input");
let NimberOfMovies = movieDB.movies.length; 


promoAdvImage.forEach(element => { 
    element.remove();
});

promoGenre.textContent = "Драма"; 

promoBg.style.backgroundImage = 'url("img/bg.jpg")'; 

movieList.innerHTML = ''; 

movieDB.movies.sort(); 

movieDB.movies.forEach((film, i) => { 
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});

buttonOne.addEventListener('click', (e) => {
    event.preventDefault();
    movieList.innerHTML += `
        <li class="promo__interactive-item"> ${NimberOfMovies + 1}.  ${addInput.value.slice(1, 8) + '...'} 
            <div class="delete"></div>
        </li>
    `; // добавил slice в addInput для 2 задания

    movieDB.movies += `,${addInput.value}`;
    console.log(movieDB.movies);
    

    NimberOfMovies += 1;
  
    addInput.value = '';
});



