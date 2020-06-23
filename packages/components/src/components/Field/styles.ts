import { View } from '../../../../core/src';
import styled from 'styled-components';

export const Container = styled(View)`
  input[type='radio']:checked ~ *:before {
    content: '•';
    font-size: 2rem;
    margin-top: .15rem;
  }
  input[type='checkbox']:checked ~ *:before {
    content: '✔';
    font-size: 1.5rem;
  }
`;
