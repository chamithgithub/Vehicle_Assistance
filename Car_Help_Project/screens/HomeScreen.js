import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

// Import the previously created form component
import AddItemScreen from "./AddItemScreen";

// Import the local image
import PostImageLocal from "../assets/caraa.png";
import PostImageLocal2 from "../assets/car88.png";
import PostImageLocal3 from "../assets/car33.png";
import PostImageLocal4 from "../assets/carac.png";
import PostImageLocal5 from "../assets/car77.png";

const HomeScreen = () => {
  const routeData = useRoute();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Fetch or load existing food posts from a database or API
    // For now, using dummy data for demonstration
    setFoods([
      {
        id: 1,
        PostImage: PostImageLocal, // Use the imported local image
        foodName: "Tire puncture repair",
        location: "Kalutara",
        description: "1>Remove the tire from the rim. 2> A thorough inspection of both the inside and outside of the tire. ..",
        contact: "071 6557889",
        isFree: true,
        amount: "100",
      },
      {
        id: 2,
        PostImage: PostImageLocal2, // Use the imported local image
        foodName: "car wash",
        location: "Galle",
        description: "1>Gather materials 2>Pre-rinse car 3>Clean wheels, tires 4>Soapy scrub",
        contact: "077 3257889",
        isFree: false,
        amount: "500",
      },
      {
        id: 3,
        PostImage: PostImageLocal3, // Use the imported local image
        foodName: "Tire puncture repair",
        location: "matara",
        description: "1>Check coolant level 2>Inspect radiator 3>Look for leaks 4>Check thermostat 5>Cooling system test 6>Flush radiator",
        contact: "079 3257889",
        isFree: true,
        amount: "100",
      },
      {
        id: 4,
        PostImage: PostImageLocal4, // Use the imported local image
        foodName: "Car auto AC problem Repair",
        location: "Colombo",
        description: "1>Check AC fuse 2>Inspect refrigerant 3>Clean condenser 4>Check compressor 5>Examine belt 6>Test AC relay ...",
        contact: "070 9997889",
        isFree: false,
        amount: "1000",
      },
      {
      id: 5,
      PostImage: PostImageLocal5, // Use the imported local image
      foodName: "Car Battery low problem",
      location: "Wadduwa",
      description: "Check battery voltage...",
      contact: "070 1234567",
      isFree: false,
      amount: "1200",
    },
    ]);
  }, []);

  const handlePostFood = () => {
    // Check if there's new food data from AddItemScreen
    const newFood = routeData.params?.newFood;
    if (newFood) {
      // Implement logic to post a new food
      // For now, adding the new food to the existing list
      setFoods((prevFoods) => [...prevFoods, { id: Date.now(), ...newFood }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>

      <FlatList
        data={foods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.foodCard}>
            <Image
              source={item.PostImage} // Use the local image directly
              style={styles.PostImage}
            />
            <Text style={styles.foodName}>{item.foodName}</Text>
            <Text>{item.location}</Text>
            <Text>{item.description}</Text>
            <Text>{item.contact}</Text>
            <Text>
              {item.isFree ? "Available for Free" : `Amount: ${item.amount}`}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.postButton}
        onPress={() => handlePostFood()}
      >
        <Text style={styles.postButtonText}>Post New</Text>
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
  PostImage: {
    width: "50%",
    height: 200, // Adjust height as per your design
    resizeMode: "cover", // or 'contain' or 'stretch' as per your design
    marginBottom: 8,
    borderRadius: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  foodCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  postButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  postButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;
