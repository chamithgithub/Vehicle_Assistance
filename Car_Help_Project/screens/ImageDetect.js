import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export default function ImageDetect() {
  const [image, setImage] = useState(null);
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("file", {
        uri: image,
        name: "image.jpg",
        type: "image/jpeg", // adjust the image type if necessary
      });

      const response = await axios.post(
        "http://127.0.0.1:8000/uploadfile/",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (!response.data) {
        throw new Error("Failed to upload image");
      }

      setObjects(response.data.objects);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.buttonContainer}>
        <Button title="Pick from Gallery" onPress={pickImageFromGallery} />
        <Text style={styles.orText}>-- OR --</Text>
        <Button title="Take a Photo" onPress={pickImageFromCamera} />
      </View>
      {image && <Button title="Upload Image" onPress={uploadImage} />}
      {objects.length > 0 && (
        <View style={styles.objectsContainer}>
          <Text>Detected Objects:</Text>
          {objects.map((object, index) => (
            <Text key={index}>
              {object[0]} - Confidence: {object[1]}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  buttonContainer: {
    flexDirection: "column",
    marginVertical: 10,
    padding: 20,
    justifyContent: "space-around",
  },
  orText: {
    alignSelf: "center",
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  objectsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
