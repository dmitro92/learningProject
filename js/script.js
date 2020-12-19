/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


const createLiItem = (index, text) => (
    `
        <li class="promo__interactive-item">
            <span>${index}. ${text}</span>
            <div class="delete" data-delete-id="${index}"></div>
        </li>
    `
);


const movieDB = {
    movies: [
        "Гоша",
        "Бозо",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."                                                                                           
    ]
};

const poster = document.querySelector(".promo__bg");
const genre = poster.querySelector(".promo__genre");
const adv = document.querySelectorAll(".promo__adv img");
const movieList = document.querySelector(".promo__interactive-list");
const movieInput = document.querySelector("#add_input");
const addButton = document.querySelector("#buttonOne");

let currentAddInputValue = '';

genre.textContent = 'Драма';

poster.style.background = "url('img/bg.jpg')";

adv.forEach(i => {
    i.remove();
});

movieDB.movies.sort();

movieList.innerHTML = '';

movieDB.movies.forEach((movie, i) => {
    movieList.innerHTML += createLiItem(i + 1, movie);
});

movieInput.addEventListener('input', (event) => {
    currentAddInputValue = event.target.value;
});

addButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (!currentAddInputValue) return;

    const all = document.querySelectorAll(".promo__interactive-item");
    const currentIdx = all ? all.length + 1 : 1;
    movieList.innerHTML += createLiItem(currentIdx, currentAddInputValue);
    currentAddInputValue = '';
    movieInput.value = '';
});

// document.querySelector('button[data-addButton="buttonOne"]')
//  console.log(currentAddInputValue);
