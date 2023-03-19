import { View, Text, Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import { OnBoardingPage } from '../models/OnBoarding'

type Props = {
    item: OnBoardingPage // The text and pngs that onboarding slides contain
}

const {width} = Dimensions.get('window')

const OnboardingScene = (props: Props) => {
    const {
        id,
        image,
        text
    } = props.item
  return (
    <View style={{width, alignItems: 'center', flexDirection: 'column'}}>
    {id == '1' ? (
      <>
        <View
          style={styles.firstSceneText}>
          <Text style={styles.text}>
            Take a photo to <Text style={{fontWeight: 'bold'}}>identify</Text>{' '}
            the plant!
          </Text>
        </View>
        <Image
          resizeMode="contain"
          style={{height: '100%', width}}
          source={image}
        />
      </>
    ) : (
      <>
        <View
          style={styles.secondSceneText}>
          <Text style={styles.text}>
            Get Plant <Text style={{fontWeight: 'bold'}}>care guides</Text>
          </Text>
        </View>
        <Image
          resizeMode="contain"
          style={{height: '100%', width}}
          source={image}
        />
      </>
    )}
  </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Rubik',
        fontSize: 28,
        fontWeight: '500',
        letterSpacing: -1,
      },
    firstSceneText: {
        width,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    secondSceneText: {
        width: width - 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
})

export default OnboardingScene


