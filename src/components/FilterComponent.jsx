import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
const FilterComponent = () => {
  return (
    <View style={styles.container}>
     <TouchableOpacity  style={styles.filterBtn}>
     <Text>Filter</Text>
     <Ionicons name="md-filter" size={18} color="black" />
     </TouchableOpacity>
     <TouchableOpacity  style={styles.filterBtn}>
     <Text>Sort by Price</Text>
    
     </TouchableOpacity>
     <TouchableOpacity  style={styles.filterBtn}>
     <Text>Sort by Rating</Text>
    
     </TouchableOpacity>
    </View>
  )
}

export default FilterComponent

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    filterBtn:{
        // width:100,
        flexDirection:'row',
        borderRadius:60,
        padding:10,
        elevation:4,
        backgroundColor:'whitesmoke',
        // borderWidth:2,
        gap:10,
        margin:10,
        justifyContent:"space-between",
        borderColor:'#dedede',
    }
})