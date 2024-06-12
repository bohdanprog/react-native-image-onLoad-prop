/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, Platform} from 'react-native';

function App(): React.JSX.Element {
  return (
    <Image
      style={{width: '100%', height: '100%'}}
      source={{
        uri: 'https://image-placeholder.com/images/actual-size/75x75.png',
      }}
      resizeMode={'cover'}
      onLoad={e => {
        console.log(
          `RNImage:${Platform.OS} load JPEG image from url`,
          e.nativeEvent,
        );
      }}
    />
  );
}

export default App;
