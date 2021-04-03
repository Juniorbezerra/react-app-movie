import React, {useEffect,useState} from 'react';
import Card from '../../components/Card';
import {Container, ContainerPagination} from './style';
import { LoopCircleLoading } from 'react-loadingg';
import useMovie from '../../hooks/useMovie';
import usePagination from '../../hooks/usePagination';

function Home(){

  const [loading, setLoading] =useState(true);
  const {fetchMovies, movies,totalPages } = useMovie();
  const {SetActualPage,actualPage} = usePagination();

  useEffect(() => {

    async function fetch(){
      await fetchMovies(actualPage);
      setLoading(false)
    }
    fetch();
  },[actualPage])

  return(
    <>
      {
        loading ? <LoopCircleLoading color="#000"/> : (
          <>
            <Container>
              {
                movies.map(item => <Card key={item.id} data={item}/>)
              }
            </Container>
            <ContainerPagination>
            <button disabled={actualPage <= 1} onClick={()=> SetActualPage(actualPage-1)}>Anterior</button>
            <p>{`${actualPage} / ${totalPages}`}</p>
            <button onClick={()=> SetActualPage(actualPage+1)}>Próximo</button>
            </ContainerPagination>
          </>
        )
      }
    </>
  )
}

export default Home;