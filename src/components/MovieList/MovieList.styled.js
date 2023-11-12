import styled from "styled-components";

export const MoviesList = styled.ul`
   list-style: none;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   padding: 0;
   margin: 0;
`;

export const ListItem = styled.li`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 12px;
`;

export const ListImage = styled.img`
   margin-bottom: 12px;
   border-radius: 6px;
   box-shadow: 0px 0px 20px grey;
`;
export const MovieListTitle = styled.p`
font-size: 12px;
text-align: center;
`;