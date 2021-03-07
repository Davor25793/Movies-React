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


  
  // const images = () => {
  //   const fill = content.filter(img => img.profile_path !== null)
  //   return fill
  // }

  // images()
  

  return (  
    <div className="cast">
      <h2 className="text-center">CAST</h2>
      <div className="container">
      <div className="cast-container">
      {content.map(item => (
        <div className="cast-item">
          <img src={IMGPATH + item.profile_path} alt=""/> 
          <div className="cast-item-content">
          <h4 className="character">{item.character}</h4>
          <h3 className="actor">Actor: {item.original_name}</h3>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
}
 
export default Cast;