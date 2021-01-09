
const movieDB = {
    movies: [
        "Бургер",
        "Лига Справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."                                                                                           
    ]
};

const adv = document.querySelectorAll(".promo__adv img");
const promoGenre = document.querySelector(".promo__genre");
const promoBg = document.querySelector(".promo__bg");
let movieList = document.querySelector(".promo__interactive-list");
let addForm = document.querySelector("form.add"); //ролучаем всю форму с классом add
    addInput = addForm.querySelector(".adding__input"); //получаем инпут
    checkbox = addForm.querySelector("[type='checkbox']"); //ролучаем чекбокс

const deleteAdv = (arr) => {
    arr.forEach(item => { 
        item.remove();
    });
};

const makeChanges = () => {
    promoGenre.textContent = "Драма"; 

    promoBg.style.backgroundImage = 'url("img/bg.jpg")'; 
};

const sortArr = (arr) => {
    arr.sort();
};








addForm.addEventListener('submit', (e) => { //submit вместо click
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.ckecked;

    if (newFilm) { // чтобы не делать вложенность можно заменить на одну строчку - if (!addInput.value) return;

        if (newFilm.length >21) {
            newFilm = `${newFilm.substring(0, 22)}...`; // см. мой вариант
        }
        
        if (favorite) { 
            console.log('Добавляем любимый фильм');
        }

        movieDB.movies.push(newFilm); //push это метод который добавляет через запятую значение в виде строки
        sortArr(movieDB.movies);

        createMovieList(movieDB.movies, movieList);
    }

    event.target.reset(); // либо addForm.reset(); ресет - метод который очищает инпут
});

function createMovieList(films, parent) {
    parent.innerHTML = ''; 
    sortArr(films);

    films.forEach((film, i) => { 
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1); // splice - метод, который удаляет элемент из массива

            createMovieList(films, parent); // применяем рекурсию - использование функции внутри себя
        });
    }); 
}

createMovieList(movieDB.movies, movieList);
deleteAdv(adv);
makeChanges();