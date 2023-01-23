import {ActivityIndicator} from 'react-native';
import React from 'react';
import {black} from '../utils/color';
import {HEIGHT, WIDTH} from '../utils/context';

export default function Loader({visible}) {
  return visible ? (
    <ActivityIndicator
      size="large"
      style={{
        height: HEIGHT,
        width: WIDTH,
        position: 'absolute',
        backgroundColor: black + 90,
        zIndex: 20,
      }}
    />
  ) : null;
}
