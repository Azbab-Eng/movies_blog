import React from 'react'
import menu from '../../assets/menuW.svg'
import search from '../../assets/search.svg'
import community from '../../assets/community.png'
import message from '../../assets/message.gif'
import notifications from '../../assets/notifications.svg'
import upload from '../../assets/uploadCW.png'
import forward from '../../assets/forward.gif'
import back from '../../assets/back.gif'
import cart from '../../assets/cart.gif'
import myp from '../../assets/myp.jpg'
import './Nav.css'


export const TopNav = ()=> {
  return (
    <div className='navcon'>
      <nav>
        <div className='harmb'>
            <img src={menu} alt="" />
        </div>
        <div className='upload'>
            <img src={upload} alt="" />
            <p>UPLOAD</p>
        </div>
        <div className='arrows'>
            <img  src={back} alt="" id='backi' />
            <img src={forward} alt="" />
        </div>
        <div className='search'>
          <div className='search-inp'>
            <img src={search} alt="" />
            <input type="text" placeholder='Search Everything Beats'/>
          </div>
        </div>
        <div className='icons'>
            <img src={notifications} alt="" />
            <img src={message} alt="" />
            <img src={community} alt="" />
        </div>
        <div className='cart'>
            <img src={cart} alt="" />
            <p>$0:00</p>
        </div>
        <div className='profile'>
            <img src={myp} alt="" />
            <p>Azbab</p>
        </div>
      </nav>
    </div>
  )
}



export function NavCon({menuText}) {
  return (
    <div className='menu'>
      <div className='menu_list'>
            {menuText?.map((content,index)=>
        <p key={index} className='menu_text'>{content}</p>
      )}
       
      </div>
    </div>
  )
}


