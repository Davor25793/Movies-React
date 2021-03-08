
import Movie from './Movie'

const Movies = ({datas}) => {

  return ( 
    <div className="container">
      <div className="movies-container">
        {datas.map(movie => (
         <Movie key={movie.id} poster={movie.poster_path} title={movie.title} average={movie.vote_average} id={movie.id} />
       ))}
      </div>
    </div>
   );
}
 
export default Movies;