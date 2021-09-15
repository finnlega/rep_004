"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    for (let i=0; i<2; i++) {
       let lastfilm = prompt("Один из последних фильмов?", "");
       let filmRating = prompt("На сколько оцените его?", "");
        
       if (lastfilm != "" && filmRating != "" && lastfilm != null && filmRating != null && lastfilm.length < 50) {
         
            personalMovieDB.movies[lastfilm] = filmRating;
            console.log("верно");

        } else {
            console.log("ошибка");
            i--;      
        }
    }
    
    if (personalMovieDB.count <= 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }

    console.log(personalMovieDB); 
