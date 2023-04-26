import {StyleSheet,StatusBar,Dimensions} from 'react-native'
const width=Dimensions.get('window').width
const height=Dimensions.get('window').height


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },

    top: {

        //   backgroundColor: 'grey',
        width: '100%',
        height: height*0.06,
        alignItems: 'baseline',
        justifyContent:'center'
    },
    midd: {
        width: '100%',
        height: height *0.6,
            //  backgroundColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    midd2: {
        //backgroundColor: 'grey',
        width: '95%',
        height: height / 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },




 
   
    inputdiv: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
         marginVertical: height*0.01,
    },
   
    inputdivpic: {
        flexDirection: 'row',
        width: 400,
        height:height*0.06,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomColor: 'grey',
        backgroundColor:'red',
        borderBottomWidth: 2,
        marginVertical: height*0.01,
    },
   
    input: {
        width: '85%',
        height: height*0.04,
        fontSize: height*0.02,
    },
    title: {
        fontWeight: '900',
        fontSize: height*0.025,
        // marginBottom: 30,
        marginLeft: width*0.05
    },
   

    image: {
        width: width*0.46,
        height: height
    },
    txt2: {
        color: "white",

    },
  
    ttxt3: {
        color: "#F5B716",
        fontWeight: '900',
        fontSize: 17,
        marginHorizontal: 10,
        textDecorationLine: 'underline',
        textTransform: 'uppercase'
    },
    mediadiv: {
        width: '100%',
        height: '6%',
       // backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
  
   
    presst: {
        width: width*0.32,
        height: 40,
        backgroundColor: '#000000',
        marginHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    txt1: {
        color: 'white',
        fontSize: 17,
        paddingLeft: 10,
        fontWeight: '700'
    },
    txt9: {
        color: 'white',
        fontSize: 17,
        fontWeight: '700'
    },

 

    buttonn: {
        width: '100%',
          height: height*0.25,
        //   backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonn2: {
        width: '100%',
        height: '40%',
        //    backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pre: {
        backgroundColor: 'black',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    texttimer: {
        fontSize: 16,
        fontWeight: '700',

    },

    camicon: {
        backgroundColor: 'white',
        width: 26,
        height: 26,
        borderRadius: 50,
        marginTop: -12,
        marginLeft: -8,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'


    },
    txtake: {
        color: 'white',
        fontSize: 10,
        fontWeight: '900',
        paddingLeft: 14,
        paddingTop: -23
    },
    txtake2: {
        paddingLeft: 50,
    },
    textotp: {
        //  backgroundColor:'red',
        width: '50%',
        height: 46,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 14,

    },
    textotpinp: {

        height: 40,
        width: 34,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 24,
    },
    radiobtn: {
        width: '90%',
        //  backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
    },
    successmain:{ 
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
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
,
sucess2: {
    backgroundColor: 'black',
    width: height*0.06,
    height: height*0.06,
    borderWidth: 3,
    borderColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    shadowColor: "black",
    shadowOffset: {
        width: 20,
        height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 8,
},
activitybox: {
    backgroundColor: 'white',
    width: '30%',
    height: '10%',
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
},
spinnerTextStyle: {
    color: 'white',
    fontSize:70
  },
  container3: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 0,
    zIndex: 2,
    borderColor: 'black',
    shadowColor: "black",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
    container4: {
        backgroundColor: 'black',
        width: '90%',
        height: height*0.72,
        borderWidth: 3,
        borderColor:'#FFC72C',
        justifyContent:'space-between',
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
    },

  controls: {
    height:height*0.2,
    width:'100%',
    // backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E9730F',
    marginLeft: 10,
  },
  camera: {
    flex: 1,
    height:'100%',
    width:'100%'
  }, 
  touchhhmain:{
    width:'100%',
    height:'60%',
    // backgroundColor:'green',
    justifyContent:'space-around',
    alignItems:'center'
  },
  tochbutton:{
    backgroundColor:'#ffffff',
    width:'60%',
    height:height*0.04,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  tochbutton2:{
    backgroundColor:'#ffffff',
    width:120,
    height:120,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100
  },
  tochbutton3:{
    backgroundColor:'#ffffff',
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100
  },
  texttouch:{
    fontSize:20,
    fontWeight:'600',
    textTransform:'uppercase',
  },
  maintopcamera:{
    //  backgroundColor:'red',
    width:'100%',
    height:height*0.06,
    justifyContent:'center',
    alignItems:'center',
  },
  accesscamera:{
    flex:1,
    backgroundColor:'#0004',
    justifyContent:'center',
    alignItems:'center',
  }
})

