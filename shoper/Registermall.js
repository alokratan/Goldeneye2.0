import { StyleSheet, Text, Pressable, TextInput, ToastAndroid,Dimensions, StatusBar, Image, View } from 'react-native'
import React, { useEffect, useCallback, useState } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../Stylesheets/Styleregister'
import loginimg from '../assets/icons/shopicon.png'
import facebook from '../assets/icons/Facebook_Logo_(2019).png.webp'
import Google from '../assets/icons/unnamed.png';
import { Entypo, Feather,Ionicons,   MaterialIcons, MaterialCommunityIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userapi2 } from '../userapi';

const baseURL = 'http://geyeapp.consultit.co.in:8000'
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
const Goldregister = () => {
  const navigation = useNavigation();
  // const {datauri} = route.params;
  const [mall_name, setMall_name] = useState("");
  const [shop_name, setShop_name] = useState("");
  const [shop_address, setShop_address] = useState("");
  const [shop_email,setShop_email]=useState("");
  const [correctphno,setCorrectphno]=useState(true);
  const [correcteml,setCorrecteml]=useState(true);
//   const [password2, setPassword2] = useState("");
  const [camera_id, setCamera_id] = useState("");
  const [profile_pic, setProfile_pic] = useState(null);
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(true);
  const [success, setSuccess] = useState(false);


  const categories = ['Clothes', 'Shoes', 'Cosmatics','Electronics'];
const subcategories = {
  'Clothes': ['Shirt', 'Trousers', 'Jacket','Jeans'],
  'Shoes': ['Sports', 'Sandal', 'Boot'],
  'Cosmatics': ['Makeup', 'Skincare', 'Haircare'],
  'Electronics': ['Mobiles', 'Monitor', 'TV','Soundbar','Fan','AC']
};

  const [category, setCategory] = useState([categories[0]]);
const [sub_category, setSub_category] = useState(subcategories[categories[0]][0]);


  // const startLoading = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // };
  // console.log("register scrren0",datauri)

  useFocusEffect(
    useCallback(
      () => {
        // AsyncStorage.removeItem('Accessfileuri')
        // pickimage2
        AsyncStorage.getItem('Accessfileuri').then(value => {
          if (value == null) {
            setImg(true)
          }
          else {
            console.log('this console', value);
            setImage(value);
            setImg(false)
            setProfile_pic(value)
          }
        })
      },
    [],
  )
)




categories.map((a)=>{
console.log(a)
})


subcategories[category].map((sub_category) => (
  console.log(sub_category)
))

  console.log("this is file info", image)

  const pickImage = async () => {
    let resultss = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    setProfile_pic(resultss)

    if (!resultss.canceled) {
      setImage(resultss.assets[0].uri);
      console.log(resultss.assets[0].uri)
      setImg(false)
      setProfile_pic(resultss.assets[0].uri)
    }
  };



  const onChangemall_nameHandler = (mall_name) => {
    setMall_name(mall_name);
  };
  const onChangeshop_nameHandler = (shop_name) => {
    setShop_name(shop_name);
  };
  const onChangeshop_addressHandler = (shop_address) => {
    setShop_address(shop_address);
  };
  const onChangecamera_idHandler = (camera_id) => {
    setCamera_id(camera_id);
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function validateEmail(shop_email) {
  return emailRegex.test(shop_email);
}

  const onChangeshop_emailHandler = (shop_email) => {
    if (validateEmail(shop_email)) {
      setCorrecteml(true)
  } else {
      // ToastAndroid.show('Please Enter 10 Digit Phone Number',2000);
      setCorrecteml(false)
  }
    setShop_email(shop_email);
  };
//   const onChangePhoneHandler = (phone_number) => {
//     if (phone_number.toString().length == 10) {
//       setCorrectphno(true)
//   } else {
//       // ToastAndroid.show('Please Enter 10 Digit Phone Number',2000);
//       setCorrectphno(false)
//   }
//     setPhone_number(phone_number);
//   };
  const onChangecategoryHandler = (category) => {
    // setcategory(category);
    setCategory(category)
    console.log("hello",category)
  };
  const onChangesub_categoryHandler = (sub_category) => {
    setSub_category(sub_category);
    console.log("hello",sub_category)
  };

  const anotherf = () => {
    onSubmitFormHandler(profile_pic)
  }

  const onSubmitFormHandler = async (uri) => {

    let formData = new FormData()
    formData.append('mall_name', mall_name)
     formData.append('shop_name', shop_name)
    formData.append('shop_email', shop_email)
    formData.append('shop_address', shop_address)
     formData.append('camera_id', camera_id)
     formData.append('category', category)
     formData.append('sub_category', sub_category)
    
    // formData.append('profile_pic', {
    //   uri,
    //   name: 'profile_pic.jpg',
    //   type: 'image/jpeg',
    // });
    if (!mall_name.trim() || !shop_name.trim()||  !shop_address.trim() || !camera_id.trim()  || !shop_email.trim() || !category.trim() || !sub_category.trim()) {
      alert("* All fields are required");
      return;
    }


    try {

      let response = await axios.post('http://13.232.193.117:8000/shopkeeper/malls/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {

        // alert(` You have created: ${JSON.stringify(response.data)}`);
        setSuccess(true)
        AsyncStorage.setItem('AccessToken', response.data.token);
        console.log(` You have created: ${JSON.stringify(response.data)}`);
        setTimeout(() => {
          setSuccess(false)
          navigation.navigate('Setmpin')
        }, 500);
        setMall_name('');
        setShop_name('');
        setShop_address('');
         setCamera_id('');
         setShop_email('');
        setCategory('');
         setSub_category('');

        


      } else {
        throw new Error("some errors");
      }
    } catch (error) {
      console.log(error)
      console.log(error)
    }
  };

  const [showpd, setShowpd] = useState(true)
  const [showpd2, setShowpd2] = useState(true)
  const [checked, setChecked] = useState();

  function showpdfun() {
    showpd ?
      setShowpd(false) : setShowpd(true)
  }
  function showpdfun2() {
    showpd2 ?
      setShowpd2(false) : setShowpd2(true)
  }
  function loginfun() {
    ToastAndroid.show('Please Wait...', 1000);
    setTimeout(() => {
      navigation.navigate('LoginHome')
    }, 1000);
  }
  return (
    <View style={styles.container}>
      {
        success ? 
          <View style={styles.successmain}>
          <View style={styles.sucess}>
          <Text style={{ fontSize: 26, fontWeight: '900', marginVertical: 20, color: 'white' }}>
          Register Successfully
          </Text>
          </View>
          </View>:
          <View>
          </View>
      }
      <View style={styles.top}>
        <Text style={styles.title}>Register Your Shop</Text>
      </View>
      <View style={styles.midd}>
        <View style={styles.midd2}>
          <Pressable style={styles.presst}
            onPress={() => navigation.navigate('Camerapp')}>
            <View style={styles.camicon}>
              <Entypo name="camera" size={15} color="black" />
            </View>
            <Text style={styles.txtake}>
              {/* TAKE A SELFIE & UPLOAD */}
              UPLOAD SHOP PHOTO
            </Text>
          </Pressable>
          {
            img ?
              <Image
                style={{  width: width*0.42,height: width*0.42}}
                source={loginimg}

              /> : image &&
              <View style={{ backgroundColor: 'black', borderColor: '#FFC72C', borderWidth: 5, borderRadius: 100, width: 170, height: 170, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  style={[styles.image,{width: 150, height: 150, borderRadius: 100, margin: 10 }]}
                  source={{ uri: image }}
                />
              </View>
          }
        </View>

        <View style={styles.inputdiv}>
          <TextInput
            style={styles.input}
            cursorColor="black"
            placeholder="Facility Name"
            fontWeight='700'
            value={mall_name}
            onChangeText={onChangemall_nameHandler}
          />
          <View style={{ width: '8%', justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons name="store-mall-directory" size={24} color="black" />
          </View>
        </View>
        <View style={styles.inputdiv}>
          <TextInput
            style={styles.input}
            cursorColor="black"
            placeholder="Shop Name"
            fontWeight='700'
            value={shop_name}
            onChangeText={onChangeshop_nameHandler}
          />
          <View style={{ width: '8%', justifyContent: 'center', alignItems: 'center' }}>
          <MaterialIcons name="format-color-text" size={24} color="black" />
          </View>
        </View>
 

        <View style={styles.inputdiv}>
          <TextInput
            style={styles.input}
            cursorColor="black"
            placeholder="Shop Address"
            fontWeight='700'
            value={shop_address}
            onChangeText={onChangeshop_addressHandler}
          />

          <View style={{ width: '8%', justifyContent: 'center', alignItems: 'center' }}>
          <MaterialCommunityIcons name="store-marker" size={24} color="black" />
          </View>
        </View>
        <View style={styles.inputdiv}>
          <TextInput
            style={styles.input}
            cursorColor="black"
            keyboardType="email-address"
            placeholder="Shop Email"
            fontWeight='700'
            value={shop_email}
            onChangeText={onChangeshop_emailHandler}
          />

          <View style={{ width: '8%', justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons name="mail-outline" size={24} color="black" />
          </View>
        </View>
        {
                                correcteml?  <Text style={{display:'none'}}>
                            </Text>:<Text style={{color:'red',paddingBottom:10,width:'84%'}}>
                            Please Enter valid Email address.
                            </Text>
                            
                            }

        {/* {
                                correctphno?  <Text style={{display:'none'}}>
                            </Text>:<Text style={{color:'red',paddingBottom:10,width:'84%'}}>
                            Please Enter 10 Digit Phone Number
                            </Text>
                            
                            } */}

        <View style={styles.inputdiv}>
          <TextInput
            style={styles.input}
            cursorColor="black"
            fontWeight='700'
            value={camera_id}
            // secureTextEntry={showpd ? true : false}
            placeholder="Golden Eye Code"
            onChangeText={onChangecamera_idHandler}
          />
          <View style={{ width: '8%', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome5 name="laptop-code" onPress={showpdfun} size={22} color="black" />
          </View>
        </View>

        <View style={styles.inputdiv}>
          {/* <TextInput
            style={styles.input}
            // secureTextEntry={showpd2 ? true : false}
            cursorColor="black"
            fontWeight='700'
            value={category}
            placeholder="Shop Category"
            onChangeText={onChangecategoryHandler}
          /> */}
          <Picker
             style={{width:'100%'}}
  selectedValue={category}
  onValueChange={onChangecategoryHandler}
>
  {categories.map((category) => (
    <Picker.Item key={category} label={category} value={category} />
  ))}
</Picker>


</View>
       
        <View style={styles.inputdiv}>
          {/* <TextInput
            style={styles.input}
            // secureTextEntry={showpd2 ? true : false}
            cursorColor="black"
            fontWeight='700'
            value={sub_category}
            placeholder="Shop Sub Category"
            onChangeText={onChangesub_categoryHandler}
          /> */}

<Picker
   style={{  width:'100%'}}
  selectedValue={sub_category}
  onValueChange={onChangesub_categoryHandler}
>
  {subcategories[category].map((sub_category) => (
    <Picker.Item key={sub_category} label={sub_category} value={sub_category} />
  ))}
</Picker>
        </View>

      </View>

      <View style={styles.buttonn}>
        <Pressable style={styles.pre}
          onPress={anotherf}>
          <Text style={styles.txt9}>
            SUBMIT
          </Text>

        </Pressable>
        <View style={styles.buttonn2}>
          <Text style={styles.texttimer}>
            Back to
          </Text>
          <Pressable style={styles.txt2}
            onPress={loginfun}>
            <Text style={styles.ttxt3}>
              LOGIN
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Goldregister