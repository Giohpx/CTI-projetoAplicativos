import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function TabLayout() {
  return (

    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        headerStyle: { backgroundColor: '#6299f0' },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#6299f0' },
      }}
    >

      
      <Tabs.Screen
  name="index"
  options={{
    title: 'Home',
    tabBarIcon: ({ focused }) => (
  <EvilIcons name="heart" size={24} color={focused ? "#322ac9" : "#ffffff"} />    ),
  }}
/>
<Tabs.Screen
  name="about"
  options={{
    title: 'About',
    tabBarIcon: ({ focused }) => (
  <AntDesign name="heart" size={24} color={focused ? "#322ac9" : "#ffffff"} />    ),
  }}
/>
    </Tabs>
  );
}