import { StyleSheet,StatusBar,ToastAndroid,Dimensions,Image,TouchableOpacity, Text, View } from 'react-native'
import loginimg from '../assets/icons/shopicon.png'
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const OptionScreen = ({navigation}) => {
     const shopregbtn=()=>{
        ToastAndroid.show('Please Wait', 1000)
        navigation.navigate('Registermall')
     }
     const skipbtn=()=>{
        ToastAndroid.show('Please Wait', 1000)
        navigation.navigate('Bottomtabs')
     }
  return (
    <View style={styles.container}>
             <StatusBar
            animated={true}
            backgroundColor='white'
            showHideTransition={'slide'}
        //   hidden
        barStyle={'dark-content'}


            />
<View style={styles.header}>
<TouchableOpacity onPress={skipbtn}>
     {/* <MaterialCommunityIcons name='bell-outline' size={28} color="black" /> */}
     
        <Text style={{ fontSize: 20, fontWeight: '600' }}>GoldenEye Shopkeeper</Text>
        </TouchableOpacity>
      </View>
  
    <View style={styles.body}>
    <Image
                style={{marginBottom:height*0.03, width: width*0.40,height: width*0.40}}
                source={loginimg}

              />
        <TouchableOpacity style={styles.registertochable} onPress={shopregbtn}>
            <Text style={{fontSize:width*0.05,fontWeight:'700'}}>Register Your Shop Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={skipbtn} style={[styles.registertochable,{backgroundColor:'white',marginVertical:10}]}>
            <Text style={{fontSize:width*0.05,fontWeight:'700',color:'#FFC72C'}}>Skip For Now</Text>
        </TouchableOpacity>
    </View>
    </View>
  )
}

export default OptionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      header: {
        //  backgroundColor:'#0003',
        width: '90%',
        height: height * 0.1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
        
    
      },
      body:{
        height:height*0.8,
        // backgroundColor:'red',
        width:width,
        justifyContent:'center',
        alignItems:'center',
      },
    registertochable:{
        width:width*0.7,
        backgroundColor:'#FFC72C',
        height:height*0.06,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#FFC72C',
        borderWidth:2,
        borderRadius:5,
        marginVertical:height*0.01,

    }
})