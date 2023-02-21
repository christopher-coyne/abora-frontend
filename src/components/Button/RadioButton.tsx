import React from 'react';
import './radioButton.css';

type RadioButtonProps = {
  input: string;
  name: string;
};

export function RadioButton({ input, name }: RadioButtonProps) {
  return (
    <>
      <input id={input} type="radio" name={name} />
      <label htmlFor={input}>{input}</label>
    </>
  );
}
