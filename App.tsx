import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home'
import Videos from './screens/Videos';
import Settings from './screens/Settings';
import Communities from './screens/Communities';
import Members from './screens/Members';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            } else if (route.name === 'Videos') {
              iconName = focused ? 'ios-videocam' : 'ios-videocam-outline';
            } else if (route.name === 'Members') {
              iconName = focused ? 'ios-people' : 'ios-people-outline';
            } else if (route.name === 'Communities') {
              iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Communities" component={Communities} />
        <Tab.Screen name="Videos" component={Videos} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Members" component={Members} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
