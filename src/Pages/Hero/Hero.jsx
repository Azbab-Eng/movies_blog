import React from 'react'
import './Hero.css'
import { NavCon } from '../Nav/Nav'
import hrll from '../../assets/hrl1.jpg'
import hrl2 from '../../assets/hrl2.jpg'
import hrl3 from '../../assets/hrl3.jpg'
import hrl4 from '../../assets/hrl4.jpg'
import hrl5 from '../../assets/hrl5.jpg'
import hrl6 from '../../assets/hrl6.jpg'
import hrl7 from '../../assets/hrl7.jpg'
import hrl8 from '../../assets/hrl8.jpg'
import hrl9 from '../../assets/hrl9.jpg'
import hrl10 from '../../assets/hrl10.jpg'
import hrl11 from '../../assets/hrl11.jpg'
import hrl12 from '../../assets/hrl12.jpg'
import hrl13 from '../../assets/hrl13.jpg'
import hrl14 from '../../assets/hrl14.jpg'
import { FlexCard, HDesc, HOption } from '../../Components/hDesc'
function Hero() {
    const cards2 = [
        {img:hrl8,head:"Beautiful Now",desc:"Zead"},
        {img:hrl9,head:"Right Now Please",desc:"AVICIIAvicii"},
        {img:hrl10,head:"Bounce Kelis",desc:"Calvin Harris"},
        {img:hrl11,head:"Summer",desc:"Calvin Harris"},
        {img:hrl12,head:"Intense",desc:"Armin Van Buuren"},
        {img:hrl13,head:"Imagine Dragons",desc:"ZedvBeats"},
        {img:hrl14,head:"Intense",desc:"Armin Vann"}

    ]
    const cards = [
        {img:hrll,head:"Never Lose without H..",desc:"Supa LO Beatz"},
        {img:hrl2,head:"Recovery",desc:"Drum Beats"},
        {img:hrl7,head:"Imagine Dragons",desc:"Mantra Beats"},
        {img:hrl4,head:"Mandisa",desc:"Overcomer Beats"},
        {img:hrl5,head:"Right Now Please",desc:"TXMMY Beats"},
        {img:hrl6,head:"Never Lose without H..",desc:"Supa LO Beatz"},
        {img:hrl7,head:"Intense",desc:"Armin Vann"}

    ]
    const op = [
        {oh:"New Release For You",sp:"",by:"",m:""},
        {oh:"Because you listened to:",sp:"Never Lose without Hook",by:"by",m:"Mantra"},
    ]
  return (
    <div className='hero'>
      {/* <NavCon/> */}
      <HDesc/>
      <HOption oh={op[0]} />
      <FlexCard cards={cards} />
      <HOption oh={op[1]} />
      <FlexCard cards={cards2} />
    </div>
  )
}

export default Hero
