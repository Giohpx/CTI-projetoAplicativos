import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require('@/assets/images/praia-do-mar-com-navio-pirata-quebrado-ao-por-do-sol_107791-17181.avif'); 

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source = {PlaceholderImage} style={styles.image}/>
      </View>
      <Text style={styles.text}>O TESOURO PERDIDO NO MAR</Text>
      <Text style={styles.text2}>ONE PIECE</Text>
      <Text style={styles.text3}>Arrr, marujo!
One Piece é a maior loucura que já navegou pelos sete mares!
A história segue Monkey D. Luffy, um pirata de borracha com mais fome que um tubarão em dieta. Ele sonha em virar o Rei dos Piratas, o maior título que existe!

Ele e sua tripulação — os Chapéus de Palha — viajam de ilha em ilha enfrentando monstros, marinheiros encrenqueiros, piratas perigosos e até uns malucos que nem o mar explica.

Tudo isso atrás do lendário tesouro ONE PIECE, deixado pelo maior pirata de todos os tempos, Gol D. Roger.</Text>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#facca9c4',

  },
text: {
  color: '#e3aa25',
  fontSize: 26,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 10,
  textShadowColor: '#5a3d00',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 4,
  letterSpacing: 2,
},

text2: {
  color: '#e3aa25',
  fontSize: 22,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 10,
  letterSpacing: 3,
  textShadowColor: '#5a3d00',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 3,
},

text3: {
  color: '#ffffff',
  fontSize: 16,
  textAlign: 'center',
  marginHorizontal: 20,
  marginTop: 10,
  lineHeight: 24,
  backgroundColor: '#00000040',
  padding: 12,
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
  borderColor: '#d2a62c',
  },
});
