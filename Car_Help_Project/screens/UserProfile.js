import React, { useState } from "react";
import {
  View,
  Image,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const UserProfile = () => {
  const [image, setImage] = useState(null);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedName, setEditedName] = useState("");
  // Add similar state variables for other fields

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const user = {
    name: "John Doe",
    username: "john_doe",
    email: "john.doe@example.com",
    profileImage:
      "https://pixabay.com/vectors/icon-user-person-symbol-people-1633249/", // Replace with the actual image URL
  };

  const handleEditProfile = () => {
    setEditModalVisible(true);
  };

  const saveChanges = () => {
    // Implement logic to save changes to the backend or local storage
    console.log("Changes saved");
    // Update user details and hide the modal
    setEditModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagePickerContainer}>
        {image && <Image source={{ uri: image }} style={styles.pickedImage} />}
        <Text></Text>
        <Button title="Add Image" onPress={pickImage} />
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: user.profileImage }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Edit Profile Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        onRequestClose={() => setEditModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text>Edit Profile</Text>
          <TextInput
            style={styles.input}
            placeholder="New Name"
            onChangeText={(text) => setEditedName(text)}
          />
          {/* Add similar TextInput components for other fields */}
          <Button title="Save Changes" onPress={saveChanges} />
          <Button
            title="Cancel"
            onPress={() => setEditModalVisible(false)}
            color="red"
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F0F0F0",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: "#757575",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#757575",
  },
  editButton: {
    backgroundColor: "#2196F3",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  editButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  imagePickerContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  pickedImage: {
    width: 200,
    height: 200,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: 200,
  },
});
export default UserProfile;
