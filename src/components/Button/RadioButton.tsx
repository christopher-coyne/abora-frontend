import React from 'react';
import './radioButton.css';

type RadioButtonProps = {
  input: string;
  name: string;
};

export function RadioButton({ input, name }: RadioButtonProps) {
  return (
    <>
      <input id={input} type="radio" name={name} className="radioInput" />
      <label htmlFor={input} className="radioLabel">
        {input}
      </label>
    </>
  );
}
