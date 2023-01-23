import {Image} from 'react-native';
import React from 'react';
import {logo} from '../utils/images';

export default function Logo() {
  return <Image style={{width: 70, height: 70}} source={logo} />;
}
