import { Stack, Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function TabLayout(){
  return(


     <Tabs
      screenOptions={{
      tabBarActiveTintColor: '#ff3d3dff',
      }}>

        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'flower' : 'flower-outline'} color={color} size={24}/>

            ),
          }}
        />
        
        <Tabs.Screen
          name="about"
          options={{
            title: 'Sobre',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'flower-pollen' : 'flower-pollen-outline'} color={color} size={24}/>

            ),
          }}
        />
    </Tabs>
  );
} 