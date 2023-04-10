import { StyleSheet, Text,ScrollView, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import imaglogo from '../../assets/icons/imglogo.jpg'
import imaglogo2 from '../../assets/icons/filtergirl.png'
import status1 from '../../assets/icons/bag.png'
import status2 from '../../assets/icons/medicine-bottle.png'
import status3 from '../../assets/icons/food.png'
import status4 from '../../assets/icons/pyramid.png'
import status5 from '../../assets/icons/clothes.png'
import status6 from '../../assets/icons/electronics.png'
import status7 from '../../assets/icons/lipstick.png'
import status8 from '../../assets/icons/sports-streaming.png'
import datashoppers from './dbshopper';
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
const height = Dimensions.get('window').height
const Shoppers = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>GoldenEyeAI</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('notification')}>
     
        <MaterialCommunityIcons name='bell-outline' size={28} color="black" />
             
        </TouchableOpacity>
      </View>
      <View style={styles.mystorebox}>
        <View style={styles.mystoretop}>
          <View style={{ position: 'relative', top: -6, left: -5, width: 50, height: 50, backgroundColor: 'white', borderRadius: 100 }}>
            <Image source={imaglogo} style={{ width: 50, height: 50, borderRadius: 100 }} />


          </View>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: '400', marginRight: 10 }}>My Category</Text>
        </View>

        <View style={styles.mystorebot}>
          <View style={styles.mystorethreepart}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
              My Store
            </Text>
            <View style={{ width: 30, height: 30, borderColor: 'white', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', color: '#FFC72C' }}>54</Text>
            </View>
          </View>
          <View style={styles.mystorethreepart}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
              Competitor
            </Text>
            <View style={{ width: 30, height: 30, borderColor: 'white', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>43</Text>
            </View>
          </View>
          <View style={styles.mystorethreepart}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
              Inside Facility
            </Text>
            <View style={{ width: 30, height: 30, borderColor: 'white', borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>56</Text>
            </View>

          </View>
        </View>

      </View>

      <TouchableOpacity style={styles.filterbox} onPress={()=>navigation.navigate('shoppervisit')}>
        <Image source={imaglogo2} style={{ width: 25, height: 25, borderRadius: 100 }} />
        <Text style={{ width: '80%', paddingLeft: 10, fontStyle: 'italic' }}>Filter by teenage girl</Text>
        <Ionicons name="filter-sharp" size={24} color='black' />
      </TouchableOpacity>


<ScrollView style={{width:'100%',height:height*0.3,marginBottom:height*0.08}}>

<View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>


{
  datashoppers.map((item)=>{
    return(
<View style={styles.asigndata} key={item.id}>

<View style={styles.asigndatatop}>
  <View style={styles.mainprof}>
    <Image source={imaglogo2} style={{ width: 35, height: 35, borderRadius: 100 }} />
    <Text style={{ fontWeight: '700', color: 'black' }}>{item.code}</Text>
  </View>
  <View style={styles.mainbox}>
    <View style={{paddingHorizontal:6, flexDirection:'row', justifyContent:'space-between',alignItems:'center', backgroundColor: '#FFC72C', width: '100%', height: '32%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} >

      <Text style={{ width:'58%'}}>
        Visit
      </Text>
      <Text style={ {textAlign:'center', width:'15%'} }>
        W
      </Text>
      <Text style={ {textAlign:'center',width:'15%'} }>
        M
      </Text>
      <Text style={ {textAlign:'center',width:'15%'} }>
        Y
      </Text>
    </View>
    <View style={{paddingHorizontal:6,flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor: '#FDECC0', width: '100%', height: '32%' }} >
    <Text style={{width:'58%'}}>
        Self
      </Text>
      <Text style={ {textAlign:'center',width:'15%'} }>
        {item.self.w}
      </Text>
      <Text style={ {textAlign:'center',width:'15%'} }>
      {item.self.m}
      </Text>
      <Text style={ {textAlign:'center',width:'15%'} }>
      {item.self.y}
      </Text>
    </View>
    <View style={{paddingHorizontal:6,flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor: 'black', width: '100%', height: '32%', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >
    <Text style={{ width:'58%',color:'white'}}>
        Competitor
      </Text>
      <Text style={ {textAlign:'center',color:'white',width:'15%'} }>
      {item.competitor.w}
      </Text>
      <Text style={ {textAlign:'center',color:'white',width:'15%'} }>
      {item.competitor.m}
      </Text>
      <Text style={ {textAlign:'center',color:'white',width:'15%'} }>
      {item.competitor.y}
      </Text>
    </View>
  </View>
</View>
<View style={styles.assignrow}>


  <View style={styles.heartbox}>
    <AntDesign name="heart" size={15} color="red" />
  </View>
  <Text style={{ width: '65%', paddingLeft: 5, }}>Interests</Text>
  <TouchableOpacity style={styles.pressbutasign}>
    <AntDesign name="tago" size={18} color="white" />
    <Text style={{ color: 'white', fontWeight: '400' }}>Assign</Text>
  </TouchableOpacity>

</View>
<View style={styles.assignrow2}>
  <View style={styles.heartbox2}>
  <Image source={status1} style={{ width: 20, height: 20, borderRadius: 100 }} />
  </View>
  <View style={styles.heartbox2}>
  <Image source={status2} style={{ width: 20, height: 20, borderRadius: 100 }} />
  </View>
  <View style={styles.heartbox2}>
  <Image source={status3} style={{ width: 20, height: 20, borderRadius: 100 }} />
  </View>
  <View style={styles.heartbox2}>
  <Image source={status4} style={{ width: 20, height: 20, borderRadius: 100 }} />
  </View>
  <View style={styles.heartbox2}>
  <Image source={status5} style={{ width: 20, height: 20, borderRadius: 100 }} />
  </View>
  <View style={styles.heartbox2}>
  <Image source={status6} style={{ width: 20, height: 20, borderRadius: 100 }} />
  </View>
  <View style={styles.heartbox2}>
  <Image source={status7} style={{ width: 20, height: 20, borderRadius: 100 }} />
  </View>
  <View style={styles.heartbox2}>
  <Image source={status8} style={{ width: 20, height: 20, borderRadius: 100 }} />
  </View>


</View>

</View>
    )
  })
}
</View>
</ScrollView>
      
      {/* <View style={styles.asigndata}>

        <View style={styles.asigndatatop}>
          <View style={styles.mainprof}>
            <Image source={imaglogo2} style={{ width: 35, height: 35, borderRadius: 100 }} />
            <Text style={{ fontWeight: '700', color: 'black' }}>ADE436</Text>
          </View>
          <View style={styles.mainbox}>
            <View style={{paddingHorizontal:6, flexDirection:'row', justifyContent:'space-between',alignItems:'center', backgroundColor: '#FFC72C', width: '100%', height: '32%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} >

              <Text style={{ width:'58%'}}>
                Visit
              </Text>
              <Text style={ {textAlign:'center', width:'15%'} }>
                W
              </Text>
              <Text style={ {textAlign:'center',width:'15%'} }>
                M
              </Text>
              <Text style={ {textAlign:'center',width:'15%'} }>
                Y
              </Text>
            </View>
            <View style={{paddingHorizontal:6,flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor: '#FDECC0', width: '100%', height: '32%' }} >
            <Text style={{width:'58%'}}>
                Self
              </Text>
              <Text style={ {textAlign:'center',width:'15%'} }>
                3
              </Text>
              <Text style={ {textAlign:'center',width:'15%'} }>
                11
              </Text>
              <Text style={ {textAlign:'center',width:'15%'} }>
                23
              </Text>
            </View>
            <View style={{paddingHorizontal:6,flexDirection:'row',justifyContent:'center',alignItems:'center', backgroundColor: 'black', width: '100%', height: '32%', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} >
            <Text style={{ width:'58%',color:'white'}}>
                Competitor
              </Text>
              <Text style={ {textAlign:'center',color:'white',width:'15%'} }>
                9
              </Text>
              <Text style={ {textAlign:'center',color:'white',width:'15%'} }>
                25
              </Text>
              <Text style={ {textAlign:'center',color:'white',width:'15%'} }>
                40
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.assignrow}>


          <View style={styles.heartbox}>
            <AntDesign name="heart" size={15} color="red" />
          </View>
          <Text style={{ width: '65%', paddingLeft: 5, }}>Interests</Text>
          <TouchableOpacity style={styles.pressbutasign}>
            <AntDesign name="tago" size={18} color="white" />
            <Text style={{ color: 'white', fontWeight: '400' }}>Assign</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.assignrow2}>
          <View style={styles.heartbox2}>
          <Image source={status1} style={{ width: 20, height: 20, borderRadius: 100 }} />
          </View>
          <View style={styles.heartbox2}>
          <Image source={status2} style={{ width: 20, height: 20, borderRadius: 100 }} />
          </View>
          <View style={styles.heartbox2}>
          <Image source={status3} style={{ width: 20, height: 20, borderRadius: 100 }} />
          </View>
          <View style={styles.heartbox2}>
          <Image source={status4} style={{ width: 20, height: 20, borderRadius: 100 }} />
          </View>
          <View style={styles.heartbox2}>
          <Image source={status5} style={{ width: 20, height: 20, borderRadius: 100 }} />
          </View>
          <View style={styles.heartbox2}>
          <Image source={status6} style={{ width: 20, height: 20, borderRadius: 100 }} />
          </View>
          <View style={styles.heartbox2}>
          <Image source={status7} style={{ width: 20, height: 20, borderRadius: 100 }} />
          </View>
          <View style={styles.heartbox2}>
          <Image source={status8} style={{ width: 20, height: 20, borderRadius: 100 }} />
          </View>


        </View>

      </View>
 */}

    </View>
  )
}

export default Shoppers

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
  mystorebox: {
    backgroundColor: 'black',
    width: '90%',
    height: height * 0.13,
    marginTop: height * 0.01,
    borderRadius: 10

  },
  mystoretop: {
    // backgroundColor: 'grey',
    width: '100%',
    height: height * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  mystorebot: {
    // backgroundColor: 'red',
    width: '100%',
    height: height * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  mystorethreepart: {
    // backgroundColor: 'white',
    width: '32%',
    height: height * 0.07,
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  filterbox: {
    width: '92%',
    height: height * 0.045,
    backgroundColor: '#FFC72C',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: height * 0.02,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,

  },
  asigndata: {
    width: '90%',
    height: height * 0.16,
    borderRadius: 8,
    borderColor: '#0003',
    borderWidth: 1,
    marginTop: height * 0.03,
    marginVertical:height*0.03,

  },
  asigndatatop: {
    position: 'relative',
    top: -30,
    left: 1,

    width: '100%',
    height: height * 0.1,
    // backgroundColor: '#0002',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  mainprof: {
    // backgroundColor:'red',
    width: '20%',
    height: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  mainbox: {
    // backgroundColor:'red',
    width: '40%',
    height: '100%',
    borderRadius: 10,

  },
  assignrow: {
    width: '100%',
    // backgroundColor: '#0004',
    height: height * 0.04,
    position: 'relative',
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  assignrow2: {
    width: '100%',
    // backgroundColor: '#0004',
    height: height * 0.05,
    position: 'relative',
    top: -30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 5,
  },
  heartbox: {

    borderColor: '#0003',
    borderWidth: 1.5,
    width: height * 0.025,
    height: height * 0.025,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heartbox2: {

    borderColor: '#0CC134',
    borderWidth: 1.2,
    width: height * 0.034,
    height: height * 0.034,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  pressbutasign: {
    backgroundColor: '#0CC134',
    width: '23%',
    height: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 4
  }

})