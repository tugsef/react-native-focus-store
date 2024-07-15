import { Dimensions, StyleSheet } from "react-native";


export default StyleSheet.create({
   image:{
    width: '100%',
    height: 150,
    objectFit:'contain',
    padding:4,
    backgroundColor:"#fff",
    borderRadius:10,

   },
   container:{
    flex: 1,
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',


   },
   viewContainer:{
    flex:1,
    gap:10,
    backgroundColor:'#C7C8CC',
    paddingEnd:10,
    paddingStart:10,
    paddingBottom:30,
    paddingTop:30,
    borderRadius:10

    
   }
   ,
   text:{
    fontSize:15,
    fontWeight:'bold'
   }
})