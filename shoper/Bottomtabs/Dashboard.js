import { StyleSheet,TouchableOpacity, Text,Dimensions, View } from 'react-native'
import React from 'react'
const height = Dimensions.get('window').height
import { MaterialCommunityIcons} from '@expo/vector-icons';
const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>Table View</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('notification')}>
     
     <MaterialCommunityIcons name='bell-outline' size={28} color="black" />
          
     </TouchableOpacity>
      </View>
      {/* <Text style={{width:"90%",fontWeight:'500',fontSize:16}}>Preference wise</Text>
    <View style={styles.prefwise}>
      <View style={[styles.rows,{backgroundColor:'#FFC72C', borderTopLeftRadius:8, borderTopRightRadius:8 }]}>
        <Text>Category</Text>
        <Text>No. of Shopper</Text>
         </View>
      <View style={styles.rows}>
        <Text style={{color:'white' }}>Shoes</Text>
        <Text style={{ color:'white',width:"10%", textAlign:'center' }}>3</Text>
         </View>
      <View style={styles.rows}>
        <Text  style={{color:'white' }}>Clothes</Text>
        <Text style={{color:'white' ,width:"10%", textAlign:'center' }}>5</Text>
         </View>
      <View style={styles.rows}>
        <Text  style={{color:'white' }}>Grocery</Text>
        <Text style={{color:'white' ,width:"10%", textAlign:'center' }}>10</Text>
         </View>
      <View style={[styles.rows,{borderBottomLeftRadius:8,borderBottomRightRadius:8,}]}>
        <Text style={{color:'white' }}>Food & Beverages</Text>
        <Text style={{color:'white', width:"10%", textAlign:'center' }}>20</Text>
         </View>
    </View>


      <Text style={{width:"90%",fontWeight:'500',fontSize:16}}>Frequency wise</Text>
    <View style={styles.prefwise}>
      <View style={[styles.rows,{backgroundColor:'#FFC72C', borderTopLeftRadius:8, borderTopRightRadius:8 }]}>
        <Text  style={{width:"25%"}}>Type</Text>
        <Text>My Shop</Text>
        <Text>Peer Shop</Text>
        <Text>Mall</Text>
         </View>
      <View style={styles.rows}>
        <Text style={{color:'white' ,width:"25%"}}>Frequent</Text>
        <Text style={{ color:'white',width:"10%", textAlign:'center' }}>9</Text>
        <Text style={{ color:'white',width:"10%", textAlign:'center' }}>12</Text>
        <Text style={{ color:'white',width:"10%", textAlign:'center' }}>95</Text>
         </View>
      <View style={styles.rows}>
        <Text  style={{color:'white',width:"25%" }}>Occasional</Text>
        <Text style={{color:'white' ,width:"10%", textAlign:'center' }}>10</Text>
        <Text style={{color:'white' ,width:"10%", textAlign:'center' }}>25</Text>
        <Text style={{color:'white' ,width:"10%", textAlign:'center' }}>100</Text>
         </View>
      <View style={styles.rows}>
        <Text  style={{color:'white',width:"25%" }}>Rare</Text>
        <Text style={{color:'white' ,width:"10%", textAlign:'center' }}>15</Text>
        <Text style={{color:'white' ,width:"10%", textAlign:'center' }}>24</Text>
        <Text style={{color:'white' ,width:"10%", textAlign:'center' }}>122</Text>
         </View>
      <View style={[styles.rows,{borderBottomLeftRadius:8,borderBottomRightRadius:8,}]}>
        <Text style={{color:'white',width:"25%" }}>One Time</Text>
        <Text style={{color:'white', width:"10%", textAlign:'center' }}>12</Text>
        <Text style={{color:'white', width:"10%", textAlign:'center' }}>53</Text>
        <Text style={{color:'white', width:"10%", textAlign:'center' }}>132</Text>
      </View>
    </View>

      <Text style={{width:"90%",fontWeight:'500',fontSize:16}}>Profile wise</Text>

    <View style={styles.prefwise}>
      <View style={[styles.rows,{backgroundColor:'#FFC72C', borderTopLeftRadius:8, borderTopRightRadius:8 }]}>
        <Text style={{width:"25%"}}>Gender</Text>
        <Text>Age25</Text>
        <Text>25-45</Text>
        <Text>45 above</Text>
         </View>
      <View style={styles.rows}>
        <Text style={{color:'white' ,width:"25%"}}>Male</Text>
        <Text style={{ color:'white',width:"10%", textAlign:'center' }}>100</Text>
        <Text style={{ color:'white',width:"10%", textAlign:'center' }}>65</Text>
        <Text style={{ color:'white',width:"10%", textAlign:'center' }}>21</Text>
         </View>
    
      <View style={[styles.rows,{borderBottomLeftRadius:8,borderBottomRightRadius:8,}]}>
        <Text style={{color:'white' ,width:"25%"}}>Female</Text>
        <Text style={{color:'white', width:"10%", textAlign:'center' }}>201</Text>
        <Text style={{color:'white', width:"10%", textAlign:'center' }}>76</Text>
        <Text style={{color:'white', width:"10%", textAlign:'center' }}>25</Text>
      </View>
    </View>
      <Text style={{width:"90%",fontWeight:'500',fontSize:16}}>Percentage of Customers</Text>

    <View style={styles.prefwise}>
      <View style={[styles.rows,{backgroundColor:'#FFC72C', borderTopLeftRadius:8, borderTopRightRadius:8 }]}>
        <Text>Total</Text>
        <Text>My Shop</Text>
        <Text>Competitor</Text>
        <Text>Mall</Text>
         </View>
    
      <View style={[styles.rows,{borderBottomLeftRadius:8,borderBottomRightRadius:8,}]}>
      
        <Text style={{color:'white',  textAlign:'center' }}>90%</Text>
        <Text style={{color:'white',  textAlign:'center' }}>20%</Text>
        <Text style={{color:'white',  textAlign:'center' }}>40%</Text>
        <Text style={{color:'white',  textAlign:'center' }}>30%</Text>
        
      </View>
    </View> */}
    </View>
  )
}

export default Dashboard

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
  prefwise:{
    backgroundColor:'white',
    width:'90%',
    // height:height*0.2,
    borderRadius:10,
    marginVertical:10,
    justifyContent:'space-between',
    alignItems:'center'
  },
  rows:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'black',
    width:'100%',
    height:height*0.038,
    paddingHorizontal:10,
    marginTop:1.5,
    
  }
})