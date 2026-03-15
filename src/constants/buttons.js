export const ButtonType = {
    NUMBER: 'number',
    OPERATOR: 'operator',
    CLEAR: 'clear',
    EQUAL: 'equal',
    FUNCTION: 'function',
    SIGN_CHANGE: 'sign_change',
    DOT: 'dot',
    PERCENT: 'percent'
}

export const buttons = [
    { 'label': 'AC', 'type': ButtonType.CLEAR },
    { 'label': '%', 'type': ButtonType.PERCENT },
    { 'label': '/', 'type': ButtonType.OPERATOR },
    { 'label': '*', 'type': ButtonType.OPERATOR },
    { 'label': '7', 'type': ButtonType.NUMBER },
    { 'label': '8', 'type': ButtonType.NUMBER },
    { 'label': '9', 'type': ButtonType.NUMBER },
    { 'label': '+', 'type': ButtonType.OPERATOR },
    { 'label': '4', 'type': ButtonType.NUMBER },
    { 'label': '5', 'type': ButtonType.NUMBER },
    { 'label': '6', 'type': ButtonType.NUMBER },
    { 'label': '-', 'type': ButtonType.OPERATOR },
    { 'label': '1', 'type': ButtonType.NUMBER },
    { 'label': '2', 'type': ButtonType.NUMBER },
    { 'label': '3', 'type': ButtonType.NUMBER },
    { 'label': '=', 'type': ButtonType.EQUAL },
    { 'label': '+/-', 'type': ButtonType.SIGN_CHANGE },
    { 'label': '0', 'type': ButtonType.NUMBER },
    { 'label': '.', 'type': ButtonType.DOT }
]