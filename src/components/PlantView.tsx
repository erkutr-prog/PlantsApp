import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {IPlants} from '../models/MainScreen';

type Props = {
  plant: IPlants; // Plant information
};

const PlantView = (props: Props) => {
  const {name, image, title} = props.plant;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}>
      <ImageBackground
        source={{uri: image.url}}
        imageStyle={{borderRadius: 12}}
        style={StyleSheet.absoluteFill}>
        <View
          style={styles.textContainer}>
          <Text
            style={{fontFamily: 'Rubik', fontSize: 16, fontWeight: '500'}}
            numberOfLines={2}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 12,
        marginVertical: 12,
        width: 160,
        height: 160,
        borderWidth: 0.5,
        borderColor: 'rgba(41, 187, 137, 0.18)',
        borderRadius: 12,
    },
    textContainer: {
        position: 'absolute',
        top: 16,
        left: 16,
        alignSelf: 'flex-start',
    }
})

export default PlantView;
