import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function TabNavigation({ navigation }) {

    const Tab = createBottomTabNavigator();

    return (
        <GestureHandlerRootView>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={
                    ({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = focused ? 'ios-list' : 'ios-list-outline';
                            } else if (route.name === 'About') {
                                iconName = focused
                                    ? 'ios-information-circle'
                                    : 'ios-information-circle-outline';
                            }
                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                        tabBarStyle: { position: 'relative', marginBottom: 22 },
                    })}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="About" component={AboutScreen} />
            </Tab.Navigator>
        </GestureHandlerRootView >
    );
}

