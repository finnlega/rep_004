"use strict";

let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }

// }



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
        personalMovieDB.count = numberOfFilms;
        
    },
    rememberMyFilms() {
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
    
    },
    detectPersonalLevel() {
        if (personalMovieDB.count <= 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    }, 
    showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }    
    }, 
    writeYourGenres() {
        for (let i=1; i<=3; i++) {
            let lovelyGenre = prompt(`Ваш любимый жанр под номером ${i}`, ``);
            personalMovieDB.genres[i-1] = lovelyGenre;
        }
    }    

};

personalMovieDB.start();

// function rememberMyFilms() {
//         for (let i=0; i<2; i++) {
//             let lastfilm = prompt("Один из последних фильмов?", "");
//             let filmRating = prompt("На сколько оцените его?", "");
            
//             if (lastfilm != "" && filmRating != "" && lastfilm != null && filmRating != null && lastfilm.length < 50) {
                
//                 personalMovieDB.movies[lastfilm] = filmRating;
//                 console.log("верно");

//             } else {
//                 console.log("ошибка");
//                 i--;      
//             }
//         }
//     }

personalMovieDB.rememberMyFilms();


//     function detectPersonalLevel() {
//         if (personalMovieDB.count <= 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count > 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     }    

personalMovieDB.detectPersonalLevel();

//    console.log(personalMovieDB);


//     function showMyDB(hidden) {
        
//         if (!hidden) {
//             console.log("personalMovieDB");
//         } 
        
        
//     }
personalMovieDB.showMyDB(personalMovieDB.privat);

    
//     function writeYourGenres() {
//         for (let i=1; i<=3; i++) {
//             let lovelyGenre = prompt(`Ваш любимый жанр под номером ${i}`, ``);
//             personalMovieDB.genres[i-1] = lovelyGenre;
//         }
//     }

personalMovieDB.writeYourGenres();
//console.log(personalMovieDB);
