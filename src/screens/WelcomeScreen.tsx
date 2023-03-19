import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../models/TabParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>

const LANDING_PNG = require('../images/LandingScreen.png');

const WelcomeScreen = ({navigation}: Props) => {
  const navigateToOnboarding = () => {
    navigation.replace('OnBoarding');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={styles.welcomeText}>
            {'Welcome to '}
          </Text>
          <Text
            style={styles.boldText}>
            {'PlantApp'}
          </Text>
        </View>
        <Text
          style={styles.subText}>
          {'Identify more than 3000+ plants and 88% accuracy.'}
        </Text>
      </View>
      <View style={{flex: 0.6, justifyContent: 'center', alignSelf: 'center'}}>
        <Image resizeMode="contain" source={LANDING_PNG} style={{flex: 1}} />
      </View>
      <View style={{flex: 0.2, flexDirection: 'column'}}>
        <CustomButton
          text={'Get Started'}
          style={styles.continueBtn}
          onPress={navigateToOnboarding}
        />
        <View
          style={styles.termsContainer}>
          <Text
            style={styles.termsText}>
            {
              'By tapping next, you are agreeing to PlantID Terms of Use & Privacy Policy.'
            }
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 0.2,
    width: Dimensions.get('screen').width - 90,
  },
  welcomeText: {
    fontFamily: 'Rubik',
    fontSize: 28,
    fontWeight: '400',
    color: '#13231B',
  },
  boldText: {
    fontFamily: 'Rubik',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#13231B',
  },
  subText: {
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: 'rgba(19, 35, 27, 0.7)',
  },
  termsText: {
    fontSize: 11,
    fontFamily: 'Rubik',
    lineHeight: 15,
    letterSpacing: 0.07,
    color: '#597165B2',
  },
  termsContainer: {
    flex: 0.4,
    width: Dimensions.get('screen').width / 2,
    alignSelf: 'center',
    marginTop: 17,
  },
  continueBtn: {
    flex: 0.4,
    width: Dimensions.get('screen').width - 70,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28AF6E',
    borderRadius: 12,
  },
});

export default WelcomeScreen;
