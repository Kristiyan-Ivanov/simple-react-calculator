import { evaluate } from "mathjs"
import { useCallback, useState } from "react"
import { ButtonType } from "../constants/buttons"
import { appendValue, isDisplayLimitReached, replaceOperator, notEligibleForDot, isMaximumDigitsReached } from "../utils/calculatorLogic"

const DISPLAY_ERROR = 'Error'
const NEGATIVE_SIGN = '-'

export default function useCalculator() {
    const [displayValue, setDisplayValue] = useState('0')
    const [lastButtonType, setLastButtonType] = useState(null)
    const [error_code, setErrorCode] = useState(null)
    const clearError = useCallback(() => setErrorCode(null), [])

    function handleNumberButton(button) {
        if (isDisplayLimitReached(displayValue, button)) {
            setErrorCode('MAX_DISPLAY')
            return
        }
        if (isMaximumDigitsReached(displayValue)) {
            setErrorCode('MAX_DIGITS')
            return
        }
        setDisplayValue(prev => appendValue(prev, button))
        setLastButtonType(ButtonType.NUMBER)
    }

    function handleClear() {
        setDisplayValue('0')
        setLastButtonType(ButtonType.CLEAR)
    }

    function handleOperator(operator) {
        if (isDisplayLimitReached(displayValue, operator) || displayValue === '0') {
            return
        }
        if (displayValue.at(-1) === '.') {
            setDisplayValue(prev => prev.slice(0, -1))
        }
        if (lastButtonType === ButtonType.OPERATOR || lastButtonType === ButtonType.EQUAL) {
            setDisplayValue(prev => replaceOperator(prev, operator))
        } else {
            setDisplayValue(prev => appendValue(prev, operator))
        }
        setLastButtonType(ButtonType.OPERATOR)
    }

    function handleEval() {
        if (lastButtonType === ButtonType.OPERATOR || lastButtonType === ButtonType.EQUAL) {
            return
        }
        try {
            const result = evaluate(displayValue)
            if (String(result) === "Infinity" || String(result) === "-Infinity") {
                setDisplayValue(DISPLAY_ERROR)
                setErrorCode('DIV_BY_ZERO')
                return
            }
            setDisplayValue(String(result))
        } catch {
            setDisplayValue(DISPLAY_ERROR)
        }


    }

    function handleSignChange() {
        if (displayValue === '0' || displayValue === DISPLAY_ERROR) {
            return
        }
        if (displayValue.at(0) === NEGATIVE_SIGN) {
            setDisplayValue(displayValue.slice(1))
        } else {
            setDisplayValue(NEGATIVE_SIGN + displayValue)
        }
    }

    function handleDot(label) {
        if (isDisplayLimitReached(displayValue, label) || notEligibleForDot(displayValue) || lastButtonType !== ButtonType.NUMBER) {
            return
        }
        setDisplayValue(displayValue + label)
        setLastButtonType(ButtonType.DOT)
    }

    function handleButtonClick(button) {
        if (displayValue === DISPLAY_ERROR) {
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
                handleDot(label)
                break
            case ButtonType.PERCENT:
                setDisplayValue(prev => appendValue(prev, '%'))
                setLastButtonType(ButtonType.PERCENT)
                break
        }
    }

    return { displayValue, handleButtonClick, error_code, clearError }
}
