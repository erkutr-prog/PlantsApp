import {View, Text} from 'react-native';
import React from 'react';
import PayWall from './PayWall';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../models/TabParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Purchase'>;

const Purchase = ({route, navigation}: Props) => {
  const goBackToMain = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <PayWall onCancelCallback={goBackToMain} />
    </View>
  );
};

export default Purchase;
