import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Card: React.FC = ({ children }) => {
  return (
    <View style={styles.card}>
      <View>{children}</View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 0.2,
    marginVertical: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
