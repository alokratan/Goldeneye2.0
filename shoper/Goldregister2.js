import { StyleSheet, Text,TouchableOpacity,ActivityIndicator, Pressable,Modal, TextInput,Dimensions, ToastAndroid, StatusBar, Image, View } from 'react-native'
import React, { useEffect, useCallback,useRef, useState } from 'react';
import {  Colors } from 'react-native-paper';
import { styles } from '../Stylesheets/Styleregister'
import loginimg from '../assets/icons/registerimg.jpg'
import facebook from '../assets/icons/Facebook_Logo_(2019).png.webp'
import Google from '../assets/icons/unnamed.png';
import { Entypo, Feather, MaterialIcons,FontAwesome, MaterialCommunityIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { Camera} from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userapi2 } from '../userapi';
const baseURL = 'http://geyeapp.consultit.co.in:8000'
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height
import imagee from '../assets/adaptive-icon.png'
const Goldregister = () => {
  const navigation = useNavigation();
  // const {datauri} = route.params;
  const [full_name, setFull_name] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pderror, setPderror] = useState(true);
  const [pderror2, setPderror2] = useState(true);
  const [correctphno,setCorrectphno]=useState(true);
  const [correcteml,setCorrecteml]=useState(true);
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [city, setCity] = useState("");
  const [profile_pic, setProfile_pic] = useState(null);
  const [image, setImage] = useState(null);
  const [img, setImg] = useState(true);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ismodel, setIsmodel] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const[ isFaceDetected,setIsFaceDetected ]=useState(null) 

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

        (
          async()=>{
            const {status} =await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(status==='granted');
          }
        )();
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

function opencameramodel() {
  setIsmodel(true);
}


const handleFacesDetected = ({ faces }) => {
  console.log(faces);
  if (faces.length > 0) {
      console.log('Face detected!');
      setIsFaceDetected(true)
      // Do something with the detected face
    } else {
      console.log('No face detected');
      setIsFaceDetected(false)
    }
};


