import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useCameraDevices} from 'react-native-vision-camera';
import {Camera} from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';

type Props = {};

const CameraScreen = (props: Props) => {
  const isFocused = useIsFocused()
  const devices = useCameraDevices();
  const device = devices.back;
  if (device == null) {
    return null;
  }
  return (
    <View style={{flex: 1}}>
      { isFocused && 
            <Camera style={StyleSheet.absoluteFill} device={device} isActive={false}>
              <View style={styles.box} />
            </Camera>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFFF',
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
});

export default CameraScreen;
