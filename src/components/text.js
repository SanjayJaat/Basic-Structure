import {View, Text as TextRN, StyleSheet} from 'react-native';
import React from 'react';
import {sizes} from '../utils/typogarpy';

export default function Text({
  children,
  style,

  color,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  mt,
  fw,
  ...rest
}) {
  return (
    <TextRN
      {...rest}
      style={StyleSheet.flatten([
        StyleSheet.flatten([styles.text, style]),
        color && StyleSheet.flatten([styles.color(color), style]),
        mt && StyleSheet.flatten([styles.mt(mt), style]),
        fw && StyleSheet.flatten([styles.fw(fw), style]),

        h5 && StyleSheet.flatten([styles.h5, style]),
        h1 && StyleSheet.flatten([styles.h1, style]),
        h2 && StyleSheet.flatten([styles.h2, style]),
        h3 && StyleSheet.flatten([styles.h3, style]),
        h4 && StyleSheet.flatten([styles.h4, style]),
        h6 && StyleSheet.flatten([styles.h6, style]),
      ])}>
      {children}
    </TextRN>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.h3,
    color: 'black',
  },
  color: color => ({
    color,
  }),
  mt: mt => ({
    marginTop: mt,
  }),
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
  },
  h3: {
    fontSize: sizes.h3,
  },
  h4: {
    fontSize: sizes.h4,
  },
  h5: {
    fontSize: sizes.h5,
  },
  h6: {
    fontSize: sizes.h6,
  },
  fw: fw => ({
    fontWeight: fw,
  }),
});
