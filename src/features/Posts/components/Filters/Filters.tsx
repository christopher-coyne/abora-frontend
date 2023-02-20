import { RadixSelect } from 'components/Select/RadixSelect';
import { Container, FiltersContainer } from './styles';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export function Filters() {
  const [search, setSearch] = useSearchParams();
  const model = search.get('model');
  const modelPlaceholder = model || 'All Models';

  const medium = search.get('medium');
  const mediumPlaceholder = medium || 'All Media';

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
      {
        value: 'All Models',
        text: 'All Models',
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
    placeholder: modelPlaceholder,
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
      {
        value: 'All Media',
        text: 'All Media',
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
    placeholder: mediumPlaceholder,
  };

  return (
    <Container>
      <h3>Add Filter</h3>
      <FiltersContainer>
        <RadixSelect config={modelSelect} />
        <RadixSelect config={mediumSelect} />
      </FiltersContainer>
    </Container>
  );
}
