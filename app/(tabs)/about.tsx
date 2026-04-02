import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Navegando pela página..</Text>
      <h1>⊹ ࣪ ﹏𓊝﹏𓂁﹏⊹ ࣪ ˖ 𓇼 ⋆.˚ 𓆝⋆.˚ 𓇼</h1>
      <Link href="/" style = {styles.button}>Volte ao começo</Link>
      <h1>⋆༺𓆩☠︎︎𓆪༻⋆</h1>
    </View>
    
  );
}
const styles = StyleSheet.create({
    
   container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b3d9f1',
  },
  text:{
    color: '#26508a',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#000000',
  }
});
