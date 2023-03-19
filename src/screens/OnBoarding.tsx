import { View, Text, FlatList, Dimensions, Image, StyleSheet, SafeAreaView, StatusBar, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import React, { ReactElement, useRef, useState } from 'react'
import { OnBoardingPage } from '../models/OnBoarding'
import PayWall from './PayWall';
import CustomButton from '../components/CustomButton';

const {width, height} = Dimensions.get('window');

type Props = {}

const scenes = [
    {
        id: '1',
        image: require('./../images/Content.png'),
        text: 'Take a photo to identify the plant!'
    },
    {
        id: '2',
        image: require('./../images/SecondSceneBackGround.png'),
        text: 'Get Plant care guides'
    }
]

const Scene = ({item}: {item: OnBoardingPage}) => {
    return (
        <View style={{ width,alignItems: 'center', flexDirection: 'column'}}>
            {
                item.id == '1' ? 
                <>
                    <View style={{width,alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                        <Text style={styles.text}>
                            Take a photo to <Text style={{fontWeight: 'bold'}}>identify</Text> the plant!
                        </Text>
                    </View>
                    <Image resizeMode='contain' style={{height: '100%', width}} source={item.image}/>
                </>
                :
                <>
                    <View style={{width: width - 10, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                        <Text style={styles.text}>
                            Get Plant <Text style={{fontWeight: 'bold'}}>care guides</Text>
                        </Text>
                    </View>
                    <Image resizeMode='contain' style={{height: '100%', width}} source={item.image}/>
                </>
            }
        </View>
    )
}

const OnBoarding = ({navigation}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [payWallScene, setPayWallScene] = useState<Boolean>(false)
    const ref = useRef<FlatList>(null)

    const goToNextScene = () => {
        const nextSceneIndex = currentIndex + 1;
        if (nextSceneIndex !== scenes.length) {
            ref.current?.scrollToIndex({animated: true, index: (nextSceneIndex)})
            setCurrentIndex(nextSceneIndex);
        } else {    
            setPayWallScene(true)
        }
    }

    const navigateToMain = () => {
        navigation.replace('MainScreen')
    }

    const Footer = () => {
        return (
            <View style={styles.footerContainer}>
                <CustomButton style={styles.continueBtn} onPress={goToNextScene} text={'Continue'}/>
                <View style={{alignSelf: 'center', justifyContent: 'center',flex: 0.5,flexDirection: 'row'}}>
                    {
                        [0, 1, 2].map((item, index) => (
                            <View style={[
                                styles.defaultDot,
                                currentIndex == index && styles.currentSceneDot
                            ]} key={index}>
                            </View>
                        ))
                    }
                </View>
            </View>
        )
    }
  return (
    <>
        {payWallScene ? 
        <PayWall onCancelCallback={navigateToMain}/>
        :
        <SafeAreaView style={{flex: 1}}>
        <FlatList
            ref={ref}
            data={scenes}
            contentContainerStyle={{height: height * 0.85}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            renderItem={({item}) => <Scene item={item}/>}
            keyExtractor={(item: OnBoardingPage) => item.id}
            pagingEnabled
            bounces={false}
            scrollEnabled={false}
        />
        <Footer/>
    </SafeAreaView>    
    }
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 75,
      borderRadius: 12,
      backgroundColor: "blue",
    },
    text: {
        fontFamily: 'Rubik',
        fontSize: 28,
        fontWeight: '500',
        letterSpacing: -1
    },
    curvedLine: {
      width: "20%",
      height: 100,
      position: "absolute",
      bottom: -25,
      left: "40%",
      borderRadius: 35,
      backgroundColor: "black",
      transform: [{ scaleX: 5 }, { scaleY: 1 }],
    },
    footerContainer: {
        flexDirection: 'column',
        height: height * 0.15
    },
    defaultDot: {
        alignSelf: 'center',
        width: 6, 
        height: 6, 
        borderRadius: 5, 
        backgroundColor: 'rgba(19, 35, 27, 0.25);',
        marginRight: 8, 
        marginTop: 10
    },
    currentSceneDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#13231B',
        marginRight: 8,
        marginTop: 10
    },
    continueBtn: {
        flex: 0.5,
        alignSelf: 'center',
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 12, 
        width: width - 25,
        backgroundColor: '#28AF6E',
    }
  });

export default OnBoarding