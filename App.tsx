import {View, Text} from 'react-native';
import * as React from 'react';
import Navigation from './src/navigation';
import Toast from 'react-native-toast-message';

function App() {
  return (
    <>
      <Navigation />
      <Toast />
    </>
  );
}
export default App;
