import {View, Text} from 'react-native';
import React from 'react';
import {lightgrey, white} from '../utils/color';

export default function BaseView({children, style}) {
  return (
    <View color={white} style={[{flex: 1, backgroundColor: 'white'}, style]}>
      {children}
    </View>
  );
}
