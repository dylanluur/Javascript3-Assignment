let allMovies = [];

// Define a movie class with parameters title (string), rating (number), and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

// Add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    displayMessage("A new movie is added");
}

// Iterate through all elements of allMovies array
// Display the total number of movies in allMovies array
let printMovies = () => {
    displayMessage("Printing all movies....");
    allMovies.forEach((movie) => {
        displayMessage(`${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}`);
    });
    displayMessage(`\nYou have ${allMovies.length} movies in total`);
}

// Display only the movies that have a rating higher than rating(argument)
// Display the total number of matches
let highRatings = (rating) => {
    displayMessage(`Printing movies that have a rating higher than ${rating}`);
    const highRatedMovies = allMovies.filter((movie) => movie.rating > rating);
    highRatedMovies.forEach((movie) => {
        displayMessage(`${movie.title} has a rating of ${movie.rating}`);
    });
    displayMessage(`\nIn total, there are ${highRatedMovies.length} matches`);
}

// Toggle the 'haveWatched' property of the specified movie
let changeWatched = (title) => {
    const movie = allMovies.find((movie) => movie.title === title);
    if (movie) {
        displayMessage("Changing the status of the movie...");
        movie.haveWatched = !movie.haveWatched;
    }
}

let displayMessage = (message) => {
    const output = document.getElementById("output");
    const p = document.createElement("p");
    p.innerText = message;
    output.appendChild(p);
    output.appendChild(document.createElement("br"));
    output.appendChild(document.createElement("br"));
}

////////////////////////////////////////////////////////////
// Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x, y, z);

displayMessage("----------------");
displayMessage("Running program......");
displayMessage("----------------");
printMovies();

let movie1 = new Movie("Parasite", 2, false);
displayMessage("----------------");
addMovie(movie1);
displayMessage("----------------");

changeWatched("Spiderman");
displayMessage("----------------");

printMovies();
displayMessage("----------------");

changeWatched("Spiderman");
displayMessage("----------------");

printMovies();
displayMessage("----------------");

highRatings(3.5);
