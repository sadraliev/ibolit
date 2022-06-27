import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
const Button: React.FC = ({ children, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...props}>{children}</TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: 33,
    // height: 33,
    // backgroundColor: "#898585",
  },
});
