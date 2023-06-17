import React from 'react'
import Book from './Book'

const BooksList = ({ BookData }) => {
    const handleClick = (author, title) => {
        console.log(author, title);
    }

    return (
        <div className='booklist'>
            {BookData.map((book) => {
                const { id, title, author, description, image } = book;
                return <Book
                    key={id}
                    id={id}
                    title={title}
                    author={author}
                    description={description}
                    image={image}
                    handleClick={handleClick}
                />
            })}
        </div>
    )
}


export default BooksList;

