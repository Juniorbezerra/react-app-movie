import { useState } from 'react'
import api from '../services/api';

export default function useMovie() {
  const [movies, setMovies ] = useState([]);
  const [totalPages, setTotalPages] = useState();

  async function fetchMovies(page){
    try{
      const response = await api.get(`discover/movie`, {
        params:{
          page
        }
      })
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages)
    }catch(error){
      alert(error);
    }
  }

  return {
    fetchMovies,
    movies,
    totalPages
  }
}
