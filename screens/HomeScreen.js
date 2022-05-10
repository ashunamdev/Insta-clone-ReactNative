import { View, Text, SafeAreaView ,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import  Header  from '../components/home/Header'
import  Stories  from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import BottomTabs, {bottomTabIcons} from '../components/home/BottomTabs'

const HomeScreen = ({ navigation }) => {
  return (
      <SafeAreaView style={[styles.adroidSafeArea,styles.container]}>
      <Header navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Stories />
          {POSTS.map((post,index)=> (
              <Post post={post} key={index}/>
          ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
     </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    adroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 35 : 0
    },
    container:{
        backgroundColor:"black",
        flex:1,
    }
})

export default HomeScreen;