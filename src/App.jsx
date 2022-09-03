import QuoteBox from './components/QuoteBox';
import Author from './components/Author';
import Button from './components/Button';
import { useState } from 'react'
import quotes from './quotes.json'
import './styles.css'

function App() { 
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex]  = useState(randomIndex);

  const changeQuote = () => {
    // alert("Cambiando frase"),
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setIndex(randomIndex)
  };
  
  const colors = ['#B39CD0','#C4FCEF','#4B4453','#C34A36','#4FFBDF','#008F7A'];
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColor]}`

  return (
    <div className="App">
      <div className="card">
        <QuoteBox index={index} changeQuote={changeQuote} randomColor={randomColor} colors={colors}> </QuoteBox>
        <Author index={index} randomColor={randomColor} colors={colors}> </Author>
        <Button changeQuote={changeQuote} randomColor={randomColor} colors={colors}></Button>
      </div>
    </div>
  )
}

export default App
