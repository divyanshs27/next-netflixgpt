'use client'
import React, { use, useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';;
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
    console.log('inside useMovieTrailer',movieId);
    const dispatchEvent = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        const res = await data.json();
        console.log('trailer',res.results);
        const trailer = res.results.filter((video) => video.type === 'Trailer');
        const filterTrailer = trailer.length? trailer[0]:res.results[1];
        console.log('trailer check',filterTrailer);
        dispatchEvent(addTrailerVideo(filterTrailer));
      }
    useEffect(() => {
        getMovieVideos();
    }, [])
  return (
    <div>useMovieTrailer</div>
  )
}

export default useMovieTrailer;