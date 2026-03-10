import Button from './Button';

function ButtonGrid({buttons, onButtonClick}) {
    return (<div className="Calculator__Buttons">
        {buttons.map((button) => (
          <Button key={button.label} label={button.label} type={button.type} handler={() => onButtonClick(button)} >
            {button.label}
            </Button>
        ))}
      </div>)
}

export default ButtonGrid