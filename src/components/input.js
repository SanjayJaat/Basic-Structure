import {TextInput, StyleSheet, View} from 'react-native';
import React from 'react';
import {WIDTH} from '../utils/context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useState} from 'react';
import {grey, yellow1} from '../utils/color';
import Text from './text';

export default function Input({
  placeholder,
  email,
  phone,
  style,
  value,

  setValue,
  label,
  ...rest
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  let keyboardType = 'default';

  return (
    <View style={[styles.container, style]}>
      {/* {label ? ( */}
      <View style={styles.row}>
        <Text h5 color={grey} style={styles.text}>
          {label}
        </Text>
        {label === 'Password' || label == 'Confirm password' ? (
          <Icon
            name="eye-slash"
            size={17}
            color="grey"
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        ) : null}
      </View>

      {/* ) : null} */}
      <View style={styles.row}>
        <TextInput
          {...rest}
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          secureTextEntry={
            label == 'Password' || label == 'Confirm password'
              ? !passwordVisible
              : false
          }
          keyboardType={keyboardType}
          style={[styles.input, style]}
        />
        {value ? <Icon name="check" size={17} color={yellow1}></Icon> : null}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: '88%',
    height: 50,
    fontSize: 20,
    padding: 10,
    color: 'black',
    fontFamily: 'serif',
  },
  container: {
    width: '100%',
    height: 70,
    marginVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: grey,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
