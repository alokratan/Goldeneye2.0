import { StyleSheet, Text,Image, Dimensions, View, ScrollView, TouchableOpacity } from 'react-native'
import React,{useRef} from 'react'
const height = Dimensions.get('window').height
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons ,AntDesign} from '@expo/vector-icons';
import imaglogo2 from '../../assets/icons/filtergirl.png'
import coupondb from './dbcoupons.json'
function Available() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView style={{ width: '100%', height: height * 0.4 }}>
        <View style={styles.coupansmain}>
{
  coupondb.map(item=>{
    return(
      <View style={styles.coupans} key={item.id}>
            <View style={styles.coupanmaintop}>
              <Text style={{color:'white',fontWeight:'600'}}>
                {item.faceid}
              </Text>
              <Text style={{color:'white',fontSize:16 ,fontWeight:'500'}}>
                Status : <Text style={{color:'#1BE56E',fontSize:16 ,fontWeight:'500'}}>ACTIVE</Text>
              </Text>
              <AntDesign name='closecircleo' size={20} color="white" />
            </View>
            <View style={styles.coupansmainbottom}>
              <View style={styles.maindots}>
              </View>
              <View style={styles.betweendots}>
                <View style={styles.betweendotsleft}>
                  <Text style={{color:'red',fontSize:20,fontWeight:'800',paddingTop:'10%'}}>
                    {item.percent}% Off
                  </Text>
                  <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>
                  9454795
                  </Text>
                </View>
                <View style={styles.betweendotsright}>
                <Text style={{color:'black',fontSize:20,fontWeight:'800'}}>
                  {item.shopname} Shop
                  </Text>
                  <Text style={{color:'black',fontSize:14,fontWeight:'500'}}>
                  {item.shopadd}
                  </Text>
                  <Text style={{width:'100%', textAlign:'right' ,color:'black',marginBottom:-6 ,fontSize:12,fontWeight:'500'}}>
                  Valid till: {item.validtill}
                  </Text>
                </View>
              </View>
              <View style={styles.maindots}>
              </View>
            </View>
          </View>
    )
  })
}
        </View>
      </ScrollView>
    </View>
  );
}

function Used() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ScrollView style={{ width: '100%', height: height * 0.4 }}>
      <View style={styles.coupansmain}>
{
coupondb.map(item=>{
  return(
    <View style={styles.coupans} key={item.id}>
          <View style={styles.coupanmaintop}>
            <Text style={{color:'white',fontWeight:'600'}}>
            {item.faceid}
            </Text>
           
            <AntDesign name='closecircleo' size={20} color="white" />
          </View>
          <View style={[styles.coupansmainbottom,{backgroundColor:'#CEF5D6'}]}>
            <View style={styles.maindots}>
            </View>
            <View style={styles.betweendots}>
              <View style={styles.betweendotsleft}>
                <Text style={{color:'red',fontSize:20,fontWeight:'800',paddingTop:'10%'}}>
                  {item.percent}% Off
                </Text>
                <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>
              8575855
                </Text>
              </View>
              <View style={styles.betweendotsright}>
              <Text style={{color:'black',fontSize:20,fontWeight:'800'}}>
                {item.shopname} Shop
                </Text>
                <Text style={{color:'black',fontSize:14,fontWeight:'500'}}>
                {item.shopadd}
                </Text>
                <Text style={{width:'100%',fontStyle:'italic', textAlign:'right' ,color:'green',fontSize:12,fontWeight:'500'}}>
                {item.used}
                </Text>
              </View>
            </View>
            <View style={styles.maindots}>
            </View>
          </View>
        </View>
  )
})
}
      </View>
    </ScrollView>
  </View>
  );
}

function Expired() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ScrollView style={{ width: '100%', height: height * 0.4 }}>
      <View style={styles.coupansmain}>
{
coupondb.map(item=>{
  return(
    <View style={styles.coupans} key={item.id}>
          <View style={styles.coupanmaintop}>
            <Text style={{color:'white',fontWeight:'600'}}>
            {item.faceid}
            </Text>
           
            <AntDesign name='closecircleo' size={20} color="white" />
          </View>
          <View style={[styles.coupansmainbottom,{backgroundColor:'#FFE8AA'}]}>
            <View style={styles.maindots}>
            </View>
            <View style={styles.betweendots}>
              <View style={styles.betweendotsleft}>
                <Text style={{color:'red',fontSize:20,fontWeight:'800',paddingTop:'10%'}}>
                  {item.percent}% Off
                </Text>
                <Text style={{color:'black',fontSize:16,fontWeight:'600'}}>
              8575855
                </Text>
              </View>
              <View style={styles.betweendotsright}>
              <Text style={{color:'black',fontSize:20,fontWeight:'800'}}>
                {item.shopname} Shop
                </Text>
                <Text style={{color:'black',fontSize:14,fontWeight:'500'}}>
                {item.shopadd}
                </Text>
                <Text style={{width:'100%',fontStyle:'italic', textAlign:'right' ,color:'red',fontSize:12,fontWeight:'500'}}>
                {item.expired}
                </Text>
              </View>
            </View>
            <View style={styles.maindots}>
            </View>
          </View>
        </View>
  )
})
}
      </View>
    </ScrollView>
  </View>
  );
}

