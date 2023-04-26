import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {theme} from './theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box variant="def">Hello world</Box>
    </NativeBaseProvider>
  );
}
