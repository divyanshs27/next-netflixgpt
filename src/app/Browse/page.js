'use client'
import React, { useEffect } from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <div>
        Browse
        <MainContainer/>
      </div>
    </div>
    
  )
};
export default Browse;