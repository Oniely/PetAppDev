import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Login from './App/LoginScreen/Login';

export default function App() {
  return (
    <View className="px-4 pt-14">
      <Image source={require('./assets/favicon.png')} className="w-6 h-6" />
      <View className="">
        <Login />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
