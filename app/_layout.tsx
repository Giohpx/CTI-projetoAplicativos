import { Stack } from "expo-router"; // Stack empilha uma tela sobre a outra

export default function RootLayout() {
  return(
  <Stack>
    <Stack.Screen name="index" options= {{ title: 'Bem vindo!' }} />
    <Stack.Screen name="about" options= {{ title: 'Sobre nós'}} />
  </Stack>
  );
}
