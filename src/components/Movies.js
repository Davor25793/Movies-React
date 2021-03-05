import useFetch from './useFetch'
import Movie from './Movie'

const Movies = () => {


  const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dd132df044d85760fdd79f3192642f6a'

  const {data, isLoading} = useFetch(APIURL)

  // console.log(data)
  

  return (  
    <div className="container">
      <div className="movies-container">
        {isLoading && <div>Loading...</div>}
        {data && <Movie data={data} />}
      </div>
    </div>
  );
}
 
export default Movies;