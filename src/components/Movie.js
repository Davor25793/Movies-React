import { Fragment } from "react";

const Movie = ({data}) => {

  const IMGPATH = 'https://image.tmdb.org/t/p/w1280'

  console.log(data);
  return ( 
     <Fragment>
      {data.results.map(movie => (
        <div className="movie" key={movie.id}>
          <img src={IMGPATH + movie.poster_path} alt=""/>
          <div className="movie-content">
            <h3>{movie.title}</h3>
            <p>{movie.vote_average}</p>
          </div>
          <a href="#" className="btn">Read More</a>
        </div>
      ))}
     </Fragment>
   );
}
 
export default Movie;