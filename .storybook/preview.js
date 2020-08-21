import './reset.css';

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#eeeeee', default: true },
      { name: 'dark', value: '#333333' },
    ],
  },
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
};
