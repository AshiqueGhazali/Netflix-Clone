import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

const {id} = useParams();

const navigate = useNavigate()

  const [apiData,setApiData] = useState({
    name:"",
    key : "",
    published_at: "",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzg5M2U4YWMwZTdiOTViMzk5MTAxYjU3MmNiMzMyMiIsIm5iZiI6MTcyMzI2ODAzMi4yNTA2ODcsInN1YiI6IjY2YjZmOTQ1MDEzZjUwYjk3N2E4YzIyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.orcnQhUZvWP7IQQvvWjM1OZ6z7PUVdIM2LLfqSb5gZ8'
    }
  };
  
  
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
    },[])
  return (
    <div className='player'>
       <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
       <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
       <div className="payer-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player