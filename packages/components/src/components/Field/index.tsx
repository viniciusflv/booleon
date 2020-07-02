import { ContainerStyle, DecorationStyle } from './styles';
import { Text, View } from '../../../../core/src';
import React, { FC, useState } from 'react';

const fastHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash<<5)-hash)+str.charCodeAt(i);
    hash = hash & hash;
  }
  return hash;
};

const PureField: FC<any> = ({ label, children, ...props }) => {
  const pointer = [
    props?.select,
    props?.file,
    props?.radio,
    props?.checkbox,
  ].includes(true);

  return (
    <View
      id={fastHash(label)}
      h_4
      w_full
      p_md
      outline_none
      cursor_pointer={pointer}
      h_8={props?.textarea}
      {...props}>
      {props?.select && children}
    </View>
  );
};

const FieldDecoration: FC<any> = ({ children, ...props }) => {
  return (
    <DecorationStyle
      fieldset
      flex
      col
      b_edge
      bc_80868b
      b_thin
      main_between
      w_full
      w_max_16
      pr_md={props?.select}>
      {props?.label && (
        <View ml_sm px_sm legend>
          <Text label fc_80868b for={props?.label}>
            {props?.label}
          </Text>
        </View>
      )}
      {children}
    </DecorationStyle>
  );
};

const FileField: FC<any> = ({ placeholder = 'Select file', ...props}) => {
  const [msg, setMsg] = useState(placeholder);

  const toMB = (size: number, unit = 'Bytes') => {
    if (size / 1024 > 1) {
      size /= 1024;
      unit = 'KB';
    }
    if (size / 1024 > 1) {
      size /= 1024;
      unit = 'MB';
    }
    return `${String(size.toFixed(2))} ${unit}`;
  };

  const onChange = (e: any) => {
    const { name, size } = e?.target?.files[0] as File;
    setMsg(`${toMB(size)} - ${name}`);
    if (props?.onChange) props?.onChange(e);
  };

  return (
    <FieldDecoration {...props}>
      <View flex cross_center absolute cover p_md pt_lg h_max_16 z_neg>
        <Text f_truncate fc_80868b>{msg}</Text>
      </View>
      <PureField {...props} op_0 onChange={onChange} />
    </FieldDecoration>
  );
};

const CheckboxRadioField: FC<any> = ({ label, ...props }) => {
  return (
    <View flex cross_center w_full w_max_16>
      <ContainerStyle relative h_2 w_2 h_min_2 w_min_2 mx_sm>
        <View
          id={fastHash(label)}
          w_full
          h_full
          p_md
          op_0
          outline_none
          cursor_pointer
          absolute
          cover
          {...props}
        />
        <View
          flex
          cross_center
          main_center
          z_neg
          w_full
          h_full
          b_edge={props?.checkbox}
          b_circular={props?.radio}
          bc_80868b
          b_thin
        />
      </ContainerStyle>
      {label && (
        <Text label fc_80868b for={label}>
          {label}
        </Text>
      )}
    </View>
  );
};

export const Field: FC<any> = (props) => {
  switch (true) {
  case props?.pure:
    return <PureField {...props} />;
  case props?.file:
    return <FileField {...props} />;
  case props?.checkbox:
  case props?.radio:
    return <CheckboxRadioField {...props} />;
  default:
    return (
      <FieldDecoration {...props}>
        <PureField {...props} />
      </FieldDecoration>
    );
  }
};
