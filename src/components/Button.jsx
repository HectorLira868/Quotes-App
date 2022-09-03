import React from 'react';

const Button = ( {changeQuote, colors, randomColor} ) => {
    return (
        <div>
           <button style={{ color: colors[randomColor]}} onClick={ changeQuote }> <i class="fa-solid fa-shuffle"></i> </button> 
        </div>
    );
};

export default Button;