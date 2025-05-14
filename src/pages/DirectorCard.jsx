// DirectorCard.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DirectorCard = () => {
  const { directorId } = useParams();  // Getting the directorId from the URL
  const [director, setDirector] = useState(null);

  useEffect(() => {
    fetch(`/api/directors/${directorId}`)  // Assuming the director's data is fetched by ID
      .then((response) => response.json())
      .then((data) => setDirector(data))
      .catch((error) => console.error('Error fetching director:', error));
  }, [directorId]);

  if (!director) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{director.name}</h1>
      <p>{director.bio}</p>
      {/* If the director's bio is "Director of mind-bending films," it will appear here */}
    </div>
  );
};

export default DirectorCard;
