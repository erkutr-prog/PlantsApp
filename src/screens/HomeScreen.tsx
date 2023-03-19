import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from './store';
import {IPlants, IQuestions} from '../models/MainScreen';
import QuestionView from '../components/QuestionView';
import {fetchQuestions} from '../features/QuestionsSlice';
import PlantView from '../components/PlantView';
import {fetchPlants} from '../features/PlantsSlice';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../models/TabParamList';
import PremiumCard from '../components/PremiumCard';
import GreeetingsText from '../components/GreeetingsText';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const LeftImage = require('./../images/HomePageLeft.png');
const RightImage = require('./../images/HomePageRight.png');

const {width, height} = Dimensions.get('window');


const SearchBar = ({searchText, handleSearch}: {searchText: string, handleSearch:  (text: string) => void}) => {
  return (
    <View style={{flexDirection: 'row', width, backgroundColor: '#F7F7F7'}}>
      <Image style={{height: 80, width: 110}} source={LeftImage} />
      <Image
        style={styles.rightImageContainer}
        source={RightImage}
      />
      <View
        style={styles.searchBarContainer}>
        <View
          style={styles.searchIconContainer}>
          <Ionicons name="search-outline" size={20} color={'#ABABAB'} />
        </View>
        <TextInput
          style={{flex: 0.85}}
          placeholder={'Search for plants'}
          placeholderTextColor={'#AFAFAF'}
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
};


const HomeScreen = ({navigation}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const screenState = useSelector((state: RootState) => state);
  const [searchText, setSearchText] = useState<string>('');
  const [filteredPlants, setFilteredPlants] = useState<IPlants[]>([])

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchPlants());
  }, []);

  const navigateToDetailPage = (url: string) => {
    navigation.navigate('WebView', {htmlSource: url});
  };

  const handleSearch = (searchText: string) => {
    setSearchText(searchText);

    let filteredData = screenState.plantList.plants?.filter((value, index) =>  value.title.includes(searchText))
    if (filteredData !== undefined) {
      setFilteredPlants(filteredData)
    }
  }

  const getHeaderComponent = () => {
    return (
      <View style={{flexDirection: 'column'}}>
        <GreeetingsText />
        <SearchBar searchText={searchText} handleSearch={handleSearch} />
        <View
          style={styles.divider}
        />
        <PremiumCard visible={searchText === ''} />
        <View style={{width, margin: 24, display: searchText !== '' ? 'none' : 'flex'}}>
          <Text
            style={styles.headerText}>
            Get Started
          </Text>
        </View>
        <View style={{marginLeft: 24, display: searchText !== '' ? 'none' : 'flex'}}>
          <FlatList
            data={screenState.questionList.questions}
            keyExtractor={(item: IQuestions) => item.id.toString()}
            renderItem={({item}) => (
              <QuestionView
                onPress={url => navigateToDetailPage(url)}
                question={item}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={styles.container}>
      <View style={{flex: 1, alignSelf: 'center'}}>
        <FlatList
          data={searchText !== ''  ? filteredPlants : screenState.plantList.plants}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
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
  },
  rightImageContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 80,
    width: 110,
  },
  searchIconContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Rubik',
    fontSize: 15,
    lineHeight: 20,
    color: '#13231B',
    fontWeight: '500',
  },
  divider: {
    width: width,
    height: 0.5,
    backgroundColor: 'rgba(60, 60, 67, 0.1)',
  }
})

export default HomeScreen;
