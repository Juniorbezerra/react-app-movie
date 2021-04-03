import React from 'react';
import { Container,ContainerInfo } from './styles';

function Card({data}) {
  return (
    <Container to={`/detalhes/${data.id}`}>
      <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${data.poster_path}`} alt={data.title}/>
      <ContainerInfo>
        <p>{data.title}</p>
        <p>{`${data.vote_average}/10`}</p>
      </ContainerInfo>
    </Container>
  );
}

export default Card;