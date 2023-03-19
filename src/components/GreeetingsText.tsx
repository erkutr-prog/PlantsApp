import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {}

const GreeetingsText = (props: Props) => {
  return (
    <View style={{backgroundColor: '#F7F7F7', flexDirection: 'column'}}>
        <Text
          style={styles.topText}>
          {'Hi, plant lover!'}
        </Text>
        <Text
          style={styles.bottomText}>
          {'Good Afternoon! ⛅'}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    topText: {
        marginLeft: 24,
        marginTop: 12,
        fontFamily: 'Rubik',
        fontWeight: '400',
        fontSize: 16,
        color: '#13231B',
    },
    bottomText: {
        marginLeft: 24,
        marginTop: 6,
        fontFamily: 'Rubik',
        fontWeight: '500',
        fontSize: 24,
        lineHeight: 28,
        letterSpacing: 0.35,
        color: '#13231B',
    }
})

export default GreeetingsText