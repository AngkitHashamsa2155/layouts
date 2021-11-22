import React, { useState } from 'react'
import data from './data'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Footer from './component/Footer'
const App = () => {
  const [datas, setDatas] = useState(data)

  return (
    <>
      <Navbar />
      <Home data={data} />
      <hr className='section-center' />
      <Footer />
    </>
  )
}

export default App
