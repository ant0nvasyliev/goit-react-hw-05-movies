import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
export const CastListImg = styled.img`
  border-radius: 6px;
  box-shadow: 0px 0px 20px grey;
`;
export const CastListName = styled.p`
  text-align: center;
  font-size: 18px;
`;
export const CastCharacter = styled.p`
  text-align: center;
  font-size: 12px;
`;

export const NotFoundMessage = styled.div`
  text-align: center;
  font-size: 24px;
`;
