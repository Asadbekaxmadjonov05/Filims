import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { UseAxios } from '../hooks/UseAxios';
import { KEY, TOKEN } from '../hooks/UseEnv';
import MovieCard from '../components/MovieCard';
import { Pagination } from '@mui/material';

export default function Popular() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const axiosInstance = UseAxios();
    axiosInstance.get(`/movie/popular?language=en-US&page=${page}&api_key=${KEY}`, {
      headers: {
        "Authorization": `Bearer ${TOKEN}`
      }
    })
    .then(res => {
      if (res.data && res.data.results) {
        setMovieData(res.data.results);
        setTotalPage(res.data.total_pages);
      }
    })
    .catch(error => {
      console.error("Error fetching popular movies:", error);
    });
  }, [page]);

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  return (
    <div className='w-[90%] bg-[#000c17] overflow-y-auto h-screen'>
      <Header title={'Popular'} />
      <div className='px-[40px] py-[30px] justify-center gap-[70px] flex flex-wrap'>
        {Array.isArray(movieData) && movieData.length > 0 ? (
          movieData.map((item) => (
            <MovieCard item={item} key={item.id} /> 
          ))
        ) : (
          <p>No popular movies available.</p> 
        )}
        <div className='w-full text-center px-[370px]'>
          <Pagination
            onChange={handleChangePage}
            className='bg-white rounded-md'
            count={totalPage}
            showFirstButton
            showLastButton
          />
        </div>
      </div>
    </div>
  );
}
