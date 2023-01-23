import {TouchableOpacity, StyleSheet} from 'react-native';
import Text from './text';
import React from 'react';
import {WIDTH} from '../utils/context';
import {black, green, white, yellow1} from '../utils/color';
import Icon from 'react-native-vector-icons/Entypo';

export default function Button({
  style,
  textStyle,
  lable,
  color = white,
  onPress,
  ...rest
}) {
  return (
    <TouchableOpacity {...rest} onPress={onPress} style={[styles.touch, style]}>
      {/* <Icon name="facebook" size={34} color="white" /> */}
      <Text h4 color={color} fw={'bold'} style={[styles.texts, textStyle]}>
        {lable}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touch: {
    width: '100%',
    height: 50,
    backgroundColor: yellow1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    flexDirection: 'row',
  },
  texts: {
    textAlign: 'center',
  },
});
