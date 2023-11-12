import { fetchMoviesByID } from 'api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MovieCardContainer,
  MovieCardTitle,
  MovieCardItem,
  MovieCardImg,
  MovieCardOverviewContainer,
} from './DetailsPage.styled';

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieById = async () => {
      try {
        const data = await fetchMoviesByID(id);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieById();
  }, [id]);

  if (movie === null) {
    return;
  }

  const { title, poster_path, vote_average, overview, genres, release_date } =
    movie;

  const poster = `http://image.tmdb.org/t/p/w300${poster_path}`;
  const tags =
    genres &&
    genres.map(genre => {
      return <li key={genre.id}>{genre.name}</li>;
    });

  return (
    <>
      <Link to={backLinkLocationRef.current}>Назад</Link>
      <MovieCardContainer>
        <MovieCardTitle>
          {title}({release_date})
        </MovieCardTitle>
        <MovieCardItem>
          <div>
            <MovieCardImg src={poster} alt={title} />
          </div>
          <MovieCardOverviewContainer>
            <h3>Overview</h3>
            <p>{overview}</p>
          </MovieCardOverviewContainer>
          <MovieCardOverviewContainer>
            <h3>Genres</h3>
            <ul>{tags}</ul>
            <h3>User Score: {vote_average} %</h3>
          </MovieCardOverviewContainer>
          <MovieCardOverviewContainer>
            <h3>Info</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </MovieCardOverviewContainer>
        </MovieCardItem>

        <Suspense>
          <Outlet />
        </Suspense>
      </MovieCardContainer>
    </>
  );
};

export default DetailsPage;
