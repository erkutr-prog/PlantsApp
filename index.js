/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/screens/App';
import WelcomeScreen from './src/screens/WelcomeScreen';
import OnBoarding from './src/screens/OnBoarding';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
