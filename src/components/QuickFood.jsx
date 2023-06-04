import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import quickFood from "../data/quickfood";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
const QuickFood = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.quickHeading}>Get it Quickly!</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {quickFood.map((food, index) => (
          <TouchableOpacity key={index} style={{elevation:10}}>
           <View style={{elevation:10}}>
           <ImageBackground
              imageStyle={{ borderRadius: 10, marginRight: 10 }}
              source={{ uri: food.image }}
              style={styles.quickFoodImages}
            >
              <Text style={styles.quickFoodItemsOffer}>{food.offer}OFF</Text>
            </ImageBackground>
           </View>
            <Text 
            style={styles.quickFoodItem}>{food.name}</Text>
        <View style={styles.quickFoodRating}>
        <MaterialIcons name="stars" size={24} color="green" />
        <Text style={{marginLeft:3,fontSize:15,fontWeight:"400"}}>{food.rating}</Text>
        <Text style={{marginLeft:3}}>-</Text>
        <Text style={{marginLeft:3,fontSize:15,fontWeight:"600"}}>{food.time}mins</Text>
        </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  quickHeading: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
    letterSpacing:1,
    color:'orange',
  },
  quickFoodImages: {
    aspectRatio: 5 / 6,
    height: 170,
  },
  quickFoodItemsOffer: {
    position: "absolute",
    left: 10,
    bottom: 10,
    fontSize: 28,
    fontWeight: "500",
    color: "#fff",
  },
  quickFoodItem:{
    fontWeight: "500",
    fontSize:14,
    marginTop: 5,
  },
  quickFoodRating:{
    flexDirection:"row",
    alignItems: "center",
    marginTop: 3,
  }
});
