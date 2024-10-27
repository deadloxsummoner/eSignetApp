import { StatusBar } from "react-native-web"
import { StyleSheet, Text, View } from "react-native"
import { Link } from "expo-router"


export default function App(){
    return(
        <View style={styles.View}>
            
            <StatusBar style="auto"/>
            <Text style={styles.TextHeader}>weh</Text>
            <Link href="/profile" style={{color:'blue'}}> Go to Profile</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    View:{
      display:'flex',
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },

    TextHeader: {
        fontWeight:"bold",
        fontSize:"20px",
    }
  })