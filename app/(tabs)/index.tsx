import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require('@/assets/images/55369954-uma-gaivota-subindo-sobre-uma-vibrante-oceano-panorama-debaixo-uma-brilhante-azul-ceu-com-fofo-nuvens-foto.jpg'); 

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source = {PlaceholderImage} style={styles.image}/>
      </View>
      <Text style={styles.text}>𓆝 𓆟 𓆞 𓆝 𓆟</Text>
      <Text style={styles.text}>⋆. 𐙚˚࿔ Página Inicial 𝜗𝜚˚⋆</Text>
      <Text style={styles.text}>𓇼 ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ 𓇼</Text>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b1f6fae3',

  },
  text: {
    color: '#3871c1',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
  alignItems: 'center',
},

  image: {
  width: '100%',
  aspectRatio: 4, 
  borderWidth: 6,
  borderColor: '#34fff5',
  },
});
