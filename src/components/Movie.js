const Movie = ({poster,title,average}) => {

  const IMGPATH = 'https://image.tmdb.org/t/p/w1280'

  return ( 
    <div className="movie">
      <img src={IMGPATH + poster} alt=""/>
      <div className="movie-content">
        <h3>{title}</h3>
        <p>{average}</p>
      </div>
      <a href="#" class="btn">Show more</a>
    </div>
   );
}
 
export default Movie;