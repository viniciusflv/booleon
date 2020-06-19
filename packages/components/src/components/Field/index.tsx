import { Text, View } from '../../../../core/src';
import React, { FC } from 'react';

export const Field: FC<any> = ({ label, ...props }) => {
  const types = [
    'checkbox',
    'color',
    'email',
    'file',
    'number',
    'password',
    'radio',
    'range',
    'text',
  ];

  const type = Object.keys(props).reduce(
    (acc, key) => (types.includes(key) ? key : acc),
    'text',
  );

  const changeOrientation = ['checkbox', 'radio'].includes(type);

  return (
    <View flex col={!changeOrientation} row_reverse={changeOrientation}>
      {label && <Text>{label}</Text>}
      <input type={type} />
    </View>
  );
};
