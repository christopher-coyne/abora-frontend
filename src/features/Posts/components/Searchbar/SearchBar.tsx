import { useSearchParams } from 'react-router-dom';
import { Container, Search } from './styles';
import { RadixSelect } from 'components/Select/RadixSelect';

export default function SearchBar() {
  // Get the userId param from the URL.
  const [search, setSearch] = useSearchParams();

  const selectItems = {
    items: [
      {
        value: 'Newest',
        text: 'Newest',
      },
      {
        value: 'Oldest',
        text: 'Oldest',
      },
      {
        value: 'Highest Rated',
        text: 'Highest Rated',
      },
    ],
    callback: (value: string) => {
      console.log('hey');
      if (value !== 'Sort By: Newest') {
        console.log('val ', value);
        const newParams = { ...search, sortby: value };
        setSearch(newParams);
      }
    },
    placeholder: 'Sort By: Newest',
  };

  return (
    <Container>
      <Search>
        <label htmlFor="search_images">Search through 100s of pieces of AI art and design </label>
        <input type="text" id="search_images" />
      </Search>
      <RadixSelect config={selectItems} />
    </Container>
  );
}
