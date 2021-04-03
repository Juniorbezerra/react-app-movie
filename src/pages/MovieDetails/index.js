import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container,BackButton, ContainerDetails, ContainerImg, ContainerInfo,ContainerTitle, Overview, SectionInfo, List } from './styles';
import api from '../../services/api';
import { LoopCircleLoading } from 'react-loadingg';
import {ImArrowLeft2} from "react-icons/im"

function MovieDetails() {

  let { id } = useParams();

  const [data, setdata] = useState([])
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    async function fetchData(){
      const response = await api.get(`movie/${id}`)
      setdata(response.data)
      setLoading(false)
    }
    fetchData();
  },[id])

  return (
    <>
      {
        loading ? <LoopCircleLoading color="#000"/> : (
          <Container>
            <BackButton to="/"><ImArrowLeft2/></BackButton>
            <ContainerDetails>
              <ContainerImg>
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${data.poster_path}`} alt={data.title}/>
              </ContainerImg>
              <ContainerInfo>
                <ContainerTitle>
                <h1>
                  {data.title}
                </h1>
                <span>{`${data.vote_average}/10`}</span>
                </ContainerTitle>
                <Overview>
                  {data.overview}
                </Overview>
                <SectionInfo>
                    <List>
                      <span>Gêneros</span>
                      <ul>
                      {
                        data.genres.map(item => <li>{item.name}</li>)
                      }
                      </ul>
                    </List>
                    <List>
                      <span>Produtoras</span>
                      <ul>
                      {
                        data.production_companies.map(item => <li>{item.name}</li>)
                      }
                      </ul>
                    </List>
                </SectionInfo>
              </ContainerInfo>
            </ContainerDetails>
          </Container>
        )
      }
    </> 
  );
}

export default MovieDetails;