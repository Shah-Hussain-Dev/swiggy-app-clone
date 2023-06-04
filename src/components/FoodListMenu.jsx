import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuatity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartReducer";
import { AntDesign } from "@expo/vector-icons";
const FoodListMenu = ({ foodlist }) => {
  const dispatch = useDispatch();
  const [addItems, setAddItems] = useState(0);
  const [selected, setSelected] = useState(false);
 
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20,
      }}
    >
      <Pressable>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>{foodlist.name}</Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "green",
            marginVertical: 3,
          }}
        >
          ₹{foodlist.price}
        </Text>
        {/* Rating */}
        <View style={{ flexDirection: "row" }}>
          {[0, 0, 0, 0, 0].map((ele, i) => (
            <FontAwesome
              style={{ paddingHorizontal: 3 }}
              key={i}
              name={i < Math.floor(foodlist.rating) ? "star" : "star-o"}
              size={18}
              color="#ffd700"
            />
          ))}
        </View>
        <Text style={{ width: 160 }}>
          {foodlist.description.length > 30
            ? foodlist.description.substr(0, 45) + "..."
            : foodlist.description}
        </Text>
      </Pressable>
      <View>
        <Image
          source={{ uri: foodlist.image }}
          style={{
            height: 120,
            width: 120,
            aspectRatio: 4 / 4,
            borderRadius: 10,
          }}
        />
        {selected ? (
          <View
            style={{
              position: "absolute",
              bottom: -18,
              alignSelf: "center",
              backgroundColor: "#fff",
              elevation: 10,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => {
                if (addItems === 1) {
                  dispatch(removeFromCart(foodlist));
                  setSelected(false);
                  setAddItems(0);
                } else {
                  setAddItems((c) => c - 1);
                  dispatch(decrementQuatity(foodlist));
                }
              }}
            >
              <AntDesign name="minus" size={20} color="green" />
            </Pressable>
            <Text
              style={{
                fontSize: 20,
                marginHorizontal: 10,
                fontWeight: "600",
                color: "#000",
              }}
            >
              {addItems}
            </Text>
            <Pressable
              onPress={() => {
                setAddItems((c) => c + 1);
                dispatch(incrementQuantity(foodlist));
              }}
            >
              <AntDesign name="plus" size={20} color="green" />
            </Pressable>
          </View>
        ) : (
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: -18,
              alignSelf: "center",
              backgroundColor: "#fff",
              elevation: 10,
              padding: 10,
              width: 80,
              borderRadius: 10,
            }}
            onPress={() => {
              if (addItems === 0) {
                setAddItems((c) => c + 1);
                setSelected(true);
                dispatch(addToCart(foodlist));
              }
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                color: "green",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              Add
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FoodListMenu;

const styles = StyleSheet.create({});
