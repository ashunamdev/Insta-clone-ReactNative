import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginTop:10 ,marginBottom:5  }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS?.map((story, index) => (
          <View key={index} style={{alignItems:"center",paddingHorizontal:2}}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{ color: "white",fontSize:12 }}>
            {story?.user?.length > 9 ? story?.user?.slice(0,8).toLocaleLowerCase()+"..." : story?.user.toLocaleLowerCase() }</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  ); 
};

const styles = StyleSheet.create({
  story: {
    width:70,
    height: 70,
    borderRadius: 50,
    marginHorizontal: 3,
    marginBottom:3,
    borderWidth: 3,
    borderColor: "#C13584",
  },
});

export default Stories;
