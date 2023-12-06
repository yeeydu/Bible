import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native'
import Navigation, { SearchingStack } from './Navigation';
import SearchResultsScreen from './ResultSearchScreen';
import CustomSearchBar from './SearchScreen';


export default function TabNavigation({ navigation }) {

    const Tab = createBottomTabNavigator();

    {/* TabNavigation receives the stack navigation to implement all navigations screen the tab nav */ }
    return (
        <Tab.Navigator
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
                        }else if (route.name === 'Search') {
                            iconName = focused
                                ? 'ios-search'
                                : 'ios-search';
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#e3be07', // change color of active tab
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { position: 'relative', marginBottom: 0 },
                    headerShown: false,
                })}
        >
            <Tab.Screen name="Home" component={Navigation} />
            <Tab.Screen name="Search" component={SearchingStack} />
            <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        margingRight: 10,
        // alignItems: 'center',
        justifyContent: 'center',
    }
});
