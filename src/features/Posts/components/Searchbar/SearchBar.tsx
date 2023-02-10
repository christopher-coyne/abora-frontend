import React from 'react';
import { Container } from './styles';
import { RadixSelect } from 'components/Select/RadixSelect';

export default function SearchBar() {
  return (
    <Container>
      <input type="text" />
      <RadixSelect />
    </Container>
  );
}
