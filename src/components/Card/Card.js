import React from 'react'
import './Card.css';

function Card({
  category,
  title,
  description,
  author,
  publicationDate,
  readTime,
}) {
  return (
    <div className="Card">
      <div className="card-content">
        <p>{category}</p>
        <p><strong>{title}</strong></p>
        <p>{description}</p>
        <p>{author}</p>
        <p>{publicationDate}, {readTime}</p>
      </div>
      <div>
        <figure>
          <img alt='card-p'src={'https://picsum.photos/152/123'} />
        </figure>
      </div>
    </div>
  )
}
export default Card;