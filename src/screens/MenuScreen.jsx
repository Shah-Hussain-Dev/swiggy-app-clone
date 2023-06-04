import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
  Dimensions,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FoodItem from "../components/FoodItem";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";

const MenuScreen = () => {
  const cart = useSelector((state) => state.cart);
  const totals = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  const [toggleWishlist, setToggleWishlist] = useState(false);
  const [menuList, setMenuList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const toggleWishlistIcon = () => {
    setToggleWishlist((prevState) => !prevState);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const route = useRoute();
  const navigation = useNavigation();
  const {
    name,
    id,
    image,
    rating,
    time,
    address,
    cost_for_two,
    cuisines,
    menu,
  } = route.params.item;
  useEffect(() => {
    const fetchMenu = () => {
      setMenuList(menu);
    };
    fetchMenu();
  }, []);

  return (
    <>
      <ScrollView style={{ marginTop: 40 }}>
        <View style={styles.topHeader}>
          <View style={styles.topNav}>
            <Ionicons
              name="md-arrow-back-sharp"
              size={25}
              color="black"
              onPress={() => navigation.goBack()}
            />
            <View style={styles.searchContainer}>
              <Octicons name="search" size={20} color="black" />
              <Text style={styles.searchText}>Search</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderTitle}>{name}</Text>
              <View style={styles.row}>
                <MaterialIcons name="share" size={24} color="black" />
                <AntDesign
                  name={toggleWishlist ? "heart" : "hearto"}
                  size={toggleWishlist ? 28 : 24}
                  color={toggleWishlist ? "red" : "black"}
                  onPress={toggleWishlistIcon}
                />
              </View>
            </View>
            <View>
              <View style={styles.menuListRating}>
                <MaterialIcons name="stars" size={24} color="green" />
                <Text
                  style={{ marginLeft: 3, fontSize: 17, fontWeight: "400" }}
                >
                  {rating}
                </Text>
                <Text style={{ marginLeft: 3 }}>-</Text>
                <Text
                  style={{ marginLeft: 3, fontSize: 15, fontWeight: "600" }}
                >
                  {time} mins
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Cuisines :
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: "gray",
                    textTransform: "capitalize",
                  }}
                >
                  {cuisines}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  marginVertical: 13,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Outlet :
                </Text>
                <Text
                  style={{
                    textTransform: "capitalize",
                    color: "#000",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {address}
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>22mins</Text>
                <Text
                  style={{
                    textTransform: "capitalize",
                    color: "gray",
                    fontSize: 18,
                  }}
                >
                  Home
                </Text>
              </View>
              <Text
                style={{
                  height: 1,
                  borderWidth: 0.6,
                  backgroundColor: "gray",
                  marginTop: 3,
                }}
              ></Text>
            </View>
            <View style={styles.cardFooter}>
              <MaterialCommunityIcons
                name="bike-fast"
                size={28}
                color="orange"
                style={{ marginRight: 4 }}
              />
              <Text style={styles.cardFooterText}>0-3 Kms |</Text>
              <Text style={styles.cardFooterText2}>
                {" "}
                35₹ Delivery fee will be apply{" "}
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            marginVertical: 10,
            fontSize: 20,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Menu
        </Text>
        <Text
          style={{
            height: 1,
            borderWidth: 0.6,
            marginTop: 3,
            borderColor: "gray",
          }}
        ></Text>
        <ScrollView>
          {menu?.map((item, index) => (
            <FoodItem food={item} key={index} />
          ))}
     
        </ScrollView>
      </ScrollView>
      <TouchableOpacity
        onPress={toggleModal}
        style={{
          height: 70,
          width: 70,
          backgroundColor: "#000",
          borderRadius: 35,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: totals>0 ? 100: 20 ,
          right: 20,
        }}
      >
        <MaterialIcons name="menu-book" size={24} color="white" />
        <Text style={{ color: "#fff" }}>MENU</Text>
      </TouchableOpacity>
      <Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
        <View
          style={{
            position: "absolute",
            bottom: 35,
            right: 10,
            backgroundColor: "#000",
            width: 250,
            height: 200,
            borderRadius: 10,
           
          }}
        >
          {menuList.map((menu, i) => (
            <View
              key={i}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text
                style={{ color: "#d0d0d0", fontSize: 20, fontWeight: "700" }}
              >
                {menu.name}
              </Text>
              <Text
                style={{
                  color: "#d0d0d0",
                  fontSize: 20,
                  fontWeight: "700",
                  backgroundColor: "green",
                  padding: 5,
                  borderRadius: 20,
                  textAlign: "center",
                  height: 40,
                  width: 40,
                }}
              >
                {menu.items.length}
              </Text>
            </View>
          ))}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza",
              }}
              style={{ width: 120, height: 90, resizeMode: "contain" }}
            />
          </View>
        </View>
      </Modal>
      {totals === 0 ? null : (
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 10,
            backgroundColor: "#00ab77",
            width: "90%",
            padding: 15,
            alignSelf: "center",
            borderRadius: 10,
            elevation:5
          }}
        >
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "600", fontSize: 16 }}
                >
                  {cart.length} Items |
                </Text>
                <Text
                  style={{ color: "#fff", fontWeight: "800", fontSize: 16 }}
                >
                  ₹{totals}
                </Text>
              </View>
              <Text style={{fontSize:14,color:'#fff',fontWeight:'600'}}>Extra Charges May apply!</Text>
            </View>
            <Pressable onPress={()=>navigation.navigate('Cart',{name,cart})}>
              <Text style={{fontSize:20,color:'#fff',fontWeight:'600'}}>View Cart</Text>
            </Pressable>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  topHeader: {
    height: 350,
    backgroundColor: "#b0c4de",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    marginTop: 15,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  searchText: {
    fontSize: 16,
    fontWeight: "400",
  },
  card: {
    elevation: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 250,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  cardHeaderTitle: {
    fontSize: 26,
    fontWeight: "700",
  },
  menuListRating: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    justifyContent: "space-between",
  },
  cardFooterText: {
    fontSize: 18,
    color: "black",
  },
  cardFooterText2: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
});
