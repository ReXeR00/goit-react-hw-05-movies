import { fetchReviews } from '../../services/TMDB-API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = () => {
      fetchReviews(movieId)
        .then(review => {
          setReviews(review);
        })
        .catch(error => {
          console.log('Error fetching actors:', error);
        });
    };

    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length !== 0 && (
        <div>
          <List>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default Reviews;
