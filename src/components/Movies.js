import useFetch from './useFetch'
import Movie from './Movie'
import Spinner from './Spinner'


const Movies = () => {

  const {data, isLoading} = useFetch('https://api.themoviedb.org/3/movie/now_playing?api_key=dd132df044d85760fdd79f3192642f6a&language=en-US&page=1')

  const res = data.results;

  // console.log(res);

  return ( 
    <div className="container">
      <div className="movies-container">
        {isLoading && <Spinner/>}
        {res && res.map(movie => (
         <Movie key={movie.id} poster={movie.poster_path} title={movie.title} average={movie.vote_average} id={movie.id} />
       ))}
      </div>
    </div>
   );
}
 
export default Movies;