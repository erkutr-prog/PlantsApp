import { View, Text, SafeAreaView, Image, Dimensions, TouchableWithoutFeedback, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

type Props = {}

const LANDING_PNG = require('../images/LandingScreen.png')

const WelcomeScreen = ({navigation}) => {

    const navigateToOnboarding = () => {
        navigation.replace('OnBoarding')
    }

  return (
    <SafeAreaView style={{flex: 1}}>
            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flex: 0.2, width: Dimensions.get('screen').width - 90}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{fontFamily: 'Rubik', fontSize: 28, fontWeight: '400', color: '#13231B'}}>
                        {'Welcome to '}
                    </Text>
                    <Text style={{fontFamily: 'Rubik', fontSize: 28, fontWeight: 'bold', color: '#13231B'}}>
                        {'PlantApp'}
                    </Text>
                </View>
                <Text style={{fontFamily: 'Rubik', fontSize: 16, fontWeight: '400', lineHeight: 22, color: 'rgba(19, 35, 27, 0.7)'}}>
                    {'Identify more than 3000+ plants and 88% accuracy.'}
                </Text>
            </View>
            <View style={{flex: 0.6, justifyContent: 'center', alignSelf: 'center'}}>
                <Image resizeMode='contain' source={LANDING_PNG} style={{flex: 1}} />
            </View>
            <View style={{flex: 0.2,flexDirection: 'column'}}>
                <CustomButton text={'Get Started'} style={styles.continueBtn} onPress={navigateToOnboarding}/>
                <View style={{flex: 0.4, width: Dimensions.get('screen').width / 2, alignSelf: 'center', marginTop: 17}}>
                    <Text style={{fontSize: 11, fontFamily: 'Rubik', lineHeight: 15, letterSpacing: 0.07, color: '#597165B2'}}>
                        {'By tapping next, you are agreeing to PlantID Terms of Use & Privacy Policy.'}
                    </Text>
                </View>
            </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    continueBtn: {
        flex: 0.4, 
        width: Dimensions.get('screen').width - 70, 
        alignSelf: 'center',
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#28AF6E', 
        borderRadius: 12
    }
})

export default WelcomeScreen