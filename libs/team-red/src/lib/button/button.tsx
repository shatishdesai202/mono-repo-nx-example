import './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <div
      style={{ background: 'red', display: 'flex', justifyContent: 'center' }}
    >
      <button style={{ color: 'red' }}>Button From Team-Red</button>
    </div>
  );
}

export default Button;
