import {Link} from 'react-router-dom'

const Movie = ({poster,title,average, id}) => {

  
  const IMGPATH = 'https://image.tmdb.org/t/p/w1280'

  return ( 
    <div className="movie">
     <img src={IMGPATH + poster} alt=""/>
      <div className="movie-content">
        <h3>{title}</h3>
      </div>
      <p className="average">{average}</p>
      <Link to={`/movie/${id}`} class="btn" onClick={() => window.scroll(0,0)}>Show more</Link>
    </div>
   );
}
 
export default Movie;