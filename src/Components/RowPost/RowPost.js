import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube'


function RowPost(props) {

  const [movie,setMovie] = useState([])
  const [urlId,seturlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovie(response.data.results)
      
    })
   
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?language=en&api_key=${API_KEY}`).then((response)=>{
      console.log(response.data)
      if(response.data.results!==0){
        seturlId(response.data.results[0])
      }else{
        console.log('Array Empty')
      }
    })

  }
  
  return (
    <div className='row' >
        <h2>{props.title}</h2>
        <div className='posters' >

          {movie.map((obj)=>{
            return(
             <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
            )
          })}


           

        </div>
        { urlId &&      <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost