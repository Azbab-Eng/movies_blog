import React from 'react'
import Hero from './Pages/Hero/Hero'
import { TopNav,NavCon } from './Pages/Nav/Nav'
import Gallery from './Pages/Gallery/Gallery'
import Movies from './Pages/Movies/Movies'
import Release from './Pages/ReleaseCard/Release'
import Foot from './Pages/Foot/Foot'

function App() {
  const menuText = ["OVERVIEW","NEW RELEASES","RECOMMENDED","VIDEO"]
  return (
    <div >
      <TopNav/>
      <NavCon menuText={menuText} />
      <Hero/>
      <Gallery/>
      <Movies/>
      <Release/>
      <Foot/>
    </div>
  )
}

export default App
