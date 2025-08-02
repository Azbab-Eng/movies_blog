import React from 'react'
import imglf from '../../assets/hrl15.jpg'
import swt from '../../assets/swt.png'
import rd from '../../assets/rd.png'
import ffd from '../../assets/ffd.png'
import playB from '../../assets/playB.png'
import st from '../../assets/st.png'
import wt from '../../assets/wt.png'
import vm from '../../assets/vm.png'
import pl from '../../assets/pl.png'
import shopping from '../../assets/shopping.svg'
import './Foot.css'
function Foot() {
  return (
    <div className='foot'>
      <div className='fLeft'>
        <img src={imglf} alt="" />
        <div className=''>
            <div className='bar'>
                <span className='ps1'></span> 
                <p className='ps2'>1:47</p> 
                <span className='ps3'></span> 
            </div>
            <p>Hymn for the Weekend</p>
            <p className='des'>Coldploy - A Hood Full of Dreams</p>
        </div>
      </div>
      <div className="fMiddle">
        <img src={swt} alt="" />
        <img src={rd} alt="" />
        <img className='pl' src={playB} alt="" />
        <img src={ffd} alt="" />
        <img src={st} alt="" />
      </div>
      <div className="fRight">
        <div className='vmC'>
            <img className='vm' src={vm} alt="" />
            <span className='vrm'></span>
        </div>
        <div>
            <img src={wt} alt="" />
        </div>
        <div className='shop'>
            <img src={shopping} alt="" />
            <p>$<span>30.00</span>+</p>
        </div>
        <div > 
            <img className='plC' src={pl} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Foot
