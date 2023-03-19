import {View, Text, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {IQuestions} from '../models/MainScreen';
import FastImage from 'react-native-fast-image';

type Props = {
  question: IQuestions; // Question information
  onPress: (url: string) => void; // callback function to open the question answer url
};

const QuestionView = (props: Props) => {
  const {title, image_uri, uri} = props.question;

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => props.onPress(uri)}
      style={{marginRight: 10}}>
      <FastImage
        resizeMode="contain"
        source={{uri: image_uri}}
        style={{width: 240, height: 164, borderRadius: 12}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={styles.questionText}>
            {title}
          </Text>
        </View>
      </FastImage>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    questionText: {
        alignSelf: 'flex-end',
        margin: 15,
        fontFamily: 'Rubik',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,
        color: '#FFFF',
    }
})

export default QuestionView;
