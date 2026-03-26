import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#f53dff',
      }}
    >
      
      <Tabs.Screen
  name="index"
  options={{
    title: 'Home',
    tabBarIcon: ({ color, focused }) => (
      <MaterialCommunityIcons
        name={focused ? "folder-home" : "folder-home-outline"}
        size={24}
        color={color}
       />
      ),
    }}
  />
      
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons>
              <AntDesign name="book" size={24} color="red" />
            </MaterialCommunityIcons>
          ),
        }}
      />
    </Tabs>

  );
}