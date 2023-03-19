import { View, Text, ImageBackground, Dimensions, Image, StyleSheet } from 'react-native'
import React from 'react'
import { IPlants } from '../models/MainScreen'

type Props = {
    plant: IPlants
}

const PlantView = (props: Props) => {
    const {
        name,
        image,
        title
    } = props.plant

  return (
    <View style={{ marginRight: 12, marginVertical: 12, width: 160, height: 160, borderWidth: 0.5, borderColor: 'rgba(41, 187, 137, 0.18)', borderRadius: 12}}>
        <ImageBackground source={{uri: image.url}} imageStyle={{borderRadius: 12}} style={StyleSheet.absoluteFill}>
            <View style={{position: 'absolute', top: 16, left: 16, alignSelf: 'flex-start'}}>
                <Text style={{ fontFamily: 'Rubik', fontSize: 16, fontWeight: '500'}} numberOfLines={2}>
                    {title}
                </Text>
            </View>
        </ImageBackground>
    </View>
  )
}

export default PlantView