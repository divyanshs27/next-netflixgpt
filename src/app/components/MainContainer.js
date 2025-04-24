import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./videoBackground";
const MainContainer = () => {
    const movies = useSelector((store) => store.movies.nowPlayingMovies);
    if(!movies) return null;
    let mainMovie = movies[0];
    let {title,overview,id} = mainMovie;
    console.log('mainMovie',mainMovie);
  return ( <>
  <VideoTitle title={title} overview={overview}/>
  <VideoBackground movieId={id}/>
  </>
  );
}
export default MainContainer;