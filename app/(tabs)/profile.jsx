import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    View:{
        backgroundColor:'#222',
        height:'100%',
    },

    Text:{
        color:'#FFF',

    }
})