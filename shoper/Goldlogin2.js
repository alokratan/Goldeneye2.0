import { StyleSheet, StatusBar, Modal, Text, Pressable, ScrollView, TextInput, ToastAndroid, Image, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import Checkbox from 'expo-checkbox';
import loginimg from '../assets/icons/loginimg.jpg'
import facebook from '../assets/icons/Facebook_Logo_(2019).png.webp'
import Google from '../assets/icons/unnamed.png'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { userapi } from '../userapi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../Stylesheets/Stylelogin';
import axios from 'axios';
const Goldlogin = ({ navigation }) => {

    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [showpd, setShowpd] = useState(true)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phonval, setPhoneval] = useState(true);
    const [passval, setPassval] = useState(true);
    const [termscon, setTermscon] = useState(false);
    const [success, setSuccess] = useState(false);

    const alertusername = (text) => {
        setUsername(text)
        if (text == '') {
            setPhoneval(false)

        }
        else {
            setPhoneval(true)
        }
    }
    const alertpassword = (text) => {
        setPassword(text)
        if (text.toString().length <= 7) {
            setPassval(false)
        }

        else {
            setPassval(true)
            
        }

    }

    function termfn() {
        setTermscon(false)
    }
    function termfnd() {
        setSelection2(false)
        setTermscon(false)
    }
    function agree() {
        if (isSelected2) {
            setSelection2(false)
        }
        else {
            setSelection2(true);
            setTermscon(true)
        }
    }

    function showpdfun() {
        showpd ?
            setShowpd(false) : setShowpd(true)
    }


    function loginfun() {

        if (username == '') {
            setPhoneval(false)
            ToastAndroid.show('* username may not be blank', 1000)
        }
        else if (password == '' && password.toString().length <= 7) {
            setPassval(false)
            ToastAndroid.show('Password length must be 8 character', 1000)
        }
        else {
            if (isSelected2) {
                userapi({
                    username: username,
                    password: password,
                })
                    .then(result => {
                        const userid = result.data.user_id


                        AsyncStorage.setItem("Accessuserid", JSON.stringify(userid));
                        // console.log(result);
                        console.log(result.data.token)
                        console.log(result.data)
                        console.log(result.data.user_id)


                        if (result.status === 200) {
                            setPhoneval(true)
                            setPassval(true)
                            AsyncStorage.setItem('AccessToken', result.data.token);
                            console.log(result.data.token);
                            ToastAndroid.show('Login Successfully...', 1000)
                            setSuccess(true)
                            setTimeout(() => {
                                setSuccess(false)
                                setUsername('');
                                setPassword('');
                                navigation.navigate('mpin2')


                            }, 1000);
                        }
                        else if (result.status === 400) {
                            console.log('error is 400 or invalid creadentials')
                            ToastAndroid.show('Please check the login credentials!!!', 1000)

                        }


                        else if (!result.status == 200) {

                            setPhoneval(false)
                            setPassval(false)

                            ToastAndroid.show('Invalid Credentials', 1000)

                        }



                    }).catch(err => {
                        ToastAndroid.show('Please check the login credentials!!!', 1000)
                        console.log(err);


                        // ToastAndroid.show('Make Sure Your Server Is Live', 1000)
                        if (err.status === 400) {
                            console.log(err.status);
                            console.log('error is 400 or invalid creadentials')
                            ToastAndroid.show('Please check the login credentials!!!', 1000)

                        }



                    })

            }
            else {
                ToastAndroid.show('Please accept terms & conditions', 1000)
            }
        }



        // .then(response => {
        // //   console.log(response.data.full_name);
        // //   const fullname=response.data.full_name;
        // //   setFull_name(fullname);

        // //   const emails=response.data.email;
        // //   setEmail(emails);

        // //   const usernames=response.data.username;
        // //   setUsername(usernames);

        // })
        // .catch(error => {
        //   console.log(error);
        // })





    }


    function regisfun() {
        ToastAndroid.show('Please Wait...', 1000);
        setTimeout(() => {
            navigation.navigate('Verify')
        }, 1000);
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
            {
                termscon ?
                    <View style={styles.termsdivmain}>

                        <View style={styles.termsdiv}>

                            <View style={{ width: '100%', backgroundColor: '#FFC72C', height: 60, borderBottomWidth: 2 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700', paddingLeft: 20, paddingTop: 20, }}>
                                    Terms & Conditions
                                </Text>

                            </View>
                            <View style={{ width: '100%', height: 370, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                                <ScrollView showsVerticalScrollIndicator={false} style={{ width: '90%' }}>

                                    <Text style={{ fontSize: 18, color: '#0009', fontWeight: '400' }}>
                                    GoldenEyeAI Hardware Camera and Software Application is developed by ConsultIT Technologies Pvt Ltd.

GoldenEyeAI enables shopkeepers where the Hardware Camera is installed to detect faces of Shoppers coming in their shop and suggest them discounts (Spot Discounts) based on their previous visit and shopping analytics in their self-shop and nearby shops in the same real estate or nearby.

To ensure that the Shoppers can be communicated via the GoldenEyeAI app they are encouraged to download the app and upload a selfie which will be used for face detection and matching and further the linked mobile app will be used for sending discount notifications.

{'\n'}
{'\n'}

1.GoldenEyeAI App and the mobile Camera and microphone accesses is used to allow users of the app to record using the camera sensor and microphone data photos, which is used for the purpose of taking photos and recording videos, to fulfil its purpose as a camera.
{'\n\n'}
2.Microphone permission is also used for the optional "Audio control" options.
{'\n\n'}
3.GoldenEyeAI Camera app requires permission at least for Android 9 and earlier to "access photos, media and files on your devices" (storage permission), as this permission is required for Android to save resultant files such as photos and videos to your device.
{'\n\n'}
4.Location permission is requested in order to deliver the optional geotagging features (for photos and videos, including stamp and subtitles options). When relevant option(s) are enabled, your device location will be stored in photo/video/subtitle files.
{'\n\n'}
5.Data will not be shared with any of the entities including shoppers or shop keepers and will be used only at the server side for face matching
{'\n\n'}
6.Data is encrypted at rest and in motion using military grade algorithms.
{'\n\n'}
7.At no point face data will be displayed anywhere in the app or any other camera point.
{'\n\n'}
8.Data handling procedures, data retention and deletion policies: GoldenEyeAI Camera does not transmit personal or sensitive information to third parties except shopping patterns.
{'\n\n'}
Since GoldenEyeAI Camera also uses operating system APIs, you should review relevant privacy policies such as for your device, manufacturer, operating system and/or Google accounts. For example:
{'\n\n'}
For versions 1.49.2 or earlier: the optional voice control option used the Android speech recognition service. When enabled, audio data is likely to be sent to remote servers by Android to perform speech recognition. This is subject to the Data Processing Addendum for Products where Google is a Data Processor, located at https://privacy.google.com/businesses/gdprprocessorterms/ , as updated from time to time. This option is no longer available in version 1.50 onwards.
{'\n\n'}

For versions 1.49.2 or earlier: The "addresses" option for photo stamp or video subtitles used the Android Geocoder API. When this option is enabled, in order to deliver this functionality the API transmits your device location data across the Internet to a third party (which may depend on what "backend services" are installed on your device). This option is no longer available in version 1.50 onwards
.
{'\n\n'}
Apps/services such as cloud services on your device may auto-upload photos and videos that are saved on your device.

{'\n\n'}
If you have inquiries about the privacy policy, please contact me by email at ravi.r@consultit.co.in.
{'\n\n'}
Although GoldenEyeAI Camera app is ad-free: Third party vendors, including Google, may use means to get feedback about the app etc.        </Text>

                                </ScrollView>
                            </View>
                            <View style={{ justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center', height: 60, backgroundColor: '#fff' }}>
                                <Pressable onPress={termfnd} style={{ backgroundColor: '#0002', borderRadius: 20, width: 100, height: 36, justifyContent: 'center', alignItems: 'center', marginHorizontal: 12 }}>
                                    <Text style={{ fontSize: 16, fontWeight: '900' }}>
                                        Disagree
                                    </Text>
                                </Pressable>
                                <Pressable onPress={termfn} style={{ backgroundColor: '#FFC72C', borderRadius: 20, width: 100, height: 36, justifyContent: 'center', alignItems: 'center', marginRight: 16 }}>
                                    <Text style={{ fontSize: 16, fontWeight: '900' }}>
                                        Agree
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    : <View></View>
            }

            <Modal animationType="slide" visible={success} transparent={true} >
                <View style={styles.successmain}>
                    <View style={styles.sucess}>
                        <Text style={{ fontSize: 26, fontWeight: '900', marginVertical: 20, color: 'white' }}>
                            Login Successfully
                        </Text>
                    </View>
                </View>
            </Modal>

            <View style={styles.top}>
                <Text style={styles.title}>Welcome</Text>
            </View>

            <View style={styles.midd}>
                <View style={styles.midd2}>
                    <Text style={styles.title2}>Log in to your account</Text>
                    <Image
                        style={[styles.image, { resizeMode: 'contain' }]}
                        source={loginimg}
                    />
                </View>

                <View style={[styles.inputdiv, { borderBottomColor: phonval ? 'grey' : 'red' }]}>
                    <TextInput
                        style={styles.input}
                        cursorColor="black"
                        keyboardType="email-address"
                        placeholder="Username"
                        fontWeight='700'
                        value={username}
                        onChangeText={text => alertusername(text)}
                    />

             <FontAwesome5 name="user" size={22} color="black" />
                </View>

                {
                    phonval ?
                        <Text style={{ display: 'none' }}>

                        </Text> :
                        <Text style={{ color: 'red', width: '84%', marginTop: -5 }}>
                            * username may not be blank
                        </Text>

                }

                <View style={[styles.inputdiv, { borderBottomColor: passval ? 'grey' : 'red' }]}>
                    <TextInput
                        style={styles.input}
                        cursorColor="black"
                        secureTextEntry={showpd ? true : false}
                        placeholder="Password"
                        value={password}
                        fontWeight='700'
                        onChangeText={text => alertpassword(text)}
                    />
                    <MaterialCommunityIcons name={showpd ? "eye-off-outline" : "eye-outline"} onPress={showpdfun} size={24} color="black" />
                </View>
                {

                    passval ?
                        <Text style={{ display: 'none' }}>

                        </Text> :
                        <Text style={{ color: 'red', width: '84%', marginTop: -5 }}>
                            * Password length must be atleast 8 character
                        </Text>

                }

                <View style={styles.midd3}>

                    <Pressable style={styles.txt2}
                        onPress={() => navigation.navigate('Forgotpass')}
                    >
                        <Text style={styles.txt3}
                        >
                            Forgot Password
                        </Text>
                    </Pressable>
                </View>
                {/* <View style={styles.checkboxContainer}>

                    <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                        color="black"
                    />
                    <Text style={styles.title3}
                        onPress={() => setSelection}
                    >Saved locally</Text>

                </View> */}
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        value={isSelected2}
                        onValueChange={agree}
                        // onPress={agree}
                        style={styles.checkbox}
                        color="black"
                    />
                    <Text style={styles.title3}
                        onPress={() => agree()}

                    >I Agree to Terms & Conditions</Text>
                </View>




            </View>
            {/* <View style={styles.mediadiv}>
                <Pressable style={styles.pressg}
                    onPress={() => alert("Google Auth")}
                >
                    <Text style={styles.txt1}
                    >
                        Google
                    </Text><View style={styles.facebook}>

                        <Image
                            style={[styles.face, { resizeMode: 'contain' }]}
                            source={Google}
                        />

                    </View>
                </Pressable>
                <Pressable style={styles.pressf}
                    onPress={() => alert("Facebook Auth...")}
                >
                    <Text style={styles.txt1}
                    >
                        Facebook
                    </Text>
                    <View style={styles.facebook}>
                        <Image
                            style={[styles.face, { resizeMode: 'contain' }]}
                            source={facebook}
                        />
                    </View>
                </Pressable>
            </View> */}
            <View style={styles.buttonn}>
                <Pressable
                    onPress={loginfun}
                    style={
                        ({ pressed }) => [
                            { backgroundColor: pressed ? 'rgba(0,0,0,0.6)' : 'black' }, styles.pre
                        ]
                    }
                >
                    <Text style={styles.txt9}>
                        LOGIN
                    </Text>

                </Pressable>
                <View style={styles.buttonn2}>
                    <Text style={styles.texttimer}>
                        Don't have account?
                    </Text>
                    <Pressable style={styles.txt2}
                        onPress={regisfun}>
                        <Text style={styles.ttxt3}>
                            Register
                        </Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default Goldlogin;
