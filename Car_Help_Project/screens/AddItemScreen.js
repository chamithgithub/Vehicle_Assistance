import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Switch,
} from "react-native";

const AddItemScreen = () => {
  const [image, setImage] = useState(null);
  const [PostImage, setPostImage] = useState("");
  const [PostName, setPostName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [isFree, setIsFree] = useState(true);
  const [amount, setAmount] = useState("");

  const navigation = useNavigation();

  const handleImagePicker = () => {
    const options = {
      title: "Select Food Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        setPostImage(response.uri);
      }
    });
  };

  const handleSubmit = () => {
    const newFood = {
      PostImage,
      PostName,
      location,
      description,
      contact,
      isFree,
      amount,
    };

    console.log("Form submitted:", newFood);
    navigation.navigate("Home", { newFood });
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Image:</Text>
      <TouchableOpacity onPress={pickImage}>
      <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      </TouchableOpacity>

      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        value={PostName}
        onChangeText={(text) => setPostName(text)}
      />

      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <Text style={styles.label}>Contact:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter contact information"
        value={contact}
        onChangeText={(text) => setContact(text)}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Available for Free:</Text>
        <Switch value={isFree} onValueChange={(value) => setIsFree(value)} />
      </View>

      {!isFree && (
        <>
          <Text style={styles.label}>Amount:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            value={amount}
            onChangeText={(text) => setAmount(text)}
            keyboardType="numeric"
          />
        </>
      )}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F0F0F0",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AddItemScreen;
