import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTab from './HomeScreens/HomeTab';



const Stack = createStackNavigator();

const HomeRouter = () => {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={HomeTab} />
       
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