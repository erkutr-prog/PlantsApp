import { Alert, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Diagnose from './Diagnose';
import MyGarden from './MyGarden';
import { RootStackParamList } from '../models/TabParamList';
import CameraScreen from './Camera';
import { Camera } from 'react-native-vision-camera';
import { TabActions } from '@react-navigation/native';

type Props = {};

const Tab = createBottomTabNavigator<RootStackParamList>();

const Main = ({navigation}) => {

  const openCamera = async() => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission == 'not-determined' || cameraPermission == 'authorized') {
      const newPermission = await Camera.requestCameraPermission();
      if ( newPermission == 'authorized') {
        navigation.navigate('CameraScreen')
      }
    } else if (cameraPermission == 'denied') {
      Alert.alert('Permission Denied', 'Give access to camera to identify your plant.', [
        {
          text: 'Cancel',
          onPress: () => console.log("Cancel Pressed")
        },
        {
          text: 'Go To Settings',
          onPress: () => Linking.openSettings()
        }
      ])
    }
  }
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {height: 84}}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={25}
              style={{color: focused ? '#28AF6E' : '#BDBDBD'}}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Diagnose" 
        component={Diagnose} 
        options={{
            tabBarIcon: ({focused}) => (
                <Ionicons
                    name={focused ? 'medkit' : 'medkit-outline'}
                    size={25}
                    style={{color: focused ? '#28AF6E' : '#BDBDBD'}}
                />
            )
        }} 
      />
      <Tab.Screen 
        name="CameraScreen" 
        component={CameraScreen} 
        options={{
            tabBarIcon: ({focused}) => (
                <TouchableOpacity onPress={() => openCamera()} activeOpacity={0.7} style={{backgroundColor: '#28AF6E', height: 70, width: 70, borderRadius: 35, justifyContent: 'center', alignItems: 'center', bottom: 12, borderWidth: 4, borderColor: '#2CCC80'}}>
                    <MaterialCommunityIcons
                        name={'line-scan'}
                        size={25}
                        style={{alignSelf: 'center', color: '#FFFFFF'}}
                    />
                </TouchableOpacity>
            ),
            tabBarLabelStyle: {color: '#FFFF'}
        }} 
      />
      <Tab.Screen 
        name="MyGarden" 
        component={MyGarden} 
        options={{
            tabBarIcon: ({focused}) => (
                <Ionicons
                    name={focused ? 'leaf' : 'leaf-outline'}
                    size={25}
                    style={{color: focused ? '#28AF6E' : '#BDBDBD'}}
                />
            )
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
            tabBarIcon: ({focused}) => (
                <Ionicons
                    name={'person'}
                    size={25}
                    style={{color: focused ? '#28AF6E' : '#BDBDBD'}}
                />
            )
        }} 
      />
    </Tab.Navigator>
  );
};

export default Main;
