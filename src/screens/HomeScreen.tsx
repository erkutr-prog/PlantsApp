import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import React, { useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import {RootState, AppDispatch} from './store';
import { IPlants, IQuestions } from '../models/MainScreen';
import QuestionView from '../components/QuestionView';
import { fetchQuestions } from '../features/QuestionsSlice';
import PlantView from '../components/PlantView';
import { fetchPlants } from '../features/PlantsSlice';

type Props = {};

const LeftImage = require('./../images/HomePageLeft.png');
const RightImage = require('./../images/HomePageRight.png');
const mailIcon = require('./../images/MailIcon.png');

const {width, height} = Dimensions.get('window');

const HomeScreen = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const screenState = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchPlants())
  }, [])

  const getHeaderComponent = () => {
    return (
      <View style={{flexDirection: 'column'}}>
        <View style={{backgroundColor: '#F7F7F7', flexDirection: 'column'}}>
          <Text
            style={{
              marginLeft: 24,
              marginTop: 12,
              fontFamily: 'Rubik',
              fontWeight: '400',
              fontSize: 16,
              color: '#13231B',
            }}>
            {'Hi, plant lover!'}
          </Text>
          <Text
            style={{
              marginLeft: 24,
              marginTop: 6,
              fontFamily: 'Rubik',
              fontWeight: '500',
              fontSize: 24,
              lineHeight: 28,
              letterSpacing: 0.35,
              color: '#13231B',
            }}>
            {'Good Afternoon! ⛅'}
          </Text>
        </View>
        <View style={{flexDirection: 'row', width, backgroundColor: '#F7F7F7'}}>
          <Image style={{height: 80, width: 110}} source={LeftImage} />
          <Image
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              height: 80,
              width: 110,
            }}
            source={RightImage}
          />
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              width: width - 50,
              alignSelf: 'center',
              left: 24,
              right: 24,
              height: 45,
              flexDirection: 'row',
              backgroundColor: 'rgba(255, 255, 255, 0.88)',
              borderColor: 'rgba(60, 60, 67, 0.25)',
              borderWidth: 0.2,
              borderRadius: 12,
            }}>
            <View
              style={{
                flex: 0.15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons name="search-outline" size={20} color={'#ABABAB'} />
            </View>
            <TextInput
              style={{flex: 0.85}}
              placeholder={'Search for plants'}
              placeholderTextColor={'#AFAFAF'}
            />
          </View>
        </View>
        <View
          style={{
            width: width,
            height: 0.5,
            backgroundColor: 'rgba(60, 60, 67, 0.1)',
          }}
        />
        <View
          style={{
            marginTop: 24,
            flexDirection: 'row',
            width: width - 34,
            backgroundColor: '#24201A',
            borderRadius: 12,
            height: 64,
            alignSelf: 'center',
          }}>
          <View
            style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={mailIcon}
              style={{height: 40, width: 40, alignSelf: 'center'}}
            />
          </View>
          <View
            style={{
              flex: 0.6,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 16,
                lineHeight: 21,
                color: '#FFDE9C',
                alignSelf: 'flex-start',
              }}>
              <Text style={{fontWeight: '700'}}>FREE</Text> Premium Available
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '400',
                color: '#FFDE9C',
                alignSelf: 'flex-start',
              }}>
              Tap to upgrade your account!
            </Text>
          </View>
          <View
            style={{flex: 0.2, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color={'#D0B070'}
            />
          </View>
        </View>
        <View style={{width, margin: 24}}>
          <Text
            style={{
              fontFamily: 'Rubik',
              fontSize: 15,
              lineHeight: 20,
              color: '#13231B',
              fontWeight: '500',
            }}>
            Get Started
          </Text>
        </View>
        <View style={{marginLeft: 24}}>
            <FlatList
              data={screenState.questionList.questions}
              keyExtractor={(item: IQuestions) => item.id.toString()}
              renderItem={({item}) => <QuestionView question={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FBFAFA', justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 1, alignSelf: 'center'}}>
        <FlatList
          data={screenState.plantList.plants}
          ListHeaderComponent={getHeaderComponent()}
          numColumns={2}
          keyExtractor={(item: IPlants) => item.id.toString()}
          renderItem={({item}) => <PlantView plant={item} />}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{marginLeft: 24}}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
