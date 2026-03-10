import { evaluate } from "mathjs"
import { useState } from "react"
import { ButtonType } from "../constants/buttons"
import { appendValue, isDisplayLimitReached, replaceOperator } from "../utils/calculatorLogic"

const displayError = 'Error'

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
        if (lastButtonType === ButtonType.OPERATOR | lastButtonType === ButtonType.EQUAL) {
            return
        }
        try {
            const result = evaluate(displayValue)
            setDisplayValue(String(result))
        } catch {
            setDisplayValue(displayError)
        }
    }

    function handleSignChange() {
        if (displayValue.at(0) === '-') {
            setDisplayValue(displayValue.slice(1))
        } else {
            setDisplayValue('-' + displayValue)
        }
    }

    function handleDot() {
        if (isDisplayLimitReached(displayValue, '.')) {
            return
        }
        setDisplayValue(prev => appendValue(prev, '.'))
    }

    function handleButtonClick(button) {
        if (displayValue === displayError) {
            setDisplayValue('')
        }
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
            case ButtonType.SIGN_CHANGE:
                handleSignChange()
                break
            case ButtonType.DOT:
                handleDot()
        }
        setLastButtonType(type)
    }
    
    return { displayValue, handleButtonClick }
}
