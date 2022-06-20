import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
import imageon from './assets/icons/eco-light-on.png';
import imageoff from './assets/icons/eco-light-off.png';
import avanadeon from './assets/icons/avanade-on.png';
import avanadeoff from './assets/icons/avanade-off.png';

const App = () => {
  const [toggle, SetToggle] = useState(false);
  const handleChangeToggle = () => SetToggle(!toggle);
  useEffect(() => {
    Torch.switchState(toggle);
    console.log('Trocou o estado da lanterna');
  }, [toggle]);
  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      SetToggle(!toggle);
    });
  });
  return (
    <View style={toggle ? Style.containerLight : Style.containerDark}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? Style.lightingOn : Style.lightingOff}
          source={toggle ? imageon : imageoff}
        />
        <Image
          style={toggle ? Style.lightingOn : Style.lightingOff}
          source={toggle ? avanadeon : avanadeoff}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const Style = StyleSheet.create({
  containerDark: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    tintColor: 'white',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
});
