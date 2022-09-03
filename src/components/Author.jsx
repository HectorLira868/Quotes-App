import quotes from '../quotes.json'
import React from 'react';

const Author = ( {index, randomColor, colors} ) => {
    
  console.log(colors)
    return (
        <div>
            <h2 style={{ color: colors[randomColor]}}> {quotes[index].author} </h2>
        </div>
    );
};

export default Author;