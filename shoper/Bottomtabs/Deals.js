import { StyleSheet, Text,Pressable,TouchableOpacity, ToastAndroid, View ,Dimensions} from 'react-native'
import React,{useState} from 'react'
import { prefers } from './prefdata';
import { FlatList } from 'react-native-gesture-handler';
const height = Dimensions.get('window').height
import { MaterialCommunityIcons,Ionicons} from '@expo/vector-icons';
const Deals = ({navigation}) => {
  const [success, setSuccess] = useState(false);
  const [select, setSelect] = useState(prefers);

  function save() {
    var abcd = select.map((e) => {
        return [e.id, e.selected]

    })
    // console.log(abcd);
    // alert(abcd)
    ToastAndroid.show('Your prefernces has been saved for future', 1000);
    setSuccess(true);
}
const like = (item) => {

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
    <View style={styles.header}>
      <Text style={{ fontSize: 20, fontWeight: '500' }}>Broadcast Deals</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('notification')}>
     
     <MaterialCommunityIcons name='bell-outline' size={28} color="black" />
          
     </TouchableOpacity>
    </View>
    <View style={styles.itemcont}>
                <FlatList
                    data={select}
                    style={styles.flatlisst}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return <View style={styles.flatliss}><Pressable onPress={() => like(item)} backgroundColor={item.selected ? "#FFC72C" : "#0002"} style={[styles.itempress]}>
                            <Text style={styles.txtit}>{item.brand}</Text><Ionicons name="checkmark-circle-outline" size={item.selected ? 26 : 24} color={item.selected ? "green" : "#0004"} />
                        </Pressable></View>

                    }}
                />
            </View>
            <Pressable style={styles.pre}
                onPress={() => save()}>
                <Text style={styles.txt9}>
                    SAVE
                </Text>
            </Pressable>
    </View>
  )
}

export default Deals

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
  itemcont: {
    width: '100%',
    // backgroundColor:'#0001',
    height: height*0.68,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30



},
txt9: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700'
},
txtit:{
  fontSize: 17,
    fontWeight: '500'
},
pre: {
    backgroundColor: 'black',
    width: '90%',
    height: height*0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: '15%'
},
flatlisst: {
  width: '90%',
  height: '100%',

},
flatliss: {
  width: '100%',
  // backgroundColor:'red',
  height: height*0.06,
  marginBottom: 2,
  justifyContent: 'center',
  alignItems: 'center'
},
itempress: {
  width: '90%',
  height: height*0.05,
  //  backgroundColor: '#FFC72C',
  borderRadius: 6,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  paddingLeft: 10,
  marginBottom: 2,
  paddingHorizontal: 10
},
})