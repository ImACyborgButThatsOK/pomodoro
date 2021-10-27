import "./Button.css";
const Button = ({ title, activeClass, _callback }) => {
  return (
    <button id="button-label" className={activeClass} onClick={_callback}>
      {title}
    </button>
  );
};

export default Button;
