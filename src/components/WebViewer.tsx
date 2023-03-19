import React from 'react';
import RenderHtml from 'react-native-render-html';
import {SafeAreaView, ScrollView, useWindowDimensions} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../models/TabParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'WebView'>

const WebViewer = ({route, navigation}: Props) => {
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView style={{flex: 1, margin: 12}}>
      <ScrollView style={{flex: 1}}>
        <RenderHtml
          source={{uri: route.params.htmlSource}}
          enableExperimentalMarginCollapsing={true}
          contentWidth={width}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default WebViewer;
