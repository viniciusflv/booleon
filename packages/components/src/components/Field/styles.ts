import { View } from '../../../../core/src';
import styled from 'styled-components';

export const DecorationStyle = styled(View)`
  select {
    color: rgba(0,0,0,.7);
  }
  :focus-within {
    label {
      color: red;
      font-weight: 300;
    }
    border-color: red;
    border-width: 0.1rem;
  }
`;

export const ContainerStyle = styled(View)`
  input[type='radio']:checked ~ *:before {
    content: '•';
    font-size: 2rem;
    margin-top: 0.15rem;
  }
  input[type='checkbox']:checked ~ *:before {
    content: '✔';
    font-size: 1.5rem;
  }
  input:focus ~ * {
    color: red;
    font-weight: 300;
    border-color: red;
    border-width: 0.1rem;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
