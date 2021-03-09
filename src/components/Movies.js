import Movie from './Movie'

const Movies = ({datas}) => {

  const newData = datas.filter(item => item.poster_path !== null && item.backdrop_path !== null)

  return ( 
    <div className="container">
      <div className="movies-container">
        {newData.map(movie => (
         <Movie key={movie.id} poster={movie.poster_path} title={movie.title} average={movie.vote_average} id={movie.id} />
       ))}
      </div>
    </div>
   );
}
 
export default Movies;