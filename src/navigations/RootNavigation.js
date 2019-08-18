import AuthLoading from '../screens/AuthLoading';
import Login from "../screens/Login"
import Home from "../screens/Home/Home"

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'

const AppStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: { gesturesEnabled: true, header: null }
        }
    },
    {
        defaultNavigationOptions: {
            initialRouteName: Home,
            resetOnBlur: true,
        }
    }
);

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { gesturesEnabled: true, header: null }
        }
    },
    {
        defaultNavigationOptions: {
            initialRouteName: Login,
            resetOnBlur: true,
        }
    }
);

const AppContainer = createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
        AuthLoading: AuthLoading,
        Auth: AuthStack,     
    },
    {
        initialRouteName: 'App',
        resetOnBlur: true,
    }
));

export default createAppContainer(AppContainer);