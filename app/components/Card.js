import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Text from "./Text";

function Card({ title, price, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <Text numberOfLines={1} style={styles.title}>{title}</Text>
        <Text numberOfLines={2} style={styles.price}>{price}</Text>        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
