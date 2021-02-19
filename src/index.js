import GameScreen from './gameScreen';
import HomeScreen from './homeScreen';

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer  } from 'react-navigation';


const Routes = createAppContainer(
  createStackNavigator({
    Home: HomeScreen,
    About: GameScreen,
  })
);

export default Routes;
