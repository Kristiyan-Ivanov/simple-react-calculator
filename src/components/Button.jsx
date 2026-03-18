function Button({ label, type, handler }) {
  const className = `Buttons__${type.charAt(0).toUpperCase() + type.slice(1)}`;
  return (
    <button className={className} onClick={() => handler(label, type)}>
      {label}
    </button>
  );
}

export default Button;
