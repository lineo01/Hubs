import { Text, View,StyleSheet ,Image, TouchableOpacity,FlatList} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { useRouter } from "expo-router";
import { initializeApp } from "firebase/app";
export default function Index() {
const  DATAS=[{
  id:1,
title:"Hammers and Tools For Farmers",
description:"Farming Without effecient tools is hard but we got you covered. ",
url:"https://static.vecteezy.com/system/resources/thumbnails/008/042/386/small/farming-and-gardening-tools-equipment-with-wheel-barrow-fork-spade-watering-can-sprayer-illustration-vector.jpg"
},
// {
//   id:2,
//   title:"Whole grown Farm crops",
//   description : "Enjoy the best farm crops in the whole country ."
//   url: "https://kidspressmagazine.com/wp-content/uploads/2014/04/dreamstimelarge_25047894.jpg"
// }
]
  const router = useRouter();
  const [like_Count,SetLike_count]=useState(0);
  const [Card_Title,setTitle]= useState();
  const [like_Count2,setlike]=useState(0);
    const [card_description,set_card_description]= useState();
  return (
    <View style={styles.main}>
      <View style={styles.Header}>
        <Image style={styles.logo} source={require("../assets/images/icon.png")}/>
       <Text style={{fontWeight:"bold",fontSize:20,color:"#f4f2f2"}}>Farmer's Hub</Text> 
  <Ionicons name="reorder-three-sharp" size={24} color="black"  onPress={()=>{router.push("/Login")}}/>
      
      
      
      </View>
      <View style={styles.body}>
        <View style={styles.main}>
  <View style={styles.Top_Navigation}>
.
<TouchableOpacity onPress={()=>{router.push("home")}}>
  <Text style={styles.Topnavigationtext}>Home</Text></TouchableOpacity>
<Text style={styles.Topnavigationtext} onPress={()=>{router.push("Marketplace")}}>Marketplace</Text>
<Text style={styles.Topnavigationtext}onPress={()=>{router.push("Messages")}}>Message</Text>
<Text style={styles.Topnavigationtext}onPress={()=>{router.push("profile")}}>profile</Text>
  </View>
   {/* <FlatList data={DATAS} renderItem={({item})=>(<View style={styles.card_container}> 
        <Image style={styles.card_image} source={{uri:item.url }}></Image>
        <Text style={styles.card_text_heading}> {item.title}</Text>
        <Text style={styles.card_text_description}> {item.description || "Description here"}</Text>
        <View style={{height:25,backgroundColor:"green",width:"100%",marginTop:5,padding:2,flexDirection:"row",alignContent:"center",justifyContent:"space-between"}}>
          <Ionicons name="heart" size={20} color="black" onPress={()=>{SetLike_count(like_Count+1)}} /> <Text style={{marginLeft:-155}}>{like_Count}</Text>
          <Ionicons name="chatbox-ellipses-outline" size={20} color="black" />
          <Ionicons name="ellipsis-horizontal" size={20} color="black" />
        </View>
      </View>)} 
      keyExtractor={Card_Title}
      ></FlatList>
       */}
<View style={styles.card_container}> 
        <Image style={styles.card_image} source={{uri:"https://static.vecteezy.com/system/resources/thumbnails/008/042/386/small/farming-and-gardening-tools-equipment-with-wheel-barrow-fork-spade-watering-can-sprayer-illustration-vector.jpg"}}></Image>
        <Text style={styles.card_text_heading}> {"Farm Tools"}</Text>
        <Text style={styles.card_text_description}> {"Farming ? It requires some good tools and guess what we have them ready for you . "}</Text>
        <View style={{height:25,backgroundColor:"green",width:"100%",marginTop:5,padding:2,flexDirection:"row",alignContent:"center",justifyContent:"space-between"}}>
          <Ionicons name="heart" size={20} color="black" onPress={()=>{SetLike_count(like_Count+1)}} /> <Text style={{marginLeft:-155}}>{like_Count}</Text>
          <Ionicons name="chatbox-ellipses-outline" size={20} color="black" />
          <Ionicons name="ellipsis-horizontal" size={20} color="black" />
        </View>
      </View>
      <View style={styles.card_container}> 
        <Image style={styles.card_image} source={{uri:"https://kidspressmagazine.com/wp-content/uploads/2014/04/dreamstimelarge_25047894.jpg" }}></Image>
        <Text style={styles.card_text_heading}> {"Fresh Farm crops "}</Text>
        <Text style={styles.card_text_description}> {"Fresh farm crops straigh from the farm to you home ."}</Text>
        <View style={{height:25,backgroundColor:"green",width:"100%",marginTop:5,padding:2,flexDirection:"row",alignContent:"center",justifyContent:"space-between"}}>
          <Ionicons name="heart" size={20} color="black" onPress={()=>{setlike(like_Count2+1)}} /> <Text style={{marginLeft:-155}}>{like_Count2}</Text>
          <Ionicons name="chatbox-ellipses-outline" size={20} color="black" />
          <Ionicons name="ellipsis-horizontal" size={20} color="black" />
        </View>
      </View>
          </View>        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
   main:{
    flex:1,
   }
    ,Header:{
      height:100,
      backgroundColor:'#038416',
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
    },
    Top_Navigation:{
      height:50,
      backgroundColor:"#2a8400",
      width:"100%",
      padding:5,
      justifyContent:"space-around",
      flexDirection:"row"

    },
    body:{
      backgroundColor:"#d1f0c2",
      height:"100%",

    },
    logo:{
      width:85,
      height:85,
      margin:10,
      borderRadius:50
    },
    card_container:{
      backgroundColor:"#f1f1f1",
      height:280,
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
      backgroundColor:"#d8d8d8",
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
    Topnavigationtext:{

      color:"#e4e4e4",
    }
})

