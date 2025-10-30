import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
function InputArea({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  function handleAdd() {
    onAddMovie({ title, review, rating });
  }

  return (
    <div className="inputArea">
      Title
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      Review
      <textarea value={review} onChange={(e) => setReview(e.target.value)} />
      Rating
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value={1}>⭐</option>
        <option value={2}>⭐⭐</option>
        <option value={3}>⭐⭐⭐</option>
        <option value={4}>⭐⭐⭐⭐</option>
        <option value={5}>⭐⭐⭐⭐⭐</option>
      </select>
      <button onClick={handleAdd}> Add Movie </button>
    </div>
  );
}

function MovieItem({ movie, onRemove }) {
  return (
    <div className="moieItem">
      <h3> {movie.title}</h3>
      <p> Rating:{"⭐".repeat(movie.rating)}</p>
      <button onClick={onRemove}> remove </button>
    </div>
  );
}

function MovieList({ movies, removeMovie }) {
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieItem
          key={index}
          movie={movie}
          onRemove={() => removeMovie(index)}
        />
      ))}
    </div>
  );
}

function App() {
  const [movies, setMovies] = useState([
    { title: "Inception", review: "Mind-blowing!", rating: 4 },
    { title: "Avatar", review: "Beautiful visuals", rating: 2 },
    { title: "The Batman", review: "Dark and amazing", rating: 5 },
  ]);
  function addMovie(movieObj) {
    setMovies([...movies, movieObj]);
  }
  function removeMovie(index) {
    setMovies(movies.filter((_, i) => i !== index));
  }
  return (
    <>
      <h1> Movie Watch List</h1>
      <InputArea onAddMovie={addMovie} />
      <MovieList movies={movies} removeMovie={removeMovie} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