function Modelfunction() {
  const [type, setType] = useState(Camera.Constants.Type.front);
 
  const cameraRef = useRef(null);
  const takePicture = async () => {
      if (cameraRef) {
          try {
             
              const data = await cameraRef.current.takePictureAsync();
              ToastAndroid.show('Great',2000)
              console.log(data);
              console.log("this is uri", data.uri)
              setImage(data.uri);
          } catch (error) {
              console.log(error);
          }
      }
  };

  const nottakepicture = ()=>{
      ToastAndroid.show('Plese Show Your Face ..',2000)
  }
  
  const savePicture = async () => {
      if (image) {
          try {
              // const asset = await MediaLibrary.createAssetAsync(image);

              
              AsyncStorage.setItem('Accessfileuri', image);
              console.log(image);
              // alert('Picture saved! 🎉');
              //  setImage(null);

              console.log('saved successfully');
              setIsmodel(false)
          } catch (error) {
              console.log(error);
          }
      }
  };

  const pickImage = async () => {
      let resultss = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1,1],
        quality: 1,
      });
      setProfile_pic(resultss)
     
      if (!resultss.canceled) {
          setImage(resultss.assets[0].uri);
        console.log(resultss.assets[0].uri)
        setProfile_pic(resultss.assets[0].uri)
      }
    };
  console.log('this is model')
  return (

      <View style={styles.container3}>
         <View style={styles.container4}>
          <View style={styles.maintopcamera}>

              <Text style={{ color: '#FFC72C', fontSize: 30, fontWeight: '900', width: '100%', textAlign: 'center' }}>GOLDENEYE</Text>

          </View>
          {!image ?
          
          
          (
              <Camera
                  style={styles.camera}
                  type={type}
                  ref={cameraRef}
                  quality={0.4}
                  
                  onFacesDetected={handleFacesDetected}
                  faceDetectorSettings={{
                  //   mode: FaceDetector.FaceDetectorMode.accurate,
                  //   detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                    runClassifications: FaceDetector.FaceDetectorClassifications.none,
                     minDetectionInterval: 1000,
                    
                    tracking: true,
                  }}
              >

                  <View>
                  
               
                  <View style={{backgroundColor:'#0008',width:'100%',justifyContent:'center',alignItems:'center' ,  height:30}}>
{isFaceDetected ? (
<Text style={{color:'#FFC72C',fontWeight:'600'}}>Face detected</Text>
) : (
<Text style={{color:'#FFC72C',fontWeight:'600'}}>No face detected</Text>
)}
</View>

<Image style={{width:height*0.08,height:height*0.08}} source={imagee}/>
               
                      {/* <TouchableOpacity style={{ paddingLeft: 10 }} >

                          <Ionicons name='camera-reverse' color={'grey'} size={40} />

                      </TouchableOpacity> */}

                  </View>
              </Camera>
          ) : (
              <Image  source={{ uri: image }} style={[styles.camera, { transform: [{ scaleX: -1 }] }]} />
          )}

          <View style={styles.controls}>
              {image ? (
                  <View
                      style={styles.touchhhmain}
                  >
                      <TouchableOpacity style={styles.tochbutton} onPress={() => setImage(null)}>
                          <Text style={styles.texttouch}>Re-take
                          </Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.tochbutton} onPress={savePicture}>
                          <Text style={styles.texttouch}>Upload
                          </Text>
                      </TouchableOpacity>



                  </View>
              ) : (
                  <View style={{width:'100%', flexDirection: 'row',justifyContent:'space-evenly',alignItems:'center' }}>

                      <TouchableOpacity style={styles.tochbutton3} onPress={pickImage}>
                     
                      {/* <TouchableOpacity style={styles.tochbutton3} onPress={() => {
                          setType(
                              type === CameraType.front ? CameraType.back : CameraType.front
                          );
                      }}> */}

                          <FontAwesome name='image' size={26} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.tochbutton2} onPress={isFaceDetected? takePicture:nottakepicture}>
                          <MaterialIcons name='photo-camera' size={60} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.tochbutton3} onPress={()=>{setIsmodel(false);}}>
                          <MaterialCommunityIcons name='close-circle-outline' size={30} />
                      </TouchableOpacity>
                  </View>

              )}
          </View>
          </View>
      </View>

  )
}



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


  

  const onChangeNameHandler = (full_name) => {
    setFull_name(full_name);
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function validateEmail(username) {
  return emailRegex.test(username);
}

  const onChangeuserNameHandler = (username) => {
    
    if (validateEmail(username)) {
      setCorrecteml(true)
  } else {
      // ToastAndroid.show('Please Enter 10 Digit Phone Number',2000);
      setCorrecteml(false)
  }
    setUsername(username);
  };

  const onChangepasswordHandler = (password) => {
    if (password.toString().length <= 7) {
      setPderror(false)
  } else {
      // ToastAndroid.show('Please Enter 10 Digit Phone Number',2000);
      setPderror(true)
  }

    setPassword(password);
  };
  const onChangepassword2Handler = (password2) => {
    if (password2===password) {
      setPderror2(true)
  } else {
      // ToastAndroid.show('Please Enter 10 Digit Phone Number',2000);
      setPderror2(false)
  } 
    setPassword2(password2);
  };

  // const onChangeEmailHandler = (email) => {
  //   setEmail(email);
  // };

  const phoneRegex = /^[0-9]{10}$/;

function validatePhoneNumber(phoneNumber) {
  return phoneRegex.test(phoneNumber);
}

  const onChangePhoneHandler = (phone_number) => {
    if (validatePhoneNumber(phone_number)) {
      setCorrectphno(true)
  } else {
      // ToastAndroid.show('Please Enter 10 Digit Phone Number',2000);
      setCorrectphno(false)
  }
    setPhone_number(phone_number);
  };
  // const onChangeCityHandler = (city) => {
  //   setCity(city);
  // };

  const anotherf = () => {
    ToastAndroid.show('Please Wait...', 2000);
    setIsLoading(true)
    onSubmitFormHandler(profile_pic)
  }

  const onSubmitFormHandler = async (uri) => {

    let formData = new FormData()
    formData.append('full_name', full_name)
     formData.append('username', username)
    // formData.append('email', email)
    formData.append('phone_number', phone_number)
    // formData.append('city', city)
    formData.append('password', password)
    formData.append('password2', password2)
    // formData.append('profile_pic', {
    //   uri,
    //   name: 'profile_pic.jpg',
    //   type: 'image/jpeg',
    // });
    if (!full_name.trim()  || !username.trim() || !phone_number.trim() || !password.trim() || !password2.trim()) {
      alert("* All fields are required");
      setIsLoading(false)
      return;
    }


    try {

      let response = await axios.post('http://13.232.193.117:8000/shopkeeper/user/register/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setIsLoading(false)
        // alert(` You have created: ${JSON.stringify(response.data)}`);
        setSuccess(true)
        AsyncStorage.setItem('AccessToken', response.data.token);
        console.log(` You have created: ${JSON.stringify(response.data)}`);
        setTimeout(() => {
          setSuccess(false)
          navigation.navigate('Setmpin')
        }, 500);
        setFull_name('');
         setUsername('');
        // setEmail('');
        setPhone_number('');
        // setCity('');

        setPassword('');
        setPassword2('');


      } else {
        throw new Error("some errors");
      }
    } catch (error) {
      setIsLoading(false)
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
      <Modal animationType="fade" visible={ismodel} transparent={true}>
                <Modelfunction />
            </Modal>
      <Modal animationType="fade" visible={isLoading} transparent={true}>
      <View style={styles.successmain}>
                    <View style={styles.sucess2}>
                    
                    <ActivityIndicator size='large' color="#FFC72C" />
                    </View>
                </View>
            </Modal>
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
        <Text style={styles.title}>Register</Text>
      </View>
      <View style={styles.midd}>
        <View style={styles.midd2}>
          <Pressable style={styles.presst}
            onPress={opencameramodel}>
            <View style={styles.camicon}>
              <Entypo name="camera" size={15} color="black" />
            </View>
            <Text style={styles.txtake}>
              {/* TAKE A SELFIE & UPLOAD */}
              SHOPKEEPER PHOTO
            </Text>
          </Pressable>
          {
            img ?
              <Image
                style={[styles.image, { resizeMode: 'contain' }]}
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
            placeholder="Enter Full Name"
            fontWeight='700'
            value={full_name}
            onChangeText={onChangeNameHandler}
          />
          <View style={{ width: '8%', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome5 name="user" size={22} color="black" />
          </View>
        </View>
        <View style={styles.inputdiv}>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            cursorColor="black"
            placeholder="Email"
            fontWeight='700'
            value={username}
            onChangeText={onChangeuserNameHandler}
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
 {/* <View style={styles.inputdiv}>
          <TextInput
            style={styles.input}
            cursorColor="black"
            keyboardType="email-address"
            placeholder="Email"
            fontWeight='700'
            value={email}
            onChangeText={onChangeEmailHandler}
          />

          <View style={{ width: '8%', justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons name="mail-outline" size={24} color="black" />
          </View>
        </View> */}


        <View style={styles.inputdiv}>
          <TextInput
            style={styles.input}
            cursorColor="black"
            keyboardType="number-pad"
            placeholder="Phone"
            fontWeight='700'
            value={phone_number}
            onChangeText={onChangePhoneHandler}
          />

          <View style={{ width: '8%', justifyContent: 'center', alignItems: 'center' }}>
            <MaterialIcons name="smartphone" size={24} color="black" />
          </View>
        </View>
        {
                                correctphno?  <Text style={{display:'none'}}>
                            </Text>:<Text style={{color:'red',paddingBottom:10,width:'84%'}}>
                            Please Enter 10 Digit Phone Number
                            </Text>
                            
                            }

        <View style={styles.inputdiv}>
          <TextInput
            style={styles.input}
            cursorColor="black"
            fontWeight='700'
            value={password}
            secureTextEntry={showpd ? true : false}
            placeholder="Enter Password"
            onChangeText={onChangepasswordHandler}
          />
          <View style={{ width: '8%', justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name={showpd ? "eye-off-outline" : "eye-outline"} onPress={showpdfun} size={24} color="black" />
          </View>
        </View>

        {
                                pderror?  <Text style={{display:'none'}}>
                            </Text>:<Text style={{color:'red',paddingBottom:10,width:'84%'}}>
                            Password must be at least 8 characters in lenght
                            </Text>
                            
                            }
        <View style={styles.inputdiv}>
          <TextInput
            style={styles.input}
            secureTextEntry={showpd2 ? true : false}
            cursorColor="black"
            fontWeight='700'
            value={password2}
            placeholder="Confirm Password"
            onChangeText={onChangepassword2Handler}
          />
          <View style={{ width: '8%', justifyContent: 'center', alignItems: 'center' }}>
            <MaterialCommunityIcons name={showpd2 ? "eye-off-outline" : "eye-outline"} onPress={showpdfun2} size={24} color="black" />
          </View></View>
          {
                                pderror2?  <Text style={{display:'none'}}>
                            </Text>:<Text style={{color:'red',paddingBottom:10,width:'84%'}}>
                            Password and Confirm Password does not match.
                            </Text>
                            
                            }

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
