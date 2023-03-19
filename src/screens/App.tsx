import React, { useEffect, useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from './OnBoarding';
import WelcomeScreen from './WelcomeScreen';
import Main from './Main';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import store from './store';
import WebViewer from '../components/WebViewer';
import { RootStackParamList } from '../models/TabParamList';
import Purchase from './Purchase';

type Props = {}

const Stack = createNativeStackNavigator<RootStackParamList>()

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
        <Provider store={store}>
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
                    <Stack.Screen
                        name='WebView'
                        component={WebViewer}
                        options={{headerShown: true}}
                    />
                    <Stack.Screen
                        name='Purchase'
                        component={Purchase}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
  )
}

export default App