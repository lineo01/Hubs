import { View, Text ,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import * as DocumentPicker from 'expo-document-picker';
const profile = () => {
   const [fileUri, setFileUri] = useState(null); 
const pickFile = async () => {
  try {
    const result = await DocumentPicker.getDocumentAsync({ type: "image/*" });

    console.log("Picker result:", result);

    // New way: check canceled property
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const fileUri = result.assets[0].uri;
      setFileUri(fileUri);
      console.log("File picked:", fileUri);
    } else {
      console.log("Picker cancelled");
    }
  } catch (err) {
    console.error("Error picking file:", err);
  }
};



    const [Profile_Name,SetName]=useState("Profile Name");
    const[Card_Title,SetTitle]=useState("Title");
    const[card_description,setDescription]=useState("Description");
  
  return (
    <View style={styles.Profile}>
      <Image source={require("../assets/images/icon.png")} style={{height:100,width:100,borderRadius:100,justifyContent:'center',}}></Image>
      <Text>{Profile_Name}</Text>

        <View style={styles.card_container}> 
          <TouchableOpacity onPress={()=>{
          console.log("File picker opened");
          pickFile();
          }}>
       <Feather name="plus" size={100} color="black" />
       </TouchableOpacity>
        <Text style={styles.card_text_heading}> {Card_Title  || "Title here"}</Text>
         <Text style={styles.card_text_description}> {card_description || "Description here"}</Text>
             {fileUri && (
          <Image
            source={{ uri: fileUri }}
            style={styles.pickedImage}
            resizeMode="cover"
          />
        )}
      </View>
    </View>
    
  )
}

export default profile

const styles = StyleSheet.create({
  Profile:{
    padding:10,
    backgroundColor:"blue",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
  },
    card_container:{
      backgroundColor:"green",
      height:1000,
      width:"100%",
      borderRadius:10,
      alignItems:"center",
      flexDirection:"column",
      padding:10,
      margin:5,
    },
    card_image:{
      height:150,
      width:"100%",
      backgroundColor:"yellow",
      borderRadius:10,
    },
    card_text_heading:{
      fontSize:20,
      marginTop:10,
    },
    card_text_description:{   
      fontSize:15,
      marginTop:5,
 },
pickedImage:{
  height:200,
  width:200
}},
  )

