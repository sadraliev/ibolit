import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

type Props = {
  name: string;
  description: string;
};

const PrescriptionItem: React.FC<Props> = ({ name, description }) => {
  return (
    <View style={tw`flex flex-row my-2 items-center`}>
      <View style={tw`flex-1`}>
        <Text style={tw`text-lg text-gray-500`}>{name}</Text>
      </View>
      <View style={tw`flex-2 text-2xl`}>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default PrescriptionItem;

const styles = StyleSheet.create({});
