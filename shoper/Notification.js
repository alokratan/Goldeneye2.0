import { StyleSheet, Dimensions, TouchableOpacity, ScrollView,Image, Text, View } from 'react-native'
import React from 'react'
const height = Dimensions.get('window').height
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import notjson from "./notification.json"
import imaglogo2 from '../assets/icons/filtergirl.png'
const Notification = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Bottomtabs')}>
                    <AntDesign name='left' size={20} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, width: '80%', fontWeight: '500' }}>Notifications</Text>
                <MaterialCommunityIcons name='bell-outline' size={28} color="black" />
            </View>

            <View style={styles.textnoti}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>
                    You have <Text style={{ color: '#006EFF' }}>5 Notifications </Text>today.
                </Text>
                <TouchableOpacity style={{ width: '90%', alignItems: 'flex-end', justifyContent: 'flex-end', height: height * 0.04 }}>
                    <Text style={{ textDecorationLine: 'underline', fontWeight: '700', fontSize: 16, color: '#FFC72C' }}>
                        Clear
                    </Text>
                </TouchableOpacity>
            </View>
<View style={styles.mapnoti}>


            <ScrollView style={{ width: '100%', height: height * 0.2 }}>
                
                    {
                        notjson.map(item => {
                            return (
                                <View style={styles.mainboxnoti} key={item.id}>
                                    <View style={styles.boxnotification}>
                                        <View>
                                        <Image source={imaglogo2} style={{ width: 35, height: 35, borderRadius: 100 }} />
                                        </View>
                                        <View style={{width:'60%', height:'60%'}}>
                                    <Text style={{fontWeight:'600',color:'black',fontSize:17}}>{item.title}</Text>
                                    <Text style={{color:'black',fontSize:15}}>{item.subtitle}</Text>
                                    </View>
                                    <Text style={{height:height*0.06}}>{item.time}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
              
            </ScrollView>
            </View>
        
        </View>
    )
}

export default Notification

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
    textnoti: {
        // backgroundColor:'red',
        width: '100%',
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapnoti: {
        // backgroundColor: '#0004',
        width: '100%',
        height: height * 0.8,
        justifyContent: 'center',
        paddingVertical:10,
        alignItems: 'center'
    },
    boxnotification: {
        height: height * 0.08,
        marginVertical: 10,
        backgroundColor: '#FDEFCC',
        width: '90%',
        flexDirection:'row',
        borderRadius:5,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    mainboxnoti:{
        // backgroundColor:'red',
        justifyContent:'center',
        width:'100%',
        alignItems:'center'
    }
})