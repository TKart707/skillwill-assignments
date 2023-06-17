import React from 'react';

const Book = ({ id, author, title, description, image, handleClick }) => {
    return (
        <div className='book'>
            <div className='img-div'>
                <img src={process.env.PUBLIC_URL + image} alt={author} />
            </div>
            <h2>{author}</h2>
            <h4>{title}</h4>
            <p>{description}</p>
            <button className='btn' onClick={() => handleClick(author, title)}>Click</button>
        </div>
    )
}

export default Book