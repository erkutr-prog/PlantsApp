import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { IQuestions } from '../models/MainScreen'

type Props = {
    question: IQuestions
}

const QuestionView = (props: Props) => {
    const {
        id,
        title,
        subtitle,
        image_uri,
        uri,
        order
    } = props.question

  return (
    <View style={{marginRight: 10}}>
        <ImageBackground resizeMode='contain' imageStyle={{borderRadius: 12}} source={{uri: image_uri}} style={{width: 240, height: 164}}>
            <View style={{ flex: 1, flexDirection: 'row'}}>
                <Text style={{alignSelf: 'flex-end', margin: 15, fontFamily: 'Rubik', fontWeight: '400', fontSize: 15, lineHeight: 20, color: '#FFFF'}}>
                    {title}
                </Text>
            </View>
        </ImageBackground>
    </View>
  )
}

export default QuestionView