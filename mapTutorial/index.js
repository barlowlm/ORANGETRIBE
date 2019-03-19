/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native'
import App from './App'
import Splash from './components/Splash'
import Login from './components/Login'
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => Login);
AppRegistry.registerComponent(appName, () => App)

