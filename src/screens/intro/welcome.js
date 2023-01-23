import {View, ImageBackground, Image, StyleSheet} from 'react-native';
import React from 'react';
import BaseView from '../../container/baseView';
import {HEIGHT, WIDTH} from '../../utils/context';
import Text from '../../components/text';
import {black} from '../../utils/color';
import Button from '../../components/button';
import Logo from '../../container/logo';

export default function Welcome({navigation}) {
  return (
    <BaseView style={styles.view}>
      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          paddingTop: 60,
        }}>
        <Logo />
      </View>
      <Text h1 fw={'900'}>
        Welcome
      </Text>
      <Text h4 style={styles.text}>
        It' a pleasure to meet you. we are excited that you're here so let's get
        started!
      </Text>
      <Button lable={' GET STARTED'} />
    </BaseView>
  );
}
const styles = StyleSheet.create({
  view: {
    padding: 20,
    alignItems: 'center',
  },

  text: {
    textAlign: 'center',
    width: '70%',
    marginTop: 10,
  },
});
