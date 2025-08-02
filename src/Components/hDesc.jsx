import React from 'react'
import './hDesc.css'
import dn from "../assets/dnW.png"
import myp from "../assets/myp.jpg"
export function HDesc() {
  return (
    <div className='hDesc'>
      <p className='hdHead'>FEATURED CONTENT: <span>VIDEO</span></p>
      <p className='hdText'>Intense Studying Sessions with Classic Jazz Music</p>
      <div className='hdBtnCon'>
        <button className='wh'>WATCH NOW</button>
        <button>FOLLOW</button>
      </div>
    </div>
  )
}
export function Ohead({oh}){
    return(
        <div>
             <p className='oHead'>
                <span className='oH'>{oh?.oh}</span> <span className='oH2'> {oh?.sp}</span> <span>{oh?.by}</span> <span className='oHred'>{oh?.m}</span></p>
        </div>
    )
}
export function Olist(){
    return(
         <div className='option'>
            <div className='oList'>
                <p className='type'>Type: <span className='all'>All types</span></p>
            </div>
            <img className='dn' src={dn} alt="" />
            <ul>
                <li>All types</li>
                <li>Recovery</li>
                <li>Mandisa</li>
            </ul>
         </div>
    )
}

export function HOption({oh}){
    return(
        <div className='hOption'>
          <Ohead oh={oh}/>
            <Olist/>
        </div>
    )
}

export function FlexCard({cards}){
    return(
        <div className='flexCard'>
            {cards?.map((card)=>(
            <div className='card'>
                <img className='cardImg' src={card.img} alt="" />
                <h1 className='cardHead'>{card.head}</h1>
                <p className='cardDesc'>{card.desc}</p>
            </div>
        ))}
        </div>
    )
}

