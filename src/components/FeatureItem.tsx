import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Features} from '../models/PayWall';

type Props = {
  item: Features;
};

const FeatureItem = (props: Props) => {
  const {icon, header, title} = props.item;

  return (
    <View style={styles.featureContainer}>
      <View style={styles.featureIconContainer}>
        <MaterialCommunityIcons
          style={{alignSelf: 'center'}}
          size={20}
          color={'white'}
          name={icon}
        />
      </View>
      <View>
        <Text style={styles.featureHeaderText}>{header}</Text>
        <Text style={styles.featureTitleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  featureContainer: {
    marginTop: 20,
    marginRight: 8,
    width: 150,
    height: 130,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 14,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  featureIconContainer: {
    left: 16,
    height: 36,
    width: 36,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    justifyContent: 'center',
  },
  featureHeaderText: {
    color: '#FFFF',
    left: 16,
    fontFamily: 'Rubik',
    fontWeight: '500',
    fontSize: 20,
  },
  featureTitleText: {
    marginTop: 4,
    color: 'rgba(255, 255, 255, 0.7)',
    left: 16,
    fontFamily: 'Rubik',
    fontSize: 13,
    fontWeight: '400',
  },
});

export default FeatureItem;
