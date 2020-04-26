import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as BlogProvider} from './src/context/BlogContext';
import {Text} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation, route}) => ({
            headerTitle: props => <Text {...props}>Blogs</Text>,
          })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({navigation, route}) => ({
            headerTitle: props => <Text {...props}>Blog Post</Text>,
          })}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={({navigation, route}) => ({
            headerTitle: props => <Text {...props}>Edit Post</Text>,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
