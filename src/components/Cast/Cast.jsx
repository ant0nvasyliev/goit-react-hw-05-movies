import { fetchCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastList,
  CastListImg,
  CastCharacter,
  CastListName,
  NotFoundMessage,
} from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchCast(id);
        data.cast.length !== 0 && setActors(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [id]);

  return (
    <>
      {actors ? (
        <CastList>
          {actors.map(actor => (
            <li key={actor.id}>
              <CastListImg
                src={`http://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <CastListName>{actor.name}</CastListName>
              <CastCharacter>{actor.character}</CastCharacter>
            </li>
          ))}
        </CastList>
      ) : (
        <NotFoundMessage>Немає даних про акторський склад.</NotFoundMessage>
      )}
    </>
  );
};

export default Cast;
