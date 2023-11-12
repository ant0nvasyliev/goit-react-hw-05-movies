import { fetchReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewAuthorList, ReviewAuthorReview } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchReviews(id);
        data.results.length !== 0 && setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [id]);

  return (
    <>
      {reviews ? (
        <ReviewAuthorList>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ReviewAuthorList>
      ) : (
        <ReviewAuthorReview>Немає даних про відгуки.</ReviewAuthorReview>
      )}
    </>
  );
};

export default Reviews;
