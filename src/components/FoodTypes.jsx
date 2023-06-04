import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import foodTypesData from "../data/foodtypes";
import { ScrollView } from "react-native";
const FoodTypes = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {foodTypesData.map((foodType, index) => (
          <TouchableOpacity key={index} style={styles.contaner}>
            <View style={styles.shadow}>
              <Image
                source={{ uri: foodType.image }}
                style={styles.foodImage}
              />
            </View>
            <Text style={styles.foodText}>{foodType.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FoodTypes;

const styles = StyleSheet.create({
  contaner: {
    margin: 10,
  },
  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  foodText: {
    marginTop: 6,
    textAlign: "center",
    fontWeight: "700",
  },
  shadow: {
    shadowColor: '#202020',
    shadowOffset: {width: 2, height: 3},
    shadowRadius: 5,
    elevation:10,
  },
});
