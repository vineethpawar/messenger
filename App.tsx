import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {theme} from './theme';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './navigator';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Navigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
