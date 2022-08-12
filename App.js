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
// import Li  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from './components/LoginScreen.js';

import store from './store/store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function RenderApp() {
  const token = useSelector((state) => state.login.token);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  if (!token || !isLoggedIn) {
    return (
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
  }
  return <Navigation />;
}

function Navigation() {
  return (
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
  );
}
export default function App() {
  return (
    <>
      <Provider store={store}>
        <RenderApp />
        <StatusBar style='auto' />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
