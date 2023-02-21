import React from 'react';
import { useForm } from 'react-hook-form';
import { RadioButton } from 'components/Button/RadioButton';
import { RadioGroup } from './styles';

export default function SubmitPostForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (d: any) => {
    console.log('submitting form...', d);
  };
  return (
    <form onSubmit={() => handleSubmit(onSubmit)}>
      <RadioGroup>
        <RadioButton input="midjourney" name="model" />
        <RadioButton input="DALLE" name="model" />
        <RadioButton input="Stable Diffusion" name="model" />
      </RadioGroup>
      <label htmlFor="titleInput">Work Title</label>
      <input type="text" id="titleInput" {...register('title')} />

      <label htmlFor="description">Description (optional)</label>
      <textarea id="description" />

      <label htmlFor="prompt">Prompt (optional)</label>
      <textarea id="prompt" />
    </form>
  );
}
