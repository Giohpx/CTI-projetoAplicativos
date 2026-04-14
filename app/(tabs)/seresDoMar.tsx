import { Text, View, StyleSheet, FlatList } from "react-native";
import { Image } from "expo-image";

const PlaceholderImage = require('@/assets/images/praia-do-mar-com-navio-pirata-quebrado-ao-por-do-sol_107791-17181.avif'); 

const imagens = [
  {
    img: require('@/assets/images/images (4).jpeg'),
    titulo: "Chapeu de palha 🏴‍☠️",
    descricao: "Tripulação do chapéu de palha que busca o tesouro lendário, o One Piece, para se tornar o Rei dos Piratas. Liderados por Monkey D. Luffy, eles enfrentam desafios épicos e fazem amizades inesquecíveis em sua jornada pelos mares."
  },
  {
    img: require('@/assets/images/images (5).jpeg'),
    titulo: "Almirantes ⚔️",
    descricao: "Protetores da justiça e da ordem, os almirantes são os mais poderosos oficiais da Marinha. Eles comandam frotas inteiras e enfrentam os piratas mais perigosos do mundo."
  },
  {
    img: require('@/assets/images/images (6).jpeg'),
    titulo: "Tripulacao do barba branca ⚓",
    descricao: "A tripulação do Barba Branca, liderada por Edward Newgate, é uma das mais temidas e respeitadas do mundo de One Piece. Conhecidos por sua força e lealdade, eles buscam o tesouro lendário, o One Piece, para alcançar a liberdade absoluta nos mares."
  },
  {
    img: require('@/assets/images/images (7).jpeg'),
    titulo: "Tesouros 🔥",
    descricao: "Esse tesouro é tão valioso que pode mudar o mundo! Está escondido nas profundezas esperando por um navegador corajoso o suficiente para encontrá-lo."
  },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image}/>
      </View>

      <Text style={styles.text}>OS NAVEGANTES DO MAR</Text>
      <Text style={styles.text2}>ONE PIECE</Text>

      <FlatList
        data={imagens}
        numColumns={2}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.galeriaImagem} />
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            <Text style={styles.cardDescricao}>{item.descricao}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9cfa8c4',
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

  card: {
    width: '48%',
    margin: '1%',
    backgroundColor: '#fff3d4',
    borderRadius: 12,
    padding: 5,
    borderWidth: 2,
    borderColor: '#d2a62c',
  },

  galeriaImagem: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },

  cardTitulo: {
    color: '#b8860b',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },

  cardDescricao: {
    color: '#5a3d00',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
  },
});