import './button.module.css';
import { Label } from '@mono-repo-nx-example/core';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'grey',
        }}
      >
        <Label />
      </div>
      <div
        style={{
          background: 'green',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button style={{ color: 'green' }}>Button From Team-Green</button>
      </div>
    </>
  );
}

export default Button;
