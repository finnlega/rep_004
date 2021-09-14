"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);
    for (let i=0; i<2; i++){
        let lastfilm = prompt("Один из последних фильмов?", "");
        let filmRating = prompt("На сколько оцените его?", "");
        
        
        personalMovieDB.movies[lastfilm] = filmRating;
    };

       
    
    


