
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
let NimberOfMovies = movieDB.movies.length; // глобальная переменная для ведения счёта фильмов в списке


promoAdvImage.forEach(element => { // удаляем рекламные блоки
    element.remove();
});

promoGenre.textContent = "Драма"; // меняем жанр фильма

promoBg.style.backgroundImage = 'url("img/bg.jpg")'; // меняем задний фон

movieList.innerHTML = ''; // Очищаем список фильмов на странице. (разница innerHTML и textContent  в том, что в innerHTML мы можем вставлять HTML код, а в textContent только текст)

movieDB.movies.sort(); // Сортиуем массив movieDB

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
    `;

    movieDB.movies += `,${addInput.value}`;
    console.log(movieDB.movies);
    

    NimberOfMovies += 1;
  
    if (addInput.value.length > 21) {

    }

    console.log(addInput.value.slice(1, 8) + '...');

    addInput.value = '';
});

// if (addInput.value.length > 21) {
//     console.log(hi);  
// }


