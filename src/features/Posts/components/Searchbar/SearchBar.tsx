import React from 'react';
import { Container, Search } from './styles';
import { RadixSelect } from 'components/Select/RadixSelect';

export default function SearchBar() {
  return (
    <Container>
      <Search>
        <label htmlFor="search_images">Search through 100s of pieces of AI art and design </label>
        <input type="text" id="search_images" />
      </Search>
      <RadixSelect />
    </Container>
  );
}
