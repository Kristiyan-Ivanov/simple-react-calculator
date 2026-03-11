
const MAX_DISPLAY_LENGTH = 12
const DOT = '.'
const ZERO = '0'

export function isDisplayLimitReached(displayValue, label) {
    if (displayValue.length + label.length > MAX_DISPLAY_LENGTH) {
        return true
    }
    return false
}

export function appendValue(displayValue, label) {
    return displayValue === ZERO ? label : displayValue + label
}

export function replaceOperator(displayValue, operator) {
    return displayValue.slice(0, -1) + operator
}

export function notEligibleForDot(displayValue) {
    const lastNumber = getLastNumber(displayValue)
    return lastNumber.includes(DOT) || lastNumber.length === 0
}

export function getLastNumber(displayValue) {
    return displayValue.split(/[+*/-]/).at(-1)
}
