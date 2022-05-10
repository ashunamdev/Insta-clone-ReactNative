import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { NavigationContainer } from "@react-navigation/native";
// import { Divider } from "react-native-elements";
import validUrl from 'valid-url'


const PlaceHolder_Img =
  "https://img.icons8.com/ios-glyphs/344/ffffff/add-image.png";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(220, "Caption has reached the character limit."),
});

const FormikPostUploader = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PlaceHolder_Img);
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
          console.log(values,"SAVED SUCCESSFULLY")
          navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              marginTop: 20,
              justifyContent: "space-between",
              flexDirection: "row",
              paddingBottom: 10,
              borderBottomWidth: 0.2,
              borderBottomColor: "gray",
            }}
          >
            <View
              style={{
                padding: 10,
                marginLeft: 20,
                borderWidth: 1,
                borderColor: "#fff",
                borderRadius: 10,
              }}
            >
              <Image
                source={{ uri:validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PlaceHolder_Img }}
                style={{
                  height: 70,
                  width: 70,
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ color: "white", fontSize: 16 }}
                placeholder="Write a caption..."
                placeholderTextColor={"gray"}
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          {/* <Divider width={0.2} orientation="vertical" /> */}
          <TextInput
            onChange={(e)=>setThumbnailUrl(e.nativeEvent.text)}
            style={{ color: "white", fontSize: 14 }}
            placeholder="Enter Image Url"
            placeholderTextColor={"gray"}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}
          <TouchableOpacity disabled={!isValid}  onPress={handleSubmit} >
            <View style={[styles.buttonContainer, { backgroundColor :isValid? "#0096FF": null , borderColor:isValid? null : "#fff" }]}>
              <Text style={{ color:isValid ?  "#fff": "#ababab" }}>Share</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 2,
    borderColor: "#fff",
    width:120,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:20,
    padding:10,
    marginTop:15
  },
});

export default FormikPostUploader;
