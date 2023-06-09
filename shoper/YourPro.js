import { StyleSheet, Text, Pressable, TextInput, ToastAndroid, Dimensions, KeyboardAvoidingView, View, Image } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesome, } from '@expo/vector-icons';

import { styles } from '../Stylesheets/Styleyourprofile'
import phot from '../assets/icons/imglogo.jpg'
import axios from 'axios';
const baseURL = 'http://geyeapp.consultit.co.in:8000'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FontAwesome5, MaterialIcons, MaterialCommunityIcons, Entypo, Ionicons, Feather } from '@expo/vector-icons';

import { Switch } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
const YourPro = ({ navigation }) => {

    const [hideitem, setHideitem] = useState(false);
    const [ishide, setIshide] = useState(true)
    const [success, setSuccess] = useState(false);
    const [full_name, setFull_name] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [textdelete, setTextdelete] = useState('');
    const [idd, setIdd] = useState('');
    

    useFocusEffect(
        useCallback(
            () => {
                fetchdata();

             
                AsyncStorage.getItem('Accessuserid').then(value=>{
                    console.log('id',value);
                    setIdd(value)
                })
                logoutfn

            },
            [],
        )

    )
    const fetchdata = async () => {
        
        await AsyncStorage.getItem('AccessTokendata').then(value => {
            console.log('userid', typeof (value));
            const bad = JSON.parse(value);
            console.log('userid', typeof (bad));
            setFull_name(bad.full_name)
            setEmail(bad.email)
            setUsername(bad.username)
        })
    }
    const handletextdele=(text)=>{
        setTextdelete(text)
    }

    const hidefun = () => {
        setHideitem(true)

    }
    const closedrop = () => {
        setHideitem(false)
    }
    const [visible, setVisible] = useState(false);

   
    const logoutfn = async() => {
       
        if(textdelete==='DELETE'){
            const response = await axios.delete(`http://geyeapp.consultit.co.in:8000/user/register/${idd}`);
        console.log(response.data);
        ToastAndroid.show('Your Account Delete Successfully', 1000)
            console.log('user account delete') 
      
                    setIslog(true)

        ToastAndroid.show('Your Account Delete Successfully', 1000)
       
            AsyncStorage.removeItem('AccessToken', (err) => console.log('AccessToken', err));
            AsyncStorage.removeItem('Accessuserid', (err) => console.log('AccessTokendata', err));
        setTimeout(() => {
            setIslog(false)
            setTextdelete('');
            setHideitem(false)
            navigation.navigate('LoginHome')
        }, 1000);
               }
               else{
                ToastAndroid.show('Plese type DELETE to delete your account', 1000)
                console.log(textdelete);
               }

    }



    const save = () => {
        ToastAndroid.show('Updated Successfully', 1000);
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
            navigation.navigate('HomeBot')
        }, 2000);
    };
    const visifun = () => setVisible(true);
    const nonvisifun = () => setVisible(false);


    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = useState(false);
    const [islog, setIslog] = useState(false);
    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn);
        if (isSwitchOn) {
            setIshide(true)
        }
        else {
            setIshide(false)
        }

    }

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior="height"
        >
            {islog ?

                <KeyboardAvoidingView style={styles.successmain2}  behavior="height">

                    <View style={styles.sucess2}>
                        <View style={{backgroundColor: '#D72500',width:'100%',justifyContent:'center',alignItems:'center',borderTopLeftRadius:10,borderTopRightRadius:10,}}>
                        <Text style={{marginVertical:'4%', fontSize: 18, fontWeight: '900', color: 'white' }}>

DELETE ACCOUNT</Text>
                        </View>
                       
                        <Text style={{ fontSize: 17, width: '90%', fontWeight: '700', color: 'black' }}>
                            Are you sure want to delete your account?
                        </Text>
                        <Text style={{ fontSize: 16, width: '90%', fontWeight: '500', color: 'black' }}>
                            Plese type <Text style={{color:'#D72500', fontWeight:'600'}}>DELETE</Text> to confirm
                        </Text>

                        <TextInput

                            style={styles.input2}
                            onChangeText={handletextdele}
                            placeholder="DELETE"
                            cursorColor='black'
                          
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '80%', height: '20%',marginBottom:'3%'}}>
                            <Pressable onPress={() => setIslog(false)} style={[styles.presbtnlog, { backgroundColor: '#0008' }]}>
                                <Text style={styles.textlogout}>
                                    Cancel
                                </Text>
                            </Pressable>
                            <Pressable onPress={logoutfn} style={[styles.presbtnlog, { backgroundColor: '#D72500' }]}>
                                <Text style={styles.textlogout}>
                                    DELETE
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
                : <View></View>}
            {
                hideitem ? <View style={styles.successmain}>
                    <View style={styles.sucess}>
                        <Dropmultiple />
                        <Pressable onPress={closedrop} style={{ justifyContent: 'center', alignItems: 'center', width: '60%', borderRadius: 10, height: 40, backgroundColor: 'black' }}>
                            <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>
                                CLOSE
                            </Text>
                        </Pressable>
                    </View>
                </View> : <View></View>
            }
            {
                success ? <View style={styles.successmain}>

                    <View style={styles.sucess}>
                        <Text style={{ fontSize: 26, fontWeight: '900', marginVertical: 20, color: 'white' }}>
                            Updated Successfully
                        </Text>

                    </View>
                </View> : <View></View>
            }

            <View style={visible ? styles.header : styles.nonheader} >

                <Image
                    style={styles.phot}
                    source={phot}
                />
                <View style={styles.textandmenudiv}>
                    <Text style={styles.headertxt}>

                        {full_name}
                    </Text>

                    <Pressable style={{ paddingHorizontal: 20, paddingVertical: 20 }}
                        onPress={() => visible ? nonvisifun() : visifun()}>

                        {visible ?
                            <FontAwesome name="angle-up" size={24} color="black" /> :
                            <FontAwesome name="angle-down" size={24} color="black" />
                        }


                    </Pressable>


                </View>

            </View>

            {visible ?

                <View style={styles.header5}>

                    <Pressable style={[styles.dropdiv, { marginLeft: '-5%' }]}
                        onPress={() => alert("delete photo")}>
                        <Feather name="camera" size={23} color="black" />
                        <Text style={styles.droptxt}>
                            Take Photo
                        </Text>
                    </Pressable>

                    <Text style={{ width: '80%', height: 1, backgroundColor: '#0013' }}></Text>

                    <Pressable style={styles.dropdiv}
                        onPress={() => alert("delete photo")}>
                        <MaterialCommunityIcons name="image-search-outline" size={24} color="black" />
                        <Text style={styles.droptxt}>
                            Choose Photo
                        </Text>
                    </Pressable>
                    <Text style={{ width: '80%', height: 1, backgroundColor: '#0013' }}></Text>

                    <Pressable style={styles.dropdiv}
                        onPress={() => setIslog(true)}>
                        <MaterialCommunityIcons name="delete-outline" size={26} color="red" />
                        <Text style={styles.droptxt2}>
                            Delete Account
                        </Text>
                    </Pressable>

                    <Text style={{ width: '80%', height: 1, backgroundColor: '#0013' }}></Text>

                    <Pressable style={styles.dropdiv}
                        onPress={() => nonvisifun()}>
                        <Text style={[styles.droptxt, { color: 'blue' }]}>
                            Cancel
                        </Text>
                    </Pressable>
                </View>
                :
                <>
                    <View style={styles.midd3}>
                        <Pressable style={styles.txt2}
                            onPress={() => alert('this is edit button')}>
                            <Text style={styles.ttxt3}>
                                Edit
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.header2}>
                        <View style={styles.inputdiv}>
                            <View style={styles.icondiv}>
                                <FontAwesome5 name="user" size={22} color="black" />
                            </View>
                            <TextInput

                                style={styles.input}
                                value={username}
                                placeholder="User Name"
                                cursorColor='black'
                                onChangeText={e => console.log(e)}
                            />
                        </View>

                        <View style={styles.inputdiv}>
                            <View style={styles.icondiv}>
                                <MaterialIcons name="mail-outline" size={24} color="black" />
                            </View>
                            <TextInput
                                style={styles.input}
                                cursorColor='black'
                                value={email}
                                placeholder="username123@gmail.com"
                                onChangeText={e => console.log(e)}
                            />
                        </View>

                        <View style={styles.inputdiv}>
                            <View style={styles.icondiv}>
                                <Ionicons name="call-outline" size={24} color="black" />
                            </View>
                            <TextInput
                                cursorColor='black'
                                style={styles.input}
                                placeholder="9932xxxxxx"
                                keyboardType="number-pad"
                                onChangeText={e => console.log(e)}
                            />
                        </View>

                        <View style={styles.inputdiv}>
                            <View style={[styles.icondiv, { backgroundColor: 'rgba(255,248,224,1)' }]}>
                                <Entypo name="star" size={24} color="black" />
                            </View>
                            <Pressable onPress={() => navigation.navigate('Setpre')} style={{ width: '80%', height: 40, backgroundColor: 'rgba(255,248,224,0.9)', borderBottomColor: '#FFC72C', borderBottomWidth: 2 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10, paddingLeft: 10 }}>
                                    Update Your Preference
                                </Text>
                            </Pressable>
                        </View>
                        <View style={styles.inputdiv}>
                            <View style={[styles.icondiv, { backgroundColor: 'rgba(255,248,224,1)' }]}>
                                <FontAwesome5 name="percent" size={16} color="black" />
                            </View>
                            <Pressable onPress={() => navigation.navigate('percent')} style={{ width: '80%', height: 40, backgroundColor: 'rgba(255,248,224,0.9)', borderBottomColor: '#FFC72C', borderBottomWidth: 2 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10, paddingLeft: 10 }}>
                                    Update Discount Percent
                                </Text>
                            </Pressable>
                        </View>

                        <View style={styles.inputdiv}>
                            <View onValueChange={onToggleSwitch} style={ishide ? [styles.icondiv, { backgroundColor: 'rgba(255,248,224,1)' }] : [styles.icondiv, { backgroundColor: '#F3F3F3' }]}>
                                <MaterialCommunityIcons name={ishide ? "eye-outline" : "eye-off-outline"} size={24} color="black" />
                            </View>
                            {ishide ?
                                <Pressable onPress={() => navigation.navigate('hide')} style={{ width: '80%', height: 40, backgroundColor: 'rgba(255,248,224,0.9)', borderBottomColor: '#FFC72C', borderBottomWidth: 2 }}>
                                    <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10, paddingLeft: 10 }}>
                                        Hide From Individual
                                    </Text>
                                </Pressable> :
                                <Pressable style={{ width: '80%', height: 40, backgroundColor: '#F3F3F3', borderBottomColor: '#0004', borderBottomWidth: 2 }}>
                                    <Text style={{ fontSize: 15, fontWeight: '500', marginTop: 10, paddingLeft: 10 }}>
                                        Hide From Individual
                                    </Text>
                                </Pressable>}

                        </View>
                        <View style={styles.hidebar}>


                            <Text style={styles.txthide}>Hide from all</Text><Switch
                                trackColor={{ true: 'black', false: '#0003' }}
                                thumbColor='#FFC72C'
                                value={isSwitchOn} onValueChange={onToggleSwitch} />
                        </View>

                    </View></>}

            <Pressable style={styles.pre}

                onPress={save}>
                <Text style={styles.txt9}>
                    SAVE CHANGES
                </Text>
            </Pressable>
        </KeyboardAvoidingView>
    )
}

export default YourPro;
