import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import hotels from "../data/hotels";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const MenuList = () => {
  const data = hotels;
  const navigation = useNavigation();
  const [toggleHeart, setToggleHeart] = useState(false);

  const [seletedHeart,setSelectedHeart] = useState();
  const toggleHeartIcons = (id) => {
    // setToggleHeart(!toggleHeart)
    setSelectedHeart(id)
    }
  return (
    <View>
      {data.map((item, index) => (
        <View key={item.id} style={{ margin: 10 }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Menu',{
         item
            })}>
            <View style={styles.container}>
              <ImageBackground
                source={{ uri: item.image }}
                imageStyle={{ borderRadius: 6 }}
                style={{ height: 170, aspectRatio: 5 / 6 }}
              >
                <View
                  style={{
                    alignSelf: "flex-end",
                    position: "absolute",
                    right: 10,
                    top: 10,
                  }}
                >
                  <Octicons
                    name={seletedHeart === item.id ? "heart-fill" : "heart"}
                    size={24}
                    color={seletedHeart === item.id   ? "red" : "white"}
                    style={{ marginLeft: 20 }}
                    onPress={() => toggleHeartIcons(item.id)}
                  />
                </View>
              </ImageBackground>
              <View style={{marginLeft:10,elevation:10}}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.menuListRating}>
                  <MaterialIcons name="stars" size={24} color="green" />
                  <Text
                    style={{ marginLeft: 3, fontSize: 15, fontWeight: "400" }}
                  >
                    {item.rating}
                  </Text>
                  <Text style={{ marginLeft: 3 }}>-</Text>
                  <Text
                    style={{ marginLeft: 3, fontSize: 15, fontWeight: "600" }}
                  >
                    {item.time}mins
                  </Text>
                </View>
                <Text style={{fontSize:16,color:"gray",marginVertical:5}}>{item.address}</Text>
                <View style={{flexDirection:"row",gap:2,alignItems:"center"}}>
                <FontAwesome name="rupee" size={22} color="green" />
                <Text style={{fontSize:20,fontWeight:'600'}}>{item.cost_for_two} for two</Text>
                </View>
                <View style={{flexDirection:'row',marginVertical:5}}>
                <MaterialCommunityIcons name="bike-fast" size={34} color="black" />
                <Text style={{fontSize:20,fontWeight:'bold',color:'green',marginLeft:10}}>Free Delivery</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

  },
  title: {
    fontWeight: "700",
    fontSize: 20,
  },
  menuListRating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  
});
