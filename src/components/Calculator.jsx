import calculatorIcon from '../assets/calculator.png'
import useCalculator from '../hooks/useCalculator'
import Display from './Display'
import ButtonGrid from './ButtonsGrid'
import { buttons } from '../constants/buttons'



function Calculator() {
  const { displayValue, handleButtonClick } = useCalculator()
  
  return (
    <div className="Calculator">
      <div className='Calculator__Header'>
        <img src={calculatorIcon} alt="calculator icon" />
        <h1 className="Calculator__Title">Calculator</h1>
      </div>
      <Display value={displayValue} />
      <ButtonGrid buttons={buttons} onButtonClick={handleButtonClick} />
    </div>
  )
}

export default Calculator
