import { StyleSheet,Dimensions, Text, Image, View ,StatusBar } from 'react-native'
import React, { useState } from 'react'
import slides from './slides'
import AppIntroSlider from 'react-native-app-intro-slider';
 import Drawers from './shoper2/Drawers'
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height

const App2 = () => {
    const [showhom, setShowhom] = useState(true);

    const donebtn = (label) => {
        return (
            <View style={styles.donebt}>
                <Text style={{
               color: 'white',
               fontSize: height*0.020,
               textTransform: 'uppercase',
               fontWeight: '700',
               paddingVertical:height*0.015,
               paddingHorizontal:width*0.35,
             borderRadius:5,
               backgroundColor:'black',
               letterSpacing: 0.5
                }}>
                    {label}
                </Text>
            </View>
        )
    }

    const skipbtn = (label) => {
        return (
            <View style={styles.skipbt}>
                <Text style={{
                    color: 'black',
                    fontSize: height*0.020,
                    textDecorationLine: 'underline',
                    textTransform: 'uppercase',
                    fontWeight: '700'
                }}>
                    {label}
                </Text>
            </View>
        )
    }
    const nxtbtn = (label) => {
        return (
            <View style={styles.nextbtn}>
                <Text style={{
                    color: 'white',
                    fontSize: height*0.020,
                    textTransform: 'uppercase',
                    fontWeight: '700',
                  paddingVertical:height*0.015,
                  paddingHorizontal:width*0.35,
                  borderRadius:5,
                    backgroundColor:'black',
                    letterSpacing: 0.5
                }}>
                    {label}
                </Text>
            </View>
        )
    }

    if (showhom) {
        return (
            <AppIntroSlider
            style={{backgroundColor:'white'}}
                data={slides}
                renderItem={({ item }) => {
                    return (       
                        <View style={styles.container}>
                            <StatusBar
            animated={true}
            backgroundColor='white'
            showHideTransition={'slide'}
        //   hidden
        barStyle={'dark-content'}
            />
                            <Image
                                style={[styles.image, { resizeMode: 'contain' }]}
                                source={item.image}
                            />                      
                        <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )
                }}
                dotStyle={styles.mdots}
                activeDotStyle={styles.dots}
                renderNextButton={() => nxtbtn("Next")}
                showSkipButton
                renderSkipButton={() => skipbtn("Skip")}
                renderDoneButton={() => donebtn("done")}
                bottomButton
                onDone={() => {
                    setShowhom(false);
                }}
            />
        )
    }
    else{
        return (<Drawers/>)
    }
   
}
export default App2;
const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        alignItems: 'center',
        backgroundColor:'white',
        justifyContent:'flex-end',
        
    },
    image: {
        
         width: '70%',
        height: height*0.38,
        marginBottom:height/13,
    },
    title: {
        fontWeight: '900',
        fontSize: height*0.035,
        color: 'black',
        textAlign: 'center',
        
        height: height*0.15,
        // backgroundColor:'green'
    },

    mdots: {

        backgroundColor: '#FFC400',
        width: height*0.015,
        height: height*0.015,
        borderRadius: 10,
       marginBottom:50

    },
    dots: {

        backgroundColor: 'black',
         width: height*0.015,
        height: height*0.015,
        borderRadius: 20,
        marginBottom:50
       
       

    },
    nextbtn:{
        width:'100%',
     //   backgroundColor:'green',
        height:height*0.070,
        justifyContent:'center',
        alignItems:'center',
      
     
    },
    skipbt:{
        width:'100%',
       //  backgroundColor:'red',
       height:height*0.070,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20
       
    },
    donebt:{
        width:'100%',
        // backgroundColor:'red',
        height:height*0.070,
        justifyContent:'center',
        alignItems:'center',
        
        marginBottom:'26%'
    }

})