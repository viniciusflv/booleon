import React, { FC } from 'react';

import { View, Text } from '@booleon/base';

const KeyValue: FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <View.table align="left">
      <View.thead>
        <View.tr>
          <Text.th fa_left fs_16>
            {label}
          </Text.th>
        </View.tr>
      </View.thead>
      <View.tbody>
        <View.tr>
          <Text.td fa_left fs_24>
            {value}
          </Text.td>
        </View.tr>
      </View.tbody>
    </View.table>
  );
};

export default KeyValue;
