import { StyleSheet, Text, Dimensions, View } from 'react-native'
import React,{useState,useRef} from 'react'
import { Picker } from '@react-native-picker/picker';
const height = Dimensions.get('window').height
import { Ionicons } from '@expo/vector-icons';
const EditProfile = () => {
  const [selectedvalue,setSelectedvalue]=useState(null)
  const pickerRef=useRef();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>Edit Profile</Text>
        <Ionicons name='ios-person-circle-outline' size={28} color="black" />
      </View>
       <View style={styles.basic}>
        <View style={{ width: '100%', marginBottom: '5%', paddingHorizontal: 10, justifyContent: 'space-between', alignItems: 'center', height: height * 0.05, flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>Basic</Text>
          <Text style={{ fontSize: 16, textDecorationLine: 'underline', color: '#FFC72C' }}>Edit</Text>
        </View>

        <View style={styles.rowbasic}>
          <Text style={{fontSize:16}}>
            Alok 
          </Text>
        </View>
        <View style={styles.rowbasic}>
          <Text style={{fontSize:16}}>
            alokratan277@gmail.com
          </Text>
        </View>
        <View style={styles.rowbasic}>
          <Text style={{fontSize:16}}>
         8745009068
          </Text>
        </View>
        <View style={styles.rowbasic}>
          <Text style={{fontSize:16}}>
          Shop No 2
          </Text>
        </View>
        <View style={styles.rowbasic}>
          <Text style={{fontSize:16}}>
          City
          </Text>
        </View>
        <View style={styles.rowbasic}>
          <Text style={{fontSize:16}}>
            MPIN
          </Text>
        </View>
        <View style={styles.rowbasic2}>
          <View style={{width:'100%', backgroundColor:'#0001',justifyContent:'center',alignItems:'flex-start', height:40}}>

         
          <Picker
          style={{  width:'100%'}}
          // ref={pickerRef}
          selectedValue={selectedvalue}
          onValueChange={(itemValue)=>setSelectedvalue(itemValue)}
          >

            <Picker.Item label="Category"/>
            <Picker.Item label="option 2" value="option2" />
            <Picker.Item label="option 3" value="option3" />
            <Picker.Item label="option 4" value="option4" />
            <Picker.Item label="option 5" value="option5" />
            <Picker.Item label="option 6" value="option6" />


          </Picker>
          </View>        
        </View>
      </View> 
    </View>
  )
}

export default EditProfile

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
  basic: {
    width: '90%',
    marginTop: height * 0.04,
    height: height * 0.6,
    // backgroundColor:'red'
    justifyContent:'flex-start',
    alignItems:'center',
  },
  rowbasic: {
    width: '94%',
    borderBottomWidth: 1,
    borderColor: '#0004',
    height: height * 0.04,
    // backgroundColor: '#0001',
    paddingLeft:10,
    justifyContent:'center',
    alignItems:'flex-start',
    marginVertical:5,
  },
  rowbasic2: {
    width: '94%',
    borderBottomWidth: 1,
    borderColor: '#0004',
    height: height * 0.04,
    // backgroundColor: '#0001',
    justifyContent:'center',
    alignItems:'flex-start',
    marginVertical:5,
  }
})