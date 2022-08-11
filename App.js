import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import MusicPlayerScreen from './screens/MusicPlayerScreen';
// import LibraryScreen from './screens/LibraryScreen';

import store from './store/store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name='Home'
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <Ionicons name='home' color={color} size={30} />
                ),
              }}
            />
            <Tab.Screen
              name='Search'
              component={SearchScreen}
              options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color }) => (
                  <FontAwesome5 name='search' size={24} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name='MusicPlayerScreen'
              component={MusicPlayerScreen}
              options={{
                tabBarLabel: 'Play',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name='music-clef-treble'
                    size={24}
                    color='black'
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style='auto' />
      </Provider>
    </>
  );
}

/* <NavigationContainer>
<Stack.Navigator initialRouteName='Login'>
  <Stack.Screen name='Login' component={LoginScreen} />
  <Stack.Screen name='Home' component={HomeScreen} />
  <Stack.Screen name='Search' component={SearchScreen} />
</Stack.Navigator>
</NavigationContainer> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
