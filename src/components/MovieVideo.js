import {useState, useEffect} from 'react'


const MovieVideo = ({id}) => {

  const VIDEO = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=dd132df044d85760fdd79f3192642f6a&language=en-US`

  const [video, setVideo] = useState([])

  useEffect(() => {
    fetch(VIDEO)
      .then(data => data.json())
      .then(res => {
        setVideo(res.results[0])
      });
  }, [])


  const key = video.key

  return (  
    <div className="video">
      <h2 className="text-center">TRAILER</h2>
      <div className="container">
        <div className="video-container">
        <iframe src={`https://www.youtube.com/embed/${key}`} frameborder="0" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}
 
export default MovieVideo;