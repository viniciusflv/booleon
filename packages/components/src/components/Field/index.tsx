import { Container } from './styles';
import { Text, View } from '../../../../core/src';
import React, { FC, useState } from 'react';

const PureField: FC<any> = ({ label, children, ...props }) => {
  const pointer = [
    props?.select,
    props?.file,
    props?.radio,
    props?.checkbox,
  ].includes(true);

  return (
    <View
      id={label}
      h_4
      w_full
      p_md
      outline_none
      cursor_pointer={pointer}
      {...props}>
      {props?.select && children}
    </View>
  );
};

const FieldDecoration: FC<any> = ({ children, ...props }) => {
  return (
    <View
      fieldset
      flex
      col
      b_edge
      bc_000
      b_thin
      main_between
      w_full
      w_max_16
      pr_md={props?.select}>
      {props?.label && (
        <View ml_sm px_sm legend>
          <Text label for={props?.label}>
            {props?.label}
          </Text>
        </View>
      )}
      {children}
    </View>
  );
};

const FileField: FC<any> = (props) => {
  const [fileName, setfileName] = useState('fileName');
  const [fileSize, setfileSize] = useState('fileSize');

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
    setfileName(name);
    setfileSize(toMB(size));
    if (props?.onChange) props?.onChange(e);
  };

  return (
    <FieldDecoration {...props}>
      <View flex cross_center absolute cover p_md pt_lg h_max_16 z_neg>
        <Text f_truncate>{`${fileSize} - ${fileName}`}</Text>
      </View>
      <PureField {...props} op_0 onChange={onChange} />
    </FieldDecoration>
  );
};

const CheckboxRadioField: FC<any> = ({ label, ...props }) => {
  return (
    <View flex cross_center w_full w_max_16>
      <Container relative h_2 w_2 h_min_2 w_min_2 mr_sm>
        <View
          id={label}
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
          bc_000
          b_thin
        />
      </Container>
      {label && (
        <Text label for={label}>
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
