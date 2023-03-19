import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from './OnBoarding';
import WelcomeScreen from './WelcomeScreen';
import Main from './Main';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {}

const Stack = createNativeStackNavigator()

type AppLaunch = Boolean | null

const App = (props: Props) => {
    const [isAppFirstLaunched, setAppFirstLaunched] = useState<AppLaunch>(null);

    useEffect(() => {
        const checkIfFirstLaunch = async() => {
            const app = await AsyncStorage.getItem('isAppFirstLaunched');
            if (app == null) {
                setAppFirstLaunched(true);
                AsyncStorage.setItem('isAppFirstLaunched', 'false');
            } else {
                setAppFirstLaunched(false)
            }
        }
        checkIfFirstLaunch()
    }, [])

  return (
    isAppFirstLaunched !== null && (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{headerShown: false}}>
            {isAppFirstLaunched && (
                <>
                <Stack.Screen
                    name='WelcomeScreen'
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name='OnBoarding'
                    component={OnBoarding}
                />
                </>
            )}
            <Stack.Screen
                name='MainScreen'
                component={Main}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
  )
}

export default App