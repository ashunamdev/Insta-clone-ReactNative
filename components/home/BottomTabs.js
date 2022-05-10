import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/344/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/344/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/344/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/344/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/344/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/344/ffffff/instagram-reel.png",
  },
  {
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/344/ffffff/shopping-bag-full.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/344/ffffff/shopping-bag-full.png",
  },
  {
    name: "Profile",
    active:
      "https://media-exp1.licdn.com/dms/image/C4E03AQGSWPCUE0CFUg/profile-displayphoto-shrink_800_800/0/1636529729210?e=1657152000&v=beta&t=FlKRep5CRfVERSHiCIEBoJAaPuh-ZiGUegjV-HXJSUE",
    inactive:
      "https://media-exp1.licdn.com/dms/image/C4E03AQGSWPCUE0CFUg/profile-displayphoto-shrink_800_800/0/1636529729210?e=1657152000&v=beta&t=FlKRep5CRfVERSHiCIEBoJAaPuh-ZiGUegjV-HXJSUE",
  },
];

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} style={[styles.icon , icon.name === "Profile" ? styles.profilePic() : null , activeTab === "Profile" && icon.name === activeTab ? styles.profilePic(activeTab) : null ]} />
    </TouchableOpacity>
  );
  return ( 
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon icon={icon} />
        ))}
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 70,
    paddingTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  wrapper:{
    position:"absolute",
    width:"100%",
    bottom:"0%",
    zIndex:999,
    backgroundColor:"#000"
  },
  profilePic:(activeTab="")=>({
      borderRadius:50,
      borderWidth :(activeTab === "Profile" ? 2:0),
      borderColor:"white",
  })
});