const Tab = createMaterialTopTabNavigator();
const Coupans = ({navigation}) => {
  const scrollViewRef =useRef(null);
  const scrolltoposition=(x,y)=>{
    scrollViewRef.current.scrollTo({x,y,animated:true});
  }
  const scrollfromposition=(x,y)=>{
    scrollViewRef.current.scrollTo({x,y,animated:true});
  }
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>Available Coupons</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('notification')}>
     
     <MaterialCommunityIcons name='bell-outline' size={28} color="black" />
          
     </TouchableOpacity>
      </View>
      <View style={styles.insidemystore}>
        <Text style={styles.txtstore}>Inside My Store Now</Text>

        <View style={styles.slider}>
        <TouchableOpacity onPress={()=>scrollfromposition(0,0)} >
          <MaterialCommunityIcons name='arrow-left-drop-circle-outline' size={24} color='black'/>
          
          </TouchableOpacity>
          
          <ScrollView 
          horizontal={true}
          ref={scrollViewRef}
          pagingEnabled
          showsHorizontalScrollIndicator={true}
          >

    

        <View style={styles.profilebox}>
        <Image source={imaglogo2} style={{ width: 30, height: 30, borderRadius: 100 }} />
        <Text style={{fontWeight:'600'}}>
            ADE235
            </Text>
        </View>
        <View style={[styles.profilebox,{backgroundColor:'#0004',borderColor:'#0004'}]}>
        <Image source={imaglogo2} style={{ width: 30, height: 30, borderRadius: 100 }} />
        <Text style={{fontWeight:'600'}}>
            ADE236
            </Text>
        </View>
        <View style={[styles.profilebox,{backgroundColor:'#0004',borderColor:'#0004'}]}>
        <Image source={imaglogo2} style={{ width: 30, height: 30, borderRadius: 100 }} />
        <Text style={{fontWeight:'600'}}>
            ADE237
            </Text>
        </View>
        <View style={[styles.profilebox,{backgroundColor:'#0004',borderColor:'#0004'}]}>
        <Image source={imaglogo2} style={{ width: 30, height: 30, borderRadius: 100 }} />
        <Text style={{fontWeight:'600'}}>
            ADE238
            </Text>
        </View>
        <View style={[styles.profilebox,{backgroundColor:'#0004',borderColor:'#0004'}]}>
        <Image source={imaglogo2} style={{ width: 30, height: 30, borderRadius: 100 }} />
        <Text style={{fontWeight:'600'}}>
            ADE239
            </Text>
        </View>
        <View style={[styles.profilebox,{backgroundColor:'#0004',borderColor:'#0004'}]}>
        <Image source={imaglogo2} style={{ width: 30, height: 30, borderRadius: 100 }} />
        <Text style={{fontWeight:'600'}}>
            ADE240
            </Text>
        </View>
              </ScrollView>
              <TouchableOpacity onPress={()=>scrolltoposition(0,300)}>
            <MaterialCommunityIcons name='arrow-right-drop-circle-outline' size={24} color='black'/>
     
              </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabnavigator}>

        <Tab.Navigator

          screenOptions={
            {
              tabBarActiveTintColor: '#F34F08',
              tabBarInactiveTintColor: 'black',
              tabBarIndicatorStyle: {
                borderBottomColor: '#F34F08',
                borderBottomWidth: 2
              },
              // tabBarIndicatorContainerStyle:{
              //   borderBottomColor:'black',
              //   borderBottomWidth:2
              // },
              tabBarLabelStyle: { fontSize: 15, fontWeight: '600' },

            }
          }

        >
          <Tab.Screen name="Available" component={Available} />
          <Tab.Screen name="Used" component={Used} />
          <Tab.Screen name="Expired" component={Expired} />
        </Tab.Navigator>

      </View>
    </View>
  )
}

export default Coupans

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    // backgroundColor:'#0003',
    width: '90%',
    height: height * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  insidemystore: {
    // backgroundColor: '#0001',
    width: '90%',
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center'

  },
  txtstore: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
    width: '100%',
    paddingLeft: 10,
    textDecorationLine: 'underline'

  },
  slider: {
    // backgroundColor: '#0001',
    width: '100%',
    height: height * 0.12,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection:'row',
    marginTop: height * 0.02,
    paddingHorizontal:10,
  },
  tabnavigator: {
    width: '90%',
    height: height * 0.6,
    // backgroundColor: 'red',
    marginTop: '5%'
  },
  coupansmain: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: height * 0.02
  },
  coupans: {
    backgroundColor: 'green',
    height: height * 0.15,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: height * 0.02
  },
  coupanmaintop: {
    backgroundColor: 'black',
    height: height * 0.04,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
  },
  coupansmainbottom: {
    backgroundColor: '#FFC72C',
    height: height * 0.11,
    width: '100%',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  maindots: {
    backgroundColor: 'white',
    width: 26,
    height: 26,
    borderRadius: 50,
    marginHorizontal: -10
  },
  betweendots: {
   
    width: '94%',
    height: '90%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  betweendotsleft:{
 
    width: '30%',
    height:'100%',
    borderRightWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'grey',
    justifyContent:'space-between',
    alignItems:'center'

  },
  betweendotsright:{
    
    width: '70%',
    height:'100%',
    justifyContent:'space-evenly',
    paddingLeft:10,
    
  },
  profilebox:{
    width:height*0.09,
    height:height*0.1,
    backgroundColor:'#FFC72C',
    borderRadius:12,
    justifyContent:'space-evenly',
    alignItems:'center',
    borderWidth:1.4,
    borderColor:'black',
    marginHorizontal:10,
   
  }
})