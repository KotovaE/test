let numberOfFilms = prompt('How many films have you already watched?', '');
console.log(numberOfFilms);

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};

let a = prompt('What film did you watch last?', '');
let b = prompt('How do you rate this film?', '');
let c = prompt('What film did you watch last?', '');
let d = prompt('How do you rate this film?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB.movies);

