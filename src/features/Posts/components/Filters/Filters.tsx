import { RadixSelect } from 'components/Select/RadixSelect';
import { Container, FiltersContainer } from './styles';

const selectItems = [
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
];

export function Filters() {
  return (
    <Container>
      <h3>Add Filter</h3>
      <FiltersContainer></FiltersContainer>
    </Container>
  );
}
