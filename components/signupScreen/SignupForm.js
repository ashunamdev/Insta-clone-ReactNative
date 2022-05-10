import {
    StyleSheet,
    Text,
    View,
    Alert,
    TextInput,
    TouchableOpacity,
    Pressable,
  } from "react-native";
  import React, { useState } from "react";
  import { FastField, Formik } from "formik";
  import * as Yup from "yup";
  import Validator from "email-validator";

const SignupForm = ({ navigation }) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required("An email is required"),
        username:Yup.string().required("A username is required"),
        password: Yup.string()
          .required()
          .min(6, "Your password has to have atleat 6 characters"),
      });

      const onSignup = async (email, password, userName) => {
        // try {
        //   await firebase.auth().signInWithEmailAndPassword(email, password);
        //   console.log("Login by firebase");
        // } catch (error) {
           
          Alert.alert(
            "Ready to login  ...",
            "\n\n...  Your account has been created",
            // "email :"+email,
            // "Password :"+password,
            // "userName :"+userName,
            [
              {
                text: "OK",
                onPress: () => navigation.goBack(),
                style: "cancel",
              },
            ]
          );
      };
  return (
    <View style={styles.wrapper}>
    <Formik
      initialValues={{ email: "",username:"", password: "" }}
      onSubmit={(values) => {
        onSignup(values.email, values.password, values.username);
      }}
      validationSchema={SignupFormSchema}
      validateOnMount={true}
    >
      {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
        <>
          <View
            style={[
              styles.inputField,
              {
                borderColor:
                  values.email.length < 1 || Validator.validate(values.email)
                    ? "#ccc"
                    : "#DD2A7B",
              },
            ]}
          >
            <TextInput
              placeholderTextColor="#888888"
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus={false}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
          </View>
          <View style={[styles.inputField,{
                borderColor:
                values.username
                    ? "#ccc"
                    : "#DD2A7B",
              },]}>
            <TextInput
              placeholderTextColor="#888888"
              placeholder="Username"
              autoCapitalize="none"
              textContentType="username"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
          </View>
          <View style={[styles.inputField,{
                borderColor:
                 1 > values.password.length || values.password.length > 6  
                    ? "#ccc"
                    : "#DD2A7B",
              },]}>
            <TextInput
              placeholderTextColor="#888888"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              autoFocus={false}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
          </View>
          {/* <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
            <Text style={{ color: "#6BB0F5" }}>Forgot Password</Text>
          </View> */}
          <Pressable
            titleSize={20}
            style={styles.button(isValid)}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
          <View style={styles.loginContainer}>
            <Text>Already have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: "#6BB0F5" }}>Log In</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Formik>
  </View>
  )
}

const styles = StyleSheet.create({
    inputField: {
      borderRadius: 4,
      borderColor: "#ababab",
      padding: 4,
      backgroundColor: "#FAFAFA",
      marginBottom: 10,
      borderWidth: 1.2,
    },
    wrapper: {
      marginTop: 50,
    },
    button: (isValid) => ({
      backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 42,
      borderRadius: 4,
      marginTop:40
    }),
    buttonText: {
      color: "#fff",
      fontWeight: "600",
      fontSize: 15,
    },
    loginContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      marginTop: 30,
    },
  });

export default SignupForm
