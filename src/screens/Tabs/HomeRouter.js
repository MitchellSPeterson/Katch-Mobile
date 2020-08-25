import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTab from './HomeScreens/HomeTab';
import ActiveLoggingScreen from './HomeScreens/ActiveLoggingScreen';
import Tacklebox from './HomeScreens/Tacklebox';


const Stack = createStackNavigator();

const HomeRouter = () => {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="Active" component={ActiveLoggingScreen} />
        <Stack.Screen name="Tacklebox" component={Tacklebox} />
       
      </Stack.Navigator>
    
  );
};


/*
const Router = createStackNavigator(
    {
      HomeTab,
      
    },
    {
      initialRouteName: "HomeTab",
      headerMode: "none",
      defaultNavigationOptions: {
        gesturesEnabled: false,
      },
    }
  );


  export default createAppContainer(Router);
*/
export default HomeRouter;