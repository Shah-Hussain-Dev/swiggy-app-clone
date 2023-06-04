import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import FilterComponent from "../components/FilterComponent";
import MenuList from "../components/MenuList";

const HomeScreen = () => {
  return (
    <ScrollView style={{ marginTop: 40 }}>
      <View style={styles.container}>
        <TextInput
          placeholder="Search Food, Restraunts and more..."
          style={styles.textInputBox}
        />
        <Ionicons name="md-search-outline" size={27} color="orangered" />
      </View>
      {/* Image Slider */}
      <Carousel />
      {/* Food Types */}
      <FoodTypes />
      {/* Quick Food */}
      <QuickFood/>
      {/* Filter component */}
      <FilterComponent/>
      {/* Menu List  */}
      <MenuList/>
  
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderColor: "#dedede",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  textInputBox: {
    fontSize: 20,
  },
});
