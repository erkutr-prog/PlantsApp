import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  visible: boolean
};

const mailIcon = require('./../images/MailIcon.png');
const {width} = Dimensions.get('window');

const PremiumCard = (props: Props) => {
  return (
    <View
      style={[styles.container, {display: props.visible ? 'flex' : 'none'}]}>
      <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={mailIcon}
          style={{height: 40, width: 40, alignSelf: 'center'}}
        />
      </View>
      <View
        style={styles.textContainer}>
        <Text
          style={styles.topText}>
          <Text style={{fontWeight: '700'}}>FREE</Text> Premium Available
        </Text>
        <Text
          style={styles.bottomText}>
          Tap to upgrade your account!
        </Text>
      </View>
      <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
        <Ionicons name="chevron-forward-outline" size={24} color={'#D0B070'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: 'row',
    width: width - 34,
    backgroundColor: '#24201A',
    borderRadius: 12,
    height: 64,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  topText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 21,
    color: '#FFDE9C',
    alignSelf: 'flex-start',
  },
  bottomText: {
    fontSize: 13,
    fontWeight: '400',
    color: '#FFDE9C',
    alignSelf: 'flex-start',
  }
})

export default PremiumCard;
