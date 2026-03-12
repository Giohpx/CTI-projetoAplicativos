import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre nós</Text>
      <Link href="/" style = {styles.button}>Página Inicial</Link>
    </View>
  );
}


  
const styles = StyleSheet.create({
    
   container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  text:{
    color: 'pink',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  }
});
