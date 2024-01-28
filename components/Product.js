import { StyleSheet, View, Image, Text } from "react-native";

export function Product({ item }) {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={{
          uri: item.imgURL,
        }}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={{ height: 40 }}>
        <Text>{item.title}</Text>
      </View>
      <Text style={styles.price}>{item.price}</Text>
      {!item.inStock && <Text style={styles.stoktaYok}>STOKTA YOK</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#ECEFF1",
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    width: 170,
    marginLeft: 5,
  },
  price: {
    color: "#808080",
  },
  image: {
    height: 170,
    width: "100%",
    borderRadius: 10,
  },
  stoktaYok: {
    color: "red",
  },
});
