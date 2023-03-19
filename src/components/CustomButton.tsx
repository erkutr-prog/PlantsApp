import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

type Props = {
    style: object,
    text: string,
    onPress: () => void
}

const CustomButton = (props: Props) => {
  return (
    <TouchableHighlight underlayColor={'#DDDD'} onPress={() => props.onPress()} style={props.style}>
        <Text style={{ color: '#FFFFFF',fontWeight: '700', fontSize: 15, lineHeight: 24, letterSpacing: -0.24}}>
            {props.text}
        </Text>
    </TouchableHighlight>
  )
}

export default CustomButton