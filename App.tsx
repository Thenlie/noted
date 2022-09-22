import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackParams';

import HomeScreen from './screens/Home';
import TaskListScreen from './screens/TaksLists';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#444444',
                },
                headerTintColor: '#ffffff',
                headerLargeTitle: true,
                headerTransparent: true,
            }}    
        >
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ title: 'Noted' }}     
            />
            <Stack.Screen 
                name="TaskLists" 
                component={TaskListScreen} 
                options={{ title: 'Tasks' }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
