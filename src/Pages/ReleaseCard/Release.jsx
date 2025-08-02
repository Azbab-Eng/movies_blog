import React from 'react'
import { Tittle } from '../../Components/Tittle'
import { FlexCard, Olist } from '../../Components/hDesc'
import rgt from '../../assets/back.gif'
import hrl8 from '../../assets/hrl8.jpg'
import hrl9 from '../../assets/hrl9.jpg'
import hrl10 from '../../assets/hrl10.jpg'
import hrl11 from '../../assets/hrl11.jpg'
import hrl12 from '../../assets/hrl12.jpg'
import hrl13 from '../../assets/hrl13.jpg'
import hrl14 from '../../assets/hrl14.jpg'
import hrl16 from '../../assets/hrl16.jpg'
import './Release.css'

function ReleaseCard(){
        const releases = [
            {img:hrl13,desc:"Classic",ry:"Music"},
            {img:hrl9,desc:"Aways from City",ry:"Rythms"},
            {img:hrl12,desc:"Party Club",ry:"Remixes"},
            {img:hrl11,desc:"Deejays",ry:"Rythms"},
        ]

    return(
        
        <div className='rCard'>
            <div className='head'>
                <Tittle tittle={"Recommended Moods & Genres"} /><Olist/>
            </div>
            <div className='rCards'>
                {releases.map((release)=>(
                    <div className='box' style={{backgroundImage:`url(${release.img})`}}> 
                    
                    <h1 className='hBox'>{release.desc}</h1>
                    <p className='pBox'>{release.ry}</p>
                </div>
                ))}             

            </div>
            <img src={rgt} className='Brgt' alt="" />
        </div>
    )
}

function Release() {
    const cards2 = [
            {img:hrl8,head:"Beautiful Now",desc:"Zead"},
            {img:hrl9,head:"Right Now Please",desc:"AVICIIAvicii"},
            {img:hrl10,head:"Bounce Kelis",desc:"Calvin Harris"},
            {img:hrl11,head:"Summer",desc:"Calvin Harris"},
            {img:hrl12,head:"Intense",desc:"Armin Van Buuren"},
            {img:hrl13,head:"Imagine Dragons",desc:"ZedvBeats"},
            {img:hrl14,head:"Intense",desc:"Armin Vann"}
    
        ]
  return (
    <div className='release'>
        <div>
            <div className='head'>
                <Tittle tittle={"New Release For You"} /><Olist/>
            </div>
            <div className='flx'>
                <FlexCard cards={cards2} />
                <img src={rgt} className='rgt' alt="" />
            </div>
        </div>
        <ReleaseCard/>
        
    </div>
  )
}

export default Release
