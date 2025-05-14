// MovieForm.jsx
import React, { useState } from 'react';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [genres, setGenres] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // E.g., make an API call to add the movie for the given director
  };

  return (
    <div>
      <h1>Add New Movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genres (comma-separated)"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;
