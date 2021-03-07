import useFetch from './useFetch'
import {useState, useEffect} from 'react'

const Cast = ({id}) => {

  const CAST = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=dd132df044d85760fdd79f3192642f6a&language=en-US`

  const IMGPATH = 'https://image.tmdb.org/t/p/w1280'

  const [content, setContent] = useState([])

  useEffect(() => {
    fetch(CAST)
      .then(data => data.json())
      .then(res => {
        setContent(res.cast.slice(0,10))
      })
  }, [CAST])

  console.log(content)
  

  return (  
    <div className="cast">
      <h2 className="text-center">CAST</h2>
      <div className="cast-container">
        {content.map(item => (
          <div className="cast-item">
            <img src={IMGPATH + item.profile_path} alt=""/>
            <h3 className="character">{item.character}</h3>
            <h2>Actor: {item.original_name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Cast;