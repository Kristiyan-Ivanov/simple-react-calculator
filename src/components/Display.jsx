
const fontSizes = {
  10: 2.5,
  15: 2
}

function retrieveFontSize(displayValue) {
  const length = displayValue.length;
  for (const [limit, size] of Object.entries(fontSizes)) {
    if (length <= limit) {
      return size;
    }
  }
  return 1.5;
}

function splitValue(value) {
  if (value.length > 20) {
    return value.replace(/(.{20})/g, "$1\n");
  }
  return value;
}

function formatThousands(value) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Display({ value }) {
  let formatedValue = splitValue(formatThousands(value))
  return (
    <div className="Calculator__Display" style={{ fontSize: retrieveFontSize(formatedValue) + 'rem' }}>
      {formatedValue}
    </div>
  )
}

export default Display;