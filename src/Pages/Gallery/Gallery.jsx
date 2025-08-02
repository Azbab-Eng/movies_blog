import React from 'react'
import { Tittle } from '../../Components/Tittle'
import dn from "../../assets/dnW.png"
import share from "../../assets/share.png"
import menuH from "../../assets/menuH.png"
import play from "../../assets/play_arr.svg"
import './Gallery.css'
import hrl12 from '../../assets/hrl12.jpg'
import hrl14 from '../../assets/hrl14.jpg'
import hrl15 from '../../assets/hrl15.jpg'
import hrl16 from '../../assets/hrl16.jpg'
import hrl17 from '../../assets/hrl17.jpg'
import hrl18 from '../../assets/hrl22.jpg'
import hrl19 from '../../assets/hrl19.jpg'
import hrl20 from '../../assets/hrl20.jpg'
import hrl21 from '../../assets/hrl21.jpg'

export function GalleryHero(){
    return(
        <div className='gHero'>
            <div className="gHeroText">
                <img src={play} alt="" />
                <p>Beats Mode Prod By The Chainsmokers</p>
            </div>
        </div>
    )
}

export function GalleryCard({galleries}){
    return(
        <>
        <div className='gCards'>
            {
                galleries.map((gallery,index)=>(
                    <div className='eCard'>
                <div className='eNo'>0{index + 1}</div>
                <div className='eImg'>
                    <img src={gallery.img} alt="" />
                </div>
                <div className='eName'>
                    <h1>{gallery.head}</h1>
                    <p>{gallery.desc}</p>
                </div>
                <div className='eTime'>{gallery.time}</div>
                <div className='eShare'><img src={share} alt="" /></div>
                <div className='eMenu'><img src={menuH} alt="" /></div>

            </div>
                ))
            }
        </div>    
        </>
    )
}

function Gallery() {
    const tittles = ["Best Beat with Chorus","Song Reference"]
    const galleries1 = [
        {img:hrl20,head:"Bounce Kelis",desc:"Calvin",time:"04:40"},
        {img:hrl14,head:"Sofia",desc:"TXMMY Beats",time:"01:12"},
        {img:hrl12,head:"I Want You Let Me Go",desc:"Armin Van Buuren",time:"03:18"},
        {img:hrl21,head:"Meltdown",desc:"Calvin",time:"01:12"},
        {img:hrl15,head:"Bounce",desc:"TXMMY Beats",time:"05:34"},
    ]
    const galleries2 = [
        {img:hrl14,head:"Mablash",desc:"Karmo Product",time:"04:13"},
        {img:hrl16,head:"Fly High",desc:"Sun Music",time:"03:35"},
        {img:hrl17,head:"You Store My Hear Away",desc:"Carvin Harris",time:"03:19"},
        {img:hrl18,head:"Intense",desc:"Armin Van Buuren",time:"02:49"},
        {img:hrl19,head:"You Do Your What",desc:"TXMMY Beats",time:"03:19"},
    ]
  return (
    <div className='galleries'>
        <div className="gallery">
            <div className='gCard'>
                <div className='tittle'>
                    <Tittle tittle={tittles[0]} /><img src={dn} alt="" />
                </div>
                
                    <GalleryCard galleries={galleries1}/>
                
            </div>
            <div className='gCard'>
                <div className='tittle'>
                    <Tittle tittle={tittles[1]} /><img src={dn} alt="" />
                </div>
                
                    <GalleryCard galleries={galleries2}/>
                
            </div>
        </div>
        <GalleryHero/>
  
    </div>
  )
}

export default Gallery
