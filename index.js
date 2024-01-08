/**
 * @format
 */
import React  from 'react';
import { Button, Text } from 'react-native';
import {AppRegistry} from 'react-native';
import App from './App';
import Test from './Main'
import {name as appName} from './app.json';
import MainScreen from './Screen/WelcomeScreen';
import App1 from './Screen/welcome';
import CPNBuuton from './Component/button';
import ViewBoxesWithColorAndText from './Component/View';
import wellcome from './Component/Chialayout';
import TextCPN from './Component/Text';
import DisplayImage from './Component/Image';
import ScrollViewCPN from './Component/Scrollview';
import SwitchCPN from './Component/Switch';
import FlatlistCPN from './Component/Flatlist';
import SectionListCPN from './Component/SectionList';
import ActivityIndicatorCPN from './Component/ActivityIndicator';
import AlertCPN from './Component/Alert';
import AnimatedCPN from './Component/Animated';
import login from './Component/Login';


// // let fakedproduct=[
// //     {
// //         productNam:'iphone 13',
// //         year:2013
// //     },
// //     {
// //         productNam:'iphone 14',
// //         year:2014
// //     },
// //     {
// //         productNam:'iphone 15',
// //         year:2015
// //     }
// // ]
AppRegistry.registerComponent(appName, 
    ()=>login
    );
    // x={5} y={10}
    // person={{
    //     Name:'Vu Van Son',
    //     Age:18,
    //     Email:'vuson2002020@gmail.com'
    // }
    // }
    // products={fakedproduct}