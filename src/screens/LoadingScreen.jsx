import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { clearCart } from '../redux/CartReducer'

const LoadingScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
useEffect(()=>{
setTimeout(()=>{
    navigation.navigate('OrderSuccess')
    dispatch(clearCart());
},2000)
},[])
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../../assets/orderSuccess.gif')} style={{height:200,width:200}}/>
      <Text style={{fontSize:25,fontWeight:'700',marginVertical:10}}>Order Received Successfully!</Text>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})