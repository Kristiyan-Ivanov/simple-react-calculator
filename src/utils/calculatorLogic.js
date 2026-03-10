
const MAX_DISPLAY_LENGTH = 12

export function isDisplayLimitReached(displayValue, label) {
    if (displayValue.length + label.length > MAX_DISPLAY_LENGTH) {
        return true
    }
    return false
}

export function appendValue(displayValue, label) {
    return displayValue === '0' ? label : displayValue + label
}

export function replaceOperator(displayValue, operator) {
    return displayValue.slice(0, -1) + operator
}
