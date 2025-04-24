'use client';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies  } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const res = await data.json();
    console.log('MOVIE',res.results);
    dispatch(addNowPlayingMovies(res.results));
  }
  useEffect(() => {
    getNowPlayingMovies();
  }, [])
}
export default useNowPlayingMovies;