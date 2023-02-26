import React from 'react';
import { useForm } from 'react-hook-form';
import { RadioButton } from 'components/Button/RadioButton';
import { RadioGroup } from './styles';
import { Button } from 'components/Button/styles';

export default function SubmitPostForm() {
  const { register, formState, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log('submitting form...', data);
    console.log('form staet ', formState);
    console.log('errors ', formState.errors.title);
    // console.log('form state ', formState.)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Model</h2>
      <RadioGroup>
        <RadioButton input="midjourney" name="model" />
        <RadioButton input="DALLE" name="model" />
        <RadioButton input="Stable Diffusion" name="model" />
      </RadioGroup>

      <h2>Medium</h2>
      <RadioGroup>
        <RadioButton input="digital art" name="medium" />
        <RadioButton input="web design" name="medium" />
        <RadioButton input="poetry" name="medium" />
      </RadioGroup>
      <label htmlFor="titleInput">Work Title</label>
      <input type="text" id="titleInput" {...register('title', { required: true })} />

      <label htmlFor="description" {...register('description')}>
        Description (optional)
      </label>
      <textarea id="description" />

      <label htmlFor="prompt">Prompt </label>
      <textarea id="prompt" {...register('prompt', { required: true })} />

      <input id="image-file" type="file" />
      <button type="submit" {...register('image')}>
        {' '}
        submit{' '}
      </button>
    </form>
  );
}
