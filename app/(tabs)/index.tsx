import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <h1>𓆝 𓆟 𓆞 𓆝 𓆟</h1>
      <Text style={styles.text}>⋆. 𐙚˚࿔ Página Inicial 𝜗𝜚˚⋆</Text>
      <h1 >𓇼 ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ 𓇼</h1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bceaf4c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#3871c1',
  },

});
