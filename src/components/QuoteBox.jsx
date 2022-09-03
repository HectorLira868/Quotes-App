import quotes from '../quotes.json'
import React from 'react';

const QuoteBox = ( {index, colors, randomColor} ) => {
    return (
        <div>
            <h1 style={{ color: colors[randomColor]}}> <i class="fa-solid fa-quote-left"></i> {quotes[index].quote} <i class="fa-solid fa-quote-right"></i></h1>
        </div>
    );
};

export default QuoteBox;