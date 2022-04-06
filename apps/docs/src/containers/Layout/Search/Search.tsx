import { Container, SearchField } from '@booleon/ui';

export function Search() {
  return (
    <Container area_SEARCH>
      <Container hidden sm__flex main_end cross_center p_2xl>
        <SearchField label="Search" placeholder="Search" hidden />
      </Container>
    </Container>
  );
}
