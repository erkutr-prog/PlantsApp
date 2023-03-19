import { View, Text, ImageBackground, Dimensions, FlatList, TouchableHighlight, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomButton from '../components/CustomButton'

type Props = {
    onCancelCallback: () => void
}

const {width, height} = Dimensions.get('window')

const IMAGE_BACKGROUND = require('./../images/PayWallBackground.png');
const IMAGE = require('./../images/PayWall.png');

type Features = {
    id: string,
    header: string,
    title: string,
    icon: string
}

type Subscriptions = {
    id: string,
    header: string,
    description: string
}

const features = [
    {
        id: '0',
        header: 'Unlimited',
        title: 'Plant Identify',
        icon: 'line-scan'
    },
    {
        id: '1',
        header: 'Faster',
        title: 'Process',
        icon: 'speedometer-slow'
    },
    {
        id: '2',
        header: 'Detailed',
        title: 'Plant Care',
        icon: 'leaf'
    }
]

const subscriptions = [
    {
        id: '0',
        header: '1 Month',
        description: '$2.99/month, auto renewable'
    },
    {
        id: '1',
        header: '1 Year',
        description: 'First 3 days free, then $529,99/year'
    }
]

const PayWall = (props: Props) => {
    const [selectedSubscription, setSelectedSubscription] = useState<Subscriptions>()

    useEffect(() => {
        setSelectedSubscription(subscriptions[1]);
    }, [])


    const FeatureItem = ({item}: {item: Features}) => {
        return (
            <View style={{marginTop: 20,marginRight: 8, width: 150, height: 130, backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: 14, flexDirection: 'column', justifyContent: 'space-evenly'}}>
                <View style={{left: 16, height: 36, width: 36, borderRadius: 8, backgroundColor: 'rgba(0, 0, 0, 0.24)', justifyContent: 'center'}}>
                    <MaterialCommunityIcons style={{alignSelf: 'center'}} size={20} color={'white'} name={item.icon}/>
                </View>
                <View>
                    <Text style={{color: '#FFFF',left: 16, fontFamily: 'Rubik', fontWeight: '500', fontSize: 20, }}>
                        {item.header}
                    </Text>
                    <Text style={{ marginTop: 4,color: 'rgba(255, 255, 255, 0.7)', left: 16, fontFamily: 'Rubik', fontSize: 13, fontWeight: '400'}}>
                        {item.title}
                    </Text>
                </View>
            </View>
        )
    }

    const closeButton = () => {
        return (
            <TouchableOpacity onPress={() => props.onCancelCallback()} style={{ justifyContent: 'center', position: 'absolute', right: 10, top: 35, width: 24, height: 24, borderRadius: 14, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                <MaterialCommunityIcons style={{alignSelf: 'center'}} name='close' size={15} color={'#FFFF'} />
            </TouchableOpacity>
        )
    }

    const getFeaturesList = () => {
        return (
            <View>
                <FlatList
                    data={features}
                    keyExtractor={(item: Features) => item.id}
                    renderItem={({item}) => <FeatureItem item={item}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }


    const getTopPage = () => {
        return (
            <View style={{flex: 0.6}}>
                <ImageBackground style={{height: '100%', width: width}} source={IMAGE_BACKGROUND}>
                    <View style={{flex: 1,flexDirection: 'column-reverse', margin: 20}}>
                        {closeButton()}
                        {getFeaturesList()}
                        <View>
                            <Text style={{ color: 'rgba(255, 255, 255, 0.7);',fontFamily: 'Rubik', fontSize: 17, fontWeight: '300', lineHeight: 24, letterSpacing: 0.38}}>
                                Access All Features
                            </Text>
                        </View>
                        <View>
                            <Text style={{color: '#FFFF',fontFamily: 'Rubik', fontSize: 27, fontWeight: '300'}}>
                                <Text style={{fontWeight: '700'}}>PlantApp</Text> Premium
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    const SubscriptionCard = (data: Subscriptions) => {
        return (
            <TouchableOpacity key={data.id} activeOpacity={1} onPress={() => setSelectedSubscription(data)} style={selectedSubscription == data ? [styles.subscriptionCard, {borderColor: '#28AF6E', backgroundColor: 'rgba(40, 175, 110, 0)'}] : styles.subscriptionCard }>
                <View style={selectedSubscription == data ? styles.selectedRadioBtn : styles.defaultRadioBtn}/>
                <View style={{flexDirection: 'column', alignSelf: 'center', left: 36}}>
                    <Text style={{fontFamily: 'Rubik', fontSize: 16, lineHeight: 18, color: '#FFFF', fontWeight: '500'}}>
                        {data.header}
                    </Text>
                    <Text style={{fontFamily: 'Rubik', fontSize: 12, lineHeight: 14, color: 'rgba(255, 255, 255, 0.7)', fontWeight: '300'}}>
                        {data.description}
                    </Text>
                </View>
                {data.id == '1' && selectedSubscription == data 
                ?
                <View style={{position: 'absolute', top: 0, right: 0, backgroundColor: '#28AF6E', borderTopEndRadius: 14, borderBottomLeftRadius: 20, width: 70, height: 30, justifyContent: 'center'}}>
                    <Text style={{alignSelf: 'center', color: '#ffff', fontWeight: '500', fontSize: 12, fontFamily: 'Rubik'}}>
                        Save 50%
                    </Text>
                </View>
                :
                null
                }
            </TouchableOpacity>
        )
    }

    const getBottomPage = () => {
        return (
            <View style={{flex: 0.4, backgroundColor: '#101E17', flexDirection: 'column'}}>
                <View style={{flex: 0.5}}>
                    {
                        subscriptions.map((data, index) => (
                            SubscriptionCard(data)
                        ))
                    }
                </View>
                <View style={{flex: 0.5, width: width - 25, alignSelf: 'center'}}>
                    <CustomButton style={styles.subscribeBtn} text={'Try free for 3 days'} onPress={() => {}}/>
                    <View style={{flex: 0.3}}>
                        <Text style={{fontFamily: 'Rubik', color: 'rgba(255, 255, 255, 0.52)', fontSize: 9, fontWeight: '300', textAlign: 'center', marginTop: 8}}>
                            After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable
                        </Text>
                        <Text style={{fontFamily: 'Rubik', color: 'rgba(255, 255, 255, 0.5)', fontSize: 11, fontWeight: '400', textAlign: 'center', marginTop: 8}}>
                            Terms  •  Privacy  •  Restore
                        </Text>
                    </View>
                </View>
            </View>
        )
    }


  return (
    <View style={{flex: 1}}>
        {getTopPage()}
        {getBottomPage()}
    </View>
  )
}

const styles = StyleSheet.create({
    subscriptionCard: {
        width: width - 25, 
        alignSelf: 'center', 
        marginVertical: 12, 
        height: 60, 
        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
        borderRadius: 14, 
        borderWidth: 0.5, 
        borderColor: 'rgba(255, 255, 255, 0.3)', 
        flexDirection: 'row'
    },
    defaultRadioBtn: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)', 
        borderRadius: 24, 
        height: 24, 
        width: 24, 
        alignSelf: 'center', 
        left: 16
    },
    selectedRadioBtn: {
        borderRadius: 24,
        backgroundColor: '#FFFFFF',
        height: 24,
        width: 24,
        alignSelf: 'center',
        borderWidth: 8,
        borderColor: '#28AF6E',
        left: 16
    },
    subscribeBtn: {
        flex: 0.3,
        alignSelf: 'center',
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 12, 
        width: width - 25,
        backgroundColor: '#28AF6E',
        marginTop: 5
    }
})

export default PayWall