import React, { Children, cloneElement, FC } from 'react';

import { UlStyle, OlStyled } from './styles';

const Container: FC<any> = ({ type, children }) => {
  const Tag = type === 'numbered' ? OlStyled : UlStyle;
  return (
    <Tag m_0 p_0 child__before__fc_00f child__before__mr_10>
      {Children.map(children, (child, i) =>
        cloneElement(child, { marker: type === 'numbered' ? `${++i}.` : '•' }),
      )}
    </Tag>
  );
};

export default Container;
