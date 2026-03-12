import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>página inicial</Text>
      <Link href="/about" style = {styles.button}>Página sobre nós</Link>

    </View>
  );
}
  
const styles = StyleSheet.create({
    
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
  },
  text:{
    color: 'black',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  }
});
