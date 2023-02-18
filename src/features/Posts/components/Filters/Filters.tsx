import { RadixSelect } from 'components/Select/RadixSelect';
import { Container, FiltersContainer } from './styles';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export function Filters() {
  const [search, setSearch] = useSearchParams();
  /*
  const [modelValue, setModelValue] = useState('All Models')
  const [modelValue, setModelValue] = useState('All Models')
  */
  console.log('search from filters ', search.get('model'));
  const modelSelect = {
    items: [
      {
        value: 'Midjourney',
        text: 'Midjourney',
      },
      {
        value: 'Stable Diffusion',
        text: 'Stable Diffusion',
      },
      {
        value: 'DALLE',
        text: 'DALLE',
      },
    ],
    callback: (value: string) => {
      console.log('hey');
      if (value !== 'All Models') {
        console.log('val ', value);
        // const newParams = { model: value };
        search.set('model', value);
        setSearch(search);
      }
    },
    placeholder: 'All Models',
  };

  const mediumSelect = {
    items: [
      {
        value: 'Web Design',
        text: 'Web Design',
      },
      {
        value: 'Graphic Design',
        text: 'Graphic Design',
      },
      {
        value: 'Digital Art',
        text: 'Digital Art',
      },
    ],
    callback: (value: string) => {
      console.log('hey');
      if (value !== 'All Media') {
        console.log('val ', value);
        search.set('medium', value);
        setSearch(search);
      }
    },
    placeholder: 'All Media',
  };
  /*
  return (
    <Container>
      <h3>Add Filter</h3>
      <FiltersContainer>
        <RadixSelect config={modelSelect} />
        <RadixSelect config={mediumSelect} />
      </FiltersContainer>
    </Container>
  );
  */
  return <div>filters</div>;
}
