import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Import the necessary navigation hook

const SearchScreen = () => {
  console.log("search page ");
  const navigation = useNavigation();

  const [textValue, setTextValue] = useState("");

  function displayValue1() {
    console.log("display :" + textValue);
    Alert.alert("Text says :" + textValue);
  }

  // Update this function to navigate to the "ImageDetect" page
  function navigateToImageDetect() {
    navigation.navigate("ImageDetect"); // Replace "ImageDetect" with the actual name of your ImageDetect screen
  }

  function onTxtChange() {
    console.log("heoooo");
  }

  return (
    <View>
      <View style={styles.container}>
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#757575"
        />
      </View>
      <Text style={styles.title}>Features</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToImageDetect}>
          <Text style={styles.buttonText}>Auto parts Recognition</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={onTxtChange}>
          parts Price Predictor
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  title: {
    marginLeft: 200,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    width: "48%", // Adjust as needed for the desired spacing
    height: 100,
    backgroundColor: "#00cec9",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default SearchScreen;
