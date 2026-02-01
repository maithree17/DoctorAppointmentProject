import React from 'react'
import Headers from '../Components/Headers'
import SpecialityMenu from '../Components/SpecialityMenu'
import TopDoctors from '../Components/TopDoctors'
import Banner from '../Components/Banner'


function Home() {
  return (
    <div>
      <Headers/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
      
    </div>
  )
}

export default Home