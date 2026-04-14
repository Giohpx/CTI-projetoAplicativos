import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require('@/assets/images/one-piece-logo-horizon-po0hlahswoowex3c.jpg'); 
export default function AboutScreen() {
  return (

    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source = {PlaceholderImage} style={styles.image}/>
      </View>
      <Text style={styles.text}>CONHECA OS NAVEGADORES DO OCEANO𓆩☠︎︎𓆪</Text>
     <Text style={styles.text}> MARINHA</Text>
      <Text style={styles.text2}> 🏴‍☠️ Os Piratas: liberdade acima de tudo

Os piratas são, basicamente, pessoas que chutaram o balde da vida normal e decidiram navegar sem regras.
Eles querem liberdade, aventuras e, claro, o maior tesouro do mundo: o One Piece.</Text>
     <Text style={styles.text}> PIRATAS</Text>
      <Text style={styles.text2}> ⚔️ Os Marinheiros: ordem, lei e muita dor de cabeça

Do outro lado estão os marinheiros (a Marinha), que trabalham para o Governo Mundial.
Eles querem manter a paz, prender piratas perigosos e impedir que o caos se espalhe.

A missão é nobre, mas... o mundo de One Piece é complicado.
Nem todo marinheiro é herói, e nem todo pirata é vilão — e é aí que a história fica divertida.</Text>
      <Link href="/" style = {styles.button}>Volte ao começo</Link>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9cfa8c4',
  },

  text: {
  color: '#4db8ff',
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 15,
  marginBottom: 10,
  textShadowColor: '#ffffff80',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 3,
},

text2: {  
  color: '#e3f2ff',
  fontSize: 13,
  textAlign: 'center',
  marginTop: 10,
  marginHorizontal: 20,
  lineHeight: 24,
  backgroundColor: '#e3aa25',
  padding: 10,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#e3aa25',
},
  imageContainer: {
  alignItems: 'center',
},

  image: {
  width: '100%',
  aspectRatio: 4, 
  borderWidth: 6,
  borderColor: '#e3aa25',
  },

  button: { 
    fontSize: 20,
    color: '#e3aa25',
    textAlign: 'center',
    marginTop: 20,
  },
});