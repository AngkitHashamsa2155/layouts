import React from 'react'
import Pic from '../download.png'
const Article = ({ project, desc }) => {
  return (
    <article className='article section'>
      <img src={Pic} />
      <footer>
        <h2>{project}</h2>
        <p>{desc}</p>
      </footer>
    </article>
  )
}

export default Article
