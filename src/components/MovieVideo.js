import {useState, useEffect} from 'react'


const MovieVideo = ({id}) => {

  const VIDEO = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=dd132df044d85760fdd79f3192642f6a&language=en-US`

  const [video, setVideo] = useState([])

  useEffect(() => {
    fetch(VIDEO)
      .then(data => data.json())
      .then(res => {
        setVideo(res.results)
      });
  }, [])



  return (  
    <div className="video">
      <h2 className="text-center">TRAILERS</h2>
      <div className="container">
        <div className="video-container">
          {video.map(key => (
            <iframe src={`https://www.youtube.com/embed/${key.key}`} frameborder="0" allowFullScreen></iframe>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default MovieVideo;