import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

type Props = {};

const DayTimes = {
  morning: 'Good Morning! 🌞',
  afternoon: 'Good Afternoon! ⛅',
  evening: 'Good Evening! 🌒',
};

const GreeetingsText = (props: Props) => {
  const [greetingText, setGreetingText] = useState<string>();

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 19 || hours < 8) {
      setGreetingText(DayTimes['evening']);
    } else if (hours >= 8 && hours <= 12) {
      setGreetingText(DayTimes['morning']);
    } else {
      setGreetingText(DayTimes['afternoon']);
    }
  }, []);

  return (
    <View style={{backgroundColor: '#F7F7F7', flexDirection: 'column'}}>
      <Text style={styles.topText}>{'Hi, plant lover!'}</Text>
      <Text style={styles.bottomText}>{greetingText}</Text>
    </View>
  );
};

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
  },
});

export default GreeetingsText;
