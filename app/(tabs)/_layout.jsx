import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot,Stack } from 'expo-router';

const index = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown: false}}/>
    </Stack>
  )
}

export default index

const styles = StyleSheet.create({
  View:{
    display:'flex',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})