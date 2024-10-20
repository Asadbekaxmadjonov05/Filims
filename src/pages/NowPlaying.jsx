import React, { useEffect } from 'react'
import {useAxios} from '../hook/useAxios'
import {API_KEY} from '../hook/useEnv'


function NowPlaying() {

useEffect(() => {
  useAxios().get(`/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`).then(res =>{
  
  },[])
},[])
  return (
    <div>NowPlaying...</div>
  )
}

export default NowPlaying