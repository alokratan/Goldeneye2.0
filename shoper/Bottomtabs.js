import * as React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, BlurView } from 'react-native';
import Shoppers from './Bottomtabs/Shoppers';
import Coupons from './Bottomtabs/Coupons';
import Deals from './Bottomtabs/Deals';
import Dashboard from './Bottomtabs/Dashboard';
import EditProfile from './Bottomtabs/EditProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Bottomtabs() {
  
  // useEffect(() => {

  //   const { mydata } = route.params;
  //   console.log('home', mydata);
  //   const {tokedat} =route.params;
  //   console.log('home',tokedat);

  //   // AsyncStorage.setItem('AccessTokenidd', mydata);
  //   console.log("hello,mydata", mydata);

  // }, [])


  return (

    <Tab.Navigator
      initialRouteName='Setpre'
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#FFC72C',
        tabBarInactiveBackgroundColor: 'black',

        tabBarLabelStyle: {
          marginBottom: 14,
          fontSize: 12,
          fontWeight: '700'
        },
        tabBarStyle: {
          position: 'absolute',
          height: 75
        },
        tabBarIcon: ({ focused, color }) => {

          let iconName;
          let rn = route.name;
          if (rn === 'Shoppers') {
            iconName = focused ? 'people' : 'people-outline';
          }
          else if (rn === 'Coupons') {
            iconName = focused ? 'gift' : 'gift-outline';
          }
          else if (rn === 'Dashboard') {
            iconName = focused ? 'podium' : 'podium-outline';
          }
          else if (rn === 'Deals') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          }
          else if (rn === 'EditProfile') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={24} color={color} />
        }
      })}


    /* screenOptions={{
        tabBarActiveTintColor:'black',
        tabBarInactiveTintColor:'white',
         tabBarActiveBackgroundColor:'#FFC72C',
         tabBarInactiveBackgroundColor:'black',
         tabBarStyle:{
             height:60, 
         },
        // tabBarBadge:1,
       }}*/

    >
      <Tab.Screen  name="Shoppers"
        options={{
          title: 'Shoppers',
          headerShown:false

        }}
        component={Shoppers} />

      <Tab.Screen name="Coupons" options={{

        title: 'Coupons',
        headerShown:false
      }} component={Coupons} />


<Tab.Screen name="Deals" options={{
        title: 'Deals',
        headerShown:false
        // tabBarBadge:10,
      }} component={Deals} />

      <Tab.Screen name="Dashboard" options={{
        title: 'Dashboard',
        headerShown:false
      }} component={Dashboard}


      />
    
      <Tab.Screen name="EditProfile" options={{
        title: 'Edit Profile',
        headerShown:false
        // tabBarBadge:10,
      }} component={EditProfile} />

    </Tab.Navigator>

  );
}

export default Bottomtabs;