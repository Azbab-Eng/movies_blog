import React from 'react'
import play from "../../assets/play_arr.svg"
import './Movies.css'

import hrl19 from '../../assets/hrl19.jpg'
import hrl20 from '../../assets/hrl20.jpg'
import hrl21 from '../../assets/hrl21.jpg'
import hrl22 from '../../assets/hrl22.jpg'
import hrl15 from '../../assets/hrl15.jpg'
import { Tittle } from '../../Components/Tittle'

export function MovieCard({movies}){
    return(
        <div className='gridMovies'>
            {movies.map((movie)=>(
                <div className='mCard' style={{background:`url(${hrl15})`}}>
                    <div className="mCardText">
                        <img src={play} alt="" />
                        <p>{movie.desc}</p>
                    </div>
                </div>
            ))}
            
        </div>
        
    )
}

function Movies() {
    const movies = [
        {img:hrl19,desc:"Crazy Sexy Cool with Dimitri vegas"},
        {img:hrl20,desc:"Wavy - Prod By Erock Beats x Big Jeezy"},
        {img:hrl21,desc:"Nicky Romero London Concert"},
        {img:hrl22,desc:"Guacamoley by the Chainsmokers"},
    ]
    const lg = {img:hrl15,desc:"Astrid S x Mantra Hurts So Good Music Video"}
  return (
  
    <div className='con'>
    <Tittle tittle={"Recommended Videos"} />
        <div className='movies'>
            <div className='lgM'>
                <div className='lgCard' style={{background:`url(${hrl19})`}}>
                    <div className="lgCardText">
                        <img src={play} alt="" />
                        <p>{lg.desc}</p>
                    </div>
                </div>
            </div>
            <div >
                <MovieCard movies={movies} />
            </div>
        </div>
    </div>
    
  )
}

export default Movies
