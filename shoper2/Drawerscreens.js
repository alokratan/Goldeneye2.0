import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Goldlogin from '../shoper/Goldlogin';
import Goldregister from '../shoper/Goldregister';
import Goldregister2 from '../shoper/Goldregister2';
import Setmpin from '../shoper/Setmpin';
import Setmpin2 from '../shoper/Setmpin2';
import Forgotmpin from '../shoper/Forgotmpin';
import Bottomtabs from '../shoper/Bottomtabs';
import Verifynum from '../shoper/Verifynum'
import Entermpin from '../shoper/Entermpin';
import Entermpin2 from '../shoper/EnterMpin2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Forgotpassword from '../shoper/Forgotpassword';
import Goldlogin2 from '../shoper/Goldlogin2';
import Swiper5 from '../shoper/Animate';
import Updatepercent from '../shoper/Updatepercent'
import Updatehide from '../shoper/Upadatehide';
import Shoppervisit from '../shoper/Shopperevisit';
import Camerapp from '../shoper/Camera'
import { useFocusEffect } from '@react-navigation/native';
import Imagepost from '../shoper/Imagepost';
import Notification from '../shoper/Notification';
import OptionScreen from '../shoper/OptionScreen';
import Registermall from '../shoper/Registermall';

const Drawer = createDrawerNavigator();
const Drawerscreens = (props) => {



  useFocusEffect(
    useCallback(
      () => {
        // fetchdata();
        console.log('darawerscree');
        console.log('darawerscree2', props.islo);


      },
      [],
    )

  )

  // const fetchdata = () => {

  //   if (props.islog === true) {
  //     setDataToken(true);
  //     console.log('hi login', props.islog)
  //     console.log('on remove token');
  //   }
  //   else if (props.islo === true) {
  //     setDataToken(false);
  //     console.log('hi mpin', props.islo)
  //     console.log('AccessToken');
  //   }

  // }
  // useEffect(() => {

  //   // const handlegetToken= async ()=>{
  //   //   const dataToken =await AsyncStorage.getItem('AccessToken');

  //   //   setDataToken(dataToken)
  //   //    console.log(dataToken);
  //   //   }

  //   //   handlegetToken();


  // })


  return (


    <Drawer.Navigator initialRouteName={
      props.islo ?
  "RegisterHome":"LoginHome"
    } >

      <Drawer.Screen options={{ headerShown: false }}  name="LoginHome" component={Goldlogin2} />
      <Drawer.Screen options={{ headerShown: false }}  name="RegisterHome" component={Goldregister2} />
      <Drawer.Screen options={{ headerShown: false }} name="Verify" component={Verifynum} />
      {/* <Drawer.Screen options={{ headerShown: false }} name="mpin" component={Entermpin} /> */}
      <Drawer.Screen options={{ headerShown: false }} name="Setmpin" component={Setmpin} />
      <Drawer.Screen options={{ headerShown: false }} name="Resetmpin" component={Setmpin2} />
      <Drawer.Screen options={{ headerShown: false }} name="Screenoption" component={OptionScreen} />
      <Drawer.Screen options={{ headerShown: false }} name="Registermall" component={Registermall} />
      
      <Drawer.Screen options={{ headerShown: false }} name="Forgotmpin" component={Forgotmpin} />
      <Drawer.Screen options={{ headerShown: false }} name="Forgotpass" component={Forgotpassword} />
      <Drawer.Screen options={{ headerShown: false }} name="Bottomtabs" component={Bottomtabs} />
      <Drawer.Screen options={{ headerShown: false }} name="percent" component={Updatepercent} />
      <Drawer.Screen options={{ headerShown: false }} name="hide" component={Updatehide} />
      {/* <Drawer.Screen options={{ headerShown: false }} name="Goldlogin" component={Goldlogin} /> */}
      {/* <Drawer.Screen options={{ headerShown: false }} name="Goldregis" component={Goldregister} /> */}
      <Drawer.Screen options={{ headerShown: false }} name="mpin2" component={Entermpin2} />
      <Drawer.Screen options={{ headerShown: false }} name="camerapp" component={Camerapp} />
      <Drawer.Screen options={{ headerShown: false }} name="likedis2" component={Swiper5} />
      <Drawer.Screen options={{ headerShown: false }} name="homebutt2" component={Imagepost} />
      <Drawer.Screen options={{ headerShown: false }} name="shoppervisit" component={Shoppervisit} />
      <Drawer.Screen options={{ headerShown: false }} name="notification" component={Notification} />

    </Drawer.Navigator>
  )
}

export default Drawerscreens

