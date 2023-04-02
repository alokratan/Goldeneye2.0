import { StyleSheet, Text, Dimensions, FlatList, Pressable, View, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { RadioButton } from 'react-native-paper';
const height = Dimensions.get('window').height
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Agegroup from './Bottomtabs/dbshoppervisit.json'
import Checkbox from 'expo-checkbox';
import Slider from '@react-native-community/slider';
import { Modal } from 'react-native';


const Shoppervisit = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  const [isSelected5, setSelection5] = useState(false);
  const [gender, setGender] = useState(null);
  const [checked, setChecked] = useState();
  const  [success,setSuccess]=useState(false);
  const [select, setSelect] = useState(Agegroup);

  const  applyfn =()=>{
    
    setSuccess(true)
    setTimeout(()=>{
      setSuccess(false)
      navigation.navigate('Bottomtabs')
    },2000)
  }

  const onChangegenderHandler = () => {
    setGender('Male')
    setChecked('male');
  };

  const onChangegender2Handler = () => {
    setGender('Female')
    setChecked('female');
  };

  const agegrpfun = (item) => {

    const newitem = select.map((val) => {

      if (val.id === item.id) {
        return { ...val, selected: !val.selected }
      }
      else {
        return val;
      }
    })
    setSelect(newitem)

  }

  return (
    <View style={styles.container}>

      <Modal animationType='slide'   transparent={true} visible={success} >
      
      <View style={styles.successmain}>
      <View style={styles.sucess}>
                    <Text style={{fontSize:26,fontWeight:'900',marginVertical:20,color:'white'}}>
                        Update Successfully
                    </Text>
                     
                    </View>
                    </View>
      </Modal>

      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.navigate('Bottomtabs')}>
          <AntDesign name='left' size={20} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, width: '80%', fontWeight: '500' }}>Shopper Visit</Text>
        <MaterialCommunityIcons name='bell-outline' size={28} color="black" />
      </View>


      <View style={styles.head}>
        <Text style={{ fontSize: 18, paddingLeft: 10 }}>Gender</Text>
        <View style={styles.radiobtn}>

          <RadioButton
            color='#FFC72C'
            value="Male"

            status={checked === 'male' ? 'checked' : 'unchecked'}
            onPress={onChangegenderHandler}
          /><Text style={{ fontSize: 16, paddingRight: 20 }}>Male</Text>

          <RadioButton
            color='#FFC72C'
            value="Female"

            status={checked === 'female' ? 'checked' : 'unchecked'}
            onPress={onChangegender2Handler}
          /><Text style={{ fontSize: 16 }}>Female</Text>
        </View>
      </View>

      <View style={styles.head}>
        <Text style={{ fontSize: 18, paddingLeft: 10 }}>Age Group</Text>
        <View style={styles.radiobtn2}>

          <FlatList
            data={select}
            style={{ width: '100%' }}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return <View >
                <Pressable onPress={() => agegrpfun(item)} backgroundColor={item.selected ? "#FFC72C" : "#0002"} style={styles.touchagegroup}>
                  <Text style={styles.touchagetext}>{item.agegroup}</Text>
                </Pressable></View>

            }}
          />
          {/* <TouchableOpacity backgroundColor={item.selected ? "#FFC72C" : "#0002"} style={styles.touchagegroup} onPress={agegrpfun} >
                  <Text style={styles.touchagetext}> Children</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchagegroup} onPress={agegrpfun} >
                  <Text style={styles.touchagetext}> Teenage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchagegroup} onPress={agegrpfun} >
                  <Text style={styles.touchagetext}> Youth</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchagegroup} onPress={agegrpfun} >
                  <Text style={styles.touchagetext}> Senior</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchagegroup} onPress={agegrpfun} >
                  <Text style={styles.touchagetext}> Adult</Text>
                </TouchableOpacity> */}

        </View>
      </View>
      <View style={styles.head}>
        <Text style={{ fontSize: 18, paddingLeft: 10 }}>Maximum time Spent</Text>
        <View style={styles.radiobtn3}>

          <Slider
            style={{ width: "90%", height: 40 }}
            minimumValue={0}
            maximumValue={2}
            step={1}
            minimumTrackTintColor="black"
            thumbTintColor="black"
            maximumTrackTintColor="#000000"
          />
          <View style={styles.radiobtn6}>

