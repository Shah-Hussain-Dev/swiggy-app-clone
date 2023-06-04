import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import StackNavigator from './StackNavigator';
// import store from './src/redux/Store'
import store from './src/redux/Store';

export default function App() {
  return (
   <Provider store={store}>
     <View style={styles.container}>
    {/* <HomeScreen/> */}
    <StackNavigator/>
    </View>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
