import { Image, StyleSheet, Text, View } from 'react-native'
import {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
     setTimeout(()=>{
        navigation.navigate('Home')
     },2000)
    }, [])
    
  return (
    <View style={styles.container}>
   {/* <Image
  source={require('../..assets/splash.png')}
  style={{width: 40, height: 40}}
/> */}
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})