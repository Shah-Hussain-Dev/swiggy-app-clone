import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decrementQuatity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartReducer";
import { AntDesign } from "@expo/vector-icons";

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totals = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  const instructions = [
    {
      id: 0,
      name: "Avoid Ringing",
      iconName: "bell",
    },
    {
      id: 1,
      name: "Leave at the Door",
      iconName: "door-open",
    },
    {
      id: 2,
      name: "Direction to reach",
      iconName: "directions",
    },
    {
      id: 3,
      name: "Avoid Calling",
      iconName: "phone-alt",
    },
  ];
  return (
    <>
    <ScrollView style={{ marginTop: 40,}}>
      {cart.length > 0 ? (
        <>
          <View style={styles.topNav}>
            <Ionicons
              name="md-arrow-back-sharp"
              size={25}
              color="black"
              onPress={() => navigation.goBack()}
            />
            <Text style={{ color: "black", fontSize: 20, fontWeight: "700" }}>
              {route.params.name}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              width: "94%",
              alignSelf: "center",
              padding: 15,
              borderRadius: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              elevation: 2,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: "gray" }}>
              Ordering for Someone else!
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "600", color: "orange" }}>
              Add Details
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#fff",
              width: "94%",
              alignSelf: "center",
              padding: 15,
              borderRadius: 10,
              elevation: 2,
            }}
          >
            {cart.map((item, i) => (
              <View
                key={i}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 8,
                }}
              >
                <Text style={{ width: 120, fontSize: 18, fontWeight: "700" }}>
                  {item.name}
                </Text>
                <View>
                  <View
                    style={{
                      backgroundColor: "#fff",
                      elevation: 3,
                      padding: 5,
                      borderRadius: 10,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        dispatch(decrementQuatity(item));
                      }}
                    >
                      <AntDesign name="minus" size={20} color="#00ab77" />
                    </Pressable>
                    <Text
                      style={{
                        fontSize: 20,
                        marginHorizontal: 10,
                        fontWeight: "600",
                        color: "#000",
                      }}
                    >
                      {item.quantity}
                    </Text>
                    <Pressable
                      onPress={() => {
                        dispatch(incrementQuantity(item));
                      }}
                    >
                      <AntDesign name="plus" size={20} color="#00ab77" />
                    </Pressable>
                  </View>
                </View>
                <Text
                  style={{ fontSize: 18, fontWeight: "700", color: "#00ab77" }}
                >
                  ₹{item.price * item.quantity}
                </Text>
              </View>
            ))}
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Delivery Instructions
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {instructions.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: "#fff",
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                    elevation: 10,
                  }}
                >
                  <View>
                    <FontAwesome5 name={item.iconName} color="gray" size={24} />
                    <Text
                      style={{
                        width: 75,
                        fontSize: 14,
                        color: "#383838",
                        paddingTop: 10,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{ padding: 10, marginTop: -10,elevation:5 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Billing Details
            </Text>
            <View
              style={{
                
                padding: 10,
                backgroundColor: "#fff",
                borderRadius: 10,
                marginVertical:10
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold",color:'gray' }}>
                  Item Total
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#00ab77" }}
                >
                  ₹{totals}
                </Text>
              </View>
            
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical:5
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" ,color:'gray'}}>
                  Delivery Fee | 1.2Kms
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "red" }}
                >
                FREE
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical:5
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" ,color:'gray'}}>
                 Free  Delivery on Your Order!
                </Text>
              
              </View>
              <Text
                style={{
                  height: 1,
                  borderWidth: 0.6,
                  borderColor: "gray",
                  marginTop: 3,
                }}
              ></Text>
               
                <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical:5
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" ,color:'gray'}}>
                  Delivery Tip
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "red" }}
                >
                Add Tip
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical:5
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" ,color:'gray'}}>
                  Tax &  Charges
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "red" }}
                >
               ₹65.3
                </Text>
                
              </View>
              <Text
                style={{
                  height: 1,
                  borderWidth: 0.6,
                  borderColor: "gray",
                  marginTop: 3,
                }}
              ></Text>
                 <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical:5
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: "bold" ,color:'#000'}}>
                  To Pay
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", color: "#00ab77" }}
                >
                ₹{totals+65}
                </Text>
              </View>
            </View>
           
          </View>
        <View >
  
        </View>
        </>
      ) : (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: Dimensions.get("screen").height - 200,
          }}
        >
          <Image
            source={require("../../assets/emptycart.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Your Cart is Empty !
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{
              backgroundColor: "orange",
              padding: 14,
              borderRadius: 10,
              marginTop: 10,
              alignSelf: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Back to Home
            </Text>
          </TouchableOpacity>
        </View>
      )}
    
    </ScrollView>
            {totals > 0? (
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff',width:Dimensions.get('screen').width,left:0,padding:14,position:'absolute',bottom:1,}}>
              <View>
                <Text style={{fontSize: 20, fontWeight: "bold" ,}}>₹{totals+65}</Text>
                <Text  style={{fontSize: 14, fontWeight: "bold",color:'#00ab77' ,}}>View Detailed Bill</Text>
              </View>
              <TouchableOpacity
            onPress={() => {
              navigation.navigate("Loading")
              
            }}
            style={{
              backgroundColor: "#00ab77",
              padding: 14,
              borderRadius: 10,
              // marginTop: 10,
              alignSelf: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" ,color:'#fff'}}>
              Proceed to Pay
            </Text>
          </TouchableOpacity>
            </View>
            ):(null)}
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  topNav: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    margin: 10,
    marginTop: 15,
  },
});