<Text>1 Hour</Text>
<Text>3 Hour</Text>
<Text>7 Hour</Text>
</View>
        </View>
        
      </View>
      <View style={styles.head}>
        <Text style={{ fontSize: 18, paddingLeft: 10 }}>Coupon Status</Text>
        <View style={styles.radiobtn4}>

        <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                        color="black"
                    />
                    <Text style={styles.title3}
                        onPress={() => setSelection}
                    >Redeemed</Text>
        <Checkbox
                        value={isSelected2}
                        onValueChange={setSelection2}
                        style={styles.checkbox}
                        color="black"
                    />
                    <Text style={styles.title3}
                        onPress={() => setSelection2}
                    >Expired</Text>
        <Checkbox
                        value={isSelected3}
                        onValueChange={setSelection3}
                        style={styles.checkbox}
                        color="black"
                    />
                    <Text style={styles.title3}
                        onPress={() => setSelection3}
                    >Available</Text>
        </View>
      </View>
      <View style={styles.head}>
        <Text style={{ fontSize: 18, paddingLeft: 10 }}>Coupon Status</Text>
        <View style={styles.radiobtn4}>

        <Checkbox
                        value={isSelected4}
                        onValueChange={setSelection4}
                        style={styles.checkbox}
                        color="black"
                    />
                    <Text style={styles.title3}
                        onPress={() => setSelection4}
                    >My Store</Text>
        <Checkbox
                        value={isSelected5}
                        onValueChange={setSelection5}
                        style={styles.checkbox}
                        color="black"
                    />
                    <Text style={styles.title3}
                        onPress={() => setSelection5}
                    >Competitor</Text>

        </View>
      </View>
      <TouchableOpacity
      style={{width:'90%',justifyContent:'center',alignItems:'flex-end'}}
            >
                <Text style={styles.txt10}>
                   Clear
                </Text>

            </TouchableOpacity>
      <Pressable
      onPress={applyfn}
                
                    style={
                        ({ pressed }) => [
                            { backgroundColor: pressed ? 'rgba(0,0,0,0.6)' : 'black' }, styles.pre
                        ]
                    }
                >
                    <Text style={styles.txt9}>
                       APPLY
                    </Text>

                </Pressable>
    </View>
  )
}

export default Shoppervisit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
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
  head: {
    //  backgroundColor:'red',
    width: '100%',
    height: height * 0.13,
    borderBottomColor: '#0004',
    borderBottomWidth: 2,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginVertical: 5,
  },
  radiobtn: {
    width: '90%',
    // backgroundColor:'green',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  radiobtn2: {
    width: '100%',
    // backgroundColor:'green',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  radiobtn6: {
    width: '86%',
    // backgroundColor:'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  radiobtn4: {
    width: '100%',
    // backgroundColor:'green',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  radiobtn3: {
    width: '100%',
    //  backgroundColor:'green',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  touchagegroup: {
    borderRadius: 20,
    height: height * 0.04,
    // backgroundColor:'#FFC72C',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    margin: 7
  },
  touchagetext: {
    fontWeight: '600'
  },
  checkbox:{
    marginHorizontal:20,

  },
  pre: {
    // backgroundColor: 'black',
    width: '90%',
    height: height*0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom:height*0.1,
    marginTop:height*0.02

},
txt9: {
  color: 'white',
  fontSize: 17,
  fontWeight: '700'
},
txt10: {
  color: '#FFC72C',
  fontSize: 17,
  fontWeight: '500',
  textDecorationLine:'underline'
},
successmain:{ 
  height: '100%',
  width: '100%',
  // backgroundColor: 'rgba(0,0,0,0.2)',
  position: 'absolute',
  top: 0,
  zIndex: 2,
  borderColor: 'black',
  shadowColor: "black",
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
sucess: {
  backgroundColor: '#0B7B00',
  width: '90%',
  height: 100,
  borderWidth: 3,
  borderColor:'white',
  justifyContent:'center',
  alignItems:'center',
  borderRadius:10,
  shadowColor: "black",
  shadowOffset: {
      width: 20,
      height: 10,
  },
  shadowOpacity: 1,
  shadowRadius: 3.84,
  elevation: 8,
}

})