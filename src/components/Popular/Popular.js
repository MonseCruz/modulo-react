import React from 'react'
import './Popular.css';

function Popular({
  number,
  title,
  author,
  publicationDate,
  readTime,
}) {
  return (
    <div className="Popular">
        <div>
            <p className="Number">{number}</p>
        </div>
        <div className="card-content">
            <p><strong>{title}</strong></p>
            <p>{author}</p>
            <p>{publicationDate}, {readTime}</p>
        </div>
    </div>
  )
}
export default Popular;