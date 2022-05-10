import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm';

const INSTAGRAM_LOGO =
  "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png";


const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={{ uri: INSTAGRAM_LOGO, height: 90, width: 90 }} />
        </View>
        <SignupForm navigation={navigation}/>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: 50,
      paddingHorizontal: 12,
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 60,
    },
  });

export default SignupScreen

