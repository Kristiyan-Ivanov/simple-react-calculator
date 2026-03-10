import { evaluate } from "mathjs"
import { useState } from "react"
import { ButtonType } from "../constants/buttons"
import { appendValue, isDisplayLimitReached, replaceOperator } from "../utils/calculatorLogic"

export default function useCalculator() {
    const [displayValue, setDisplayValue] = useState('0')
    const [lastButtonType, setLastButtonType] = useState(null)

    function handleNumberButton(button) {
        if (isDisplayLimitReached(displayValue, button)) {
            return
        }
        setDisplayValue(prev => appendValue(prev, button))
    }

    function handleClear() {
        setDisplayValue('0')
        setLastButtonType(null)
    }

    function handleOperator(operator) {
        if (isDisplayLimitReached(displayValue, operator)) {
            return
        }
        if (lastButtonType === ButtonType.OPERATOR) {
            setDisplayValue(prev => replaceOperator(prev, operator))
        } else {
            setDisplayValue(prev => appendValue(prev, operator))
        }
    }

    function handleEval() {
        try {
            const result = evaluate(displayValue)
            setDisplayValue(String(result))
        } catch {
            setDisplayValue('Error')
        }
    }

    function handleButtonClick(button) {
        const { label, type } = button
        switch (type) {
            case ButtonType.NUMBER:
                handleNumberButton(label)
                break
            case ButtonType.OPERATOR:
                handleOperator(label)
                break
            case ButtonType.EQUAL:
                handleEval()
                break
            case ButtonType.CLEAR:
                handleClear()
                break
        }
        setLastButtonType(type)
    }
    
    return { displayValue, handleButtonClick }
}
