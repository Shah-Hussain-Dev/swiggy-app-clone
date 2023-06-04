import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FoodListMenu from './FoodListMenu'
import { AntDesign } from '@expo/vector-icons';

const FoodItem = ({food}) => {
  const [selected,setSelected] = useState(["Recommended",])

  //according logic
  const handleItemSelected = (item)=>{
    const itemSelected = selected.find(c=>c=== item);
    if(itemSelected){
      setSelected(selected.filter(selectedItem=>selectedItem!==item))
    }else{
      setSelected([...selected,item]);
    }

  }
  return (
    <View style={{margin:10,elevation:10}}>
     <Pressable style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}
     onPress={()=>handleItemSelected(food.name)}
     >
     <Text style={{fontSize:25,fontWeight:'700'}}>{food.name} ({food.items.length})</Text>
     <AntDesign name="down" size={24} color="black" />
     </Pressable>
    {selected.includes(food.name) ? (
      food.items.map((fooditem,index)=>(
     <FoodListMenu foodlist={fooditem} key={index}/>
    ))
    ):(
      null
    )}
    
    </View>
  )
}

export default FoodItem

const styles = StyleSheet.create({})