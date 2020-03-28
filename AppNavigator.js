import { createStackNavigator } from 'react-navigation';
import Home from './app/Home';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
});

export default AppNavigator;