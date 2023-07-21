import { fetchActors } from '../../services/TMDB-API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Text, List } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const getActorDetails = () => {
      fetchActors(movieId)
        .then(actor => {
          setActors(actor);
        })
        .catch(error => {
          console.log('Error fetching actors:', error);
        });
    };

    getActorDetails();
  }, [movieId]);

  return (
    <div>
      <List>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={original_name}
            />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </li>
        ))}
      </List>
    </div>
  );
};

export default Cast;
