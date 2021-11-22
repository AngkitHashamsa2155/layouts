import React from 'react'
import Article from './Article'
const Home = ({ data }) => {
  return (
    <main>
      <div className='section  section-center'>
        <div className='heading'>
          <h1>Page Heading</h1>
          <h2>Secondary Text</h2>
        </div>
        <hr className='section-center' />
        <div className='container section-center'>
          {data.map((item) => {
            return <Article key={item.id} {...item} />
          })}
        </div>
      </div>
    </main>
  )
}

export default Home
