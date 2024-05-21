import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
   return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar backgroundColor={Colors['dark-gray']} style='light' />
     </>
   )
}

export default AuthLayout