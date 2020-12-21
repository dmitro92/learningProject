
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


promoAdvImage.forEach(element => { // удаляем рекламные блоки
    element.remove();
});

promoGenre.textContent = "Драма"; // меняем жанр фильма

promoBg.style.backgroundImage = 'url("img/bg.jpg")'; // меняем задний фон

movieList.innerHTML = ''; // Очищаем список фильмов на странице. (разница innerHTML и textContent  в том, что в innerHTML мы можем вставлять HTML код, а в textContent только текст)

movieDB.movies.sort(); // Сортиуем массив movieDB

movieDB.movies.forEach((film, i) => { // Формируем список фильмов из объекта movieDB. Как вариант можнео вручную создавать каждый элемент через команду create element, добавляем класс, добавляем внутренности на основании массива movieDB, но это не оптимизированный вариант.
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});