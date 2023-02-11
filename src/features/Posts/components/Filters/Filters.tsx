import { RadixSelect } from 'components/Select/RadixSelect';
import { Container, FiltersContainer } from './styles';

export function Filters() {
  return (
    <Container>
      <h3>Add Filter</h3>
      <FiltersContainer>
        <RadixSelect />
        <RadixSelect />
      </FiltersContainer>
    </Container>
  );
}
