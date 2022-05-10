import { View, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.adroidSafeArea,{backgroundColor:'black', flex:1}]}>
      <AddNewPost navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    adroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 35 : 0
    },
})

export default NewPostScreen