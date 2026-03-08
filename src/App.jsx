import calculatorIcon from './assets/calculator.png'
import { useState } from 'react'
import './App.css'
import { evaluate } from 'mathjs'

const ButtonType = {
  NUMBER: 'number',
  OPERATOR: 'operator',
  CLEAR: 'clear',
  EQUAL: 'equal',
  FUNCTION: 'function'
}

const MAX_DISPLAY_LENGTH = 12

function App() {
  const [displayValue, setDisplayValue] = useState('0')
  const [lastButtonType, setLastButtonType] = useState(null)

  function isDisplayLimitReached(label) {
    if (displayValue.length + label.length > MAX_DISPLAY_LENGTH) {
      return true
    }
    return false
  }

  function handleGenericButton(button, type) {
    if (isDisplayLimitReached(button)) {
      return
    }
    setDisplayValue(prev => prev === '0' ? button : prev + button)
    setLastButtonType(type)
  }

  function handleClear() {
    setDisplayValue('0')
    setLastButtonType(null)
  }

  function handleOperator(operator, type) {
    const displayOperator = ' ' + operator + ' '
    if (isDisplayLimitReached(displayOperator)) {
      return
    }
    if (lastButtonType === ButtonType.OPERATOR) {
      setDisplayValue(prev => prev.slice(0, -3) + displayOperator)
    } else {
      setDisplayValue(prev => prev + displayOperator)
    }
    setLastButtonType(type)
  }

  function handleEval() {
    try {
      const result = evaluate(displayValue)
      setDisplayValue(String(result))
    } catch (error) {
      setDisplayValue('Error')
    }
    setLastButtonType(ButtonType.EQUAL)
  }

  const buttons = [
    { 'label': 'AC', 'type': ButtonType.CLEAR, handler: handleClear },
    { 'label': '%', 'type': ButtonType.OPERATOR, handler: handleOperator },
    { 'label': '/', 'type': ButtonType.OPERATOR, handler: handleOperator },
    { 'label': '*', 'type': ButtonType.OPERATOR, handler: handleOperator },
    { 'label': '7', 'type': ButtonType.NUMBER, handler: handleGenericButton },
    { 'label': '8', 'type': ButtonType.NUMBER, handler: handleGenericButton },
    { 'label': '9', 'type': ButtonType.NUMBER, handler: handleGenericButton },
    { 'label': '+', 'type': ButtonType.OPERATOR, handler: handleOperator },
    { 'label': '4', 'type': ButtonType.NUMBER, handler: handleGenericButton },
    { 'label': '5', 'type': ButtonType.NUMBER, handler: handleGenericButton },
    { 'label': '6', 'type': ButtonType.NUMBER, handler: handleGenericButton },
    { 'label': '-', 'type': ButtonType.OPERATOR, handler: handleOperator },
    { 'label': '1', 'type': ButtonType.NUMBER, handler: handleGenericButton },
    { 'label': '2', 'type': ButtonType.NUMBER, handler: handleGenericButton },
    { 'label': '3', 'type': ButtonType.NUMBER, handler: handleGenericButton },
    { 'label': '=', 'type': ButtonType.EQUAL, handler: handleEval },
    { 'label': '+/-', 'type': ButtonType.FUNCTION, handler: handleGenericButton },
    { 'label': '0', 'type': ButtonType.NUMBER, handler: handleGenericButton },
    { 'label': '.', 'type': ButtonType.FUNCTION, handler: handleGenericButton }
  ]

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
        {buttons.map((button) => (
          <button key={button.label} className={button.label === '=' ? 'Buttons__Equal' : ''} onClick={() => button.handler(button.label, button.type)}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
  )
}


export default App
