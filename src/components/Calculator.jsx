import calculatorIcon from '@/assets/calculator.png';
import useCalculator from '@/hooks/useCalculator';
import Display from './Display';
import ButtonGrid from './ButtonsGrid';
import { buttons } from '@/constants/buttons';
import ErrorNotification from './ErrorNotification';

function Calculator() {
  const { displayValue, handleButtonClick, error_code, clearError } =
    useCalculator();

  return (
    <div className="Calculator">
      <ErrorNotification error_code={error_code} onTimeout={clearError} />
      <div className="Calculator__Header">
        <img src={calculatorIcon} alt="calculator icon" />
        <h1 className="Calculator__Title">Calculator</h1>
      </div>
      <Display value={displayValue} />
      <ButtonGrid buttons={buttons} onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;
