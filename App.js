import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import data from "./data.json";
import { useState } from "react";
import { Product } from "./components/Product";

export default function App() {
  const [newData, setNewData] = useState(data);
  const renderProducts = ({ item }) => {
    return <Product item={item} />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>NATIVE STORE</Text>
      <TextInput
        placeholder="Ara..."
        style={styles.input}
        onChangeText={(e) => {
          if (e) {
            const newArray = data.filter((item) =>
              item.title.toLocaleLowerCase().includes(e.toLocaleLowerCase())
            );
            setNewData(newArray);
          } else {
            setNewData(data);
          }
        }}
      />
      <FlatList
        data={newData}
        renderItem={renderProducts}
        style={styles.flat}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
    flex: 1,
  },
  header: {
    color: "#800080",
    fontSize: 40,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#ECEFF1",
    color: "#B7B9BC",
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
});
