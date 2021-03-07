import {useParams, Link} from 'react-router-dom'
import useFetch from './useFetch'
import Cast from './Cast'
import MovieVideo from './MovieVideo'


const MovieDetails = () => {

  const {id} = useParams()

  const DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=dd132df044d85760fdd79f3192642f6a&language=en-US`

  const IMGPATH = 'https://image.tmdb.org/t/p/w1280'

  const {data} = useFetch(DETAILS)
  // console.log(data);
  
  const {backdrop_path, overview} = data;

  return (  
    <div className="single-movie">
      <img src={IMGPATH + backdrop_path} alt=""/>
        <div className="overview">
          <h2 className="text-center">SUMMARY</h2>
          <p className="lead">{overview}</p>
        </div>
        <Cast id={id}/>
        <MovieVideo id={id} />
      <Link to="/">
        <span className="backBtn">
          <i class="fas fa-chevron-left fa-2x"></i>
        </span>
      </Link>
    </div>
  );
}
 
export default MovieDetails;