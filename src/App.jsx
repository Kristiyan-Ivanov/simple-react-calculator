import calculatorIcon from './assets/calculator.png'
import { useState } from 'react'
import './App.css'

function App() {
  const [displayValue, setDisplayValue] = useState('0')

  return (
    <div className="Calculator">
      <div className='Calculator__Header'>
        <img src={calculatorIcon} alt="calculator icon" />
        <h1>Calculator</h1>
      </div>
      <div className="Calculator__Display">
        {displayValue}
      </div>
      <div className="Calculator__Buttons">
        <button>AC</button>
        <button>%</button>
        <button>/</button>
        <button>*</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>+</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="Buttons__Equal">=</button>

        <button>+/-</button>
        <button>0</button>
        <button>.</button>
      </div>
    </div>
  )
}



export default App
