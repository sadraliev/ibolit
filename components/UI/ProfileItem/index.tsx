import { Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

type Props = {
  text: string;
  icon?: React.ReactNode;
};

const ProfileItem: React.FC<Props> = ({ text, icon }) => {
  return (
    <View style={tw`flex flex-row items-center mx-2`}>
      {icon && icon}
      <Text style={tw`pl-1 text-gray-500`}>{text}</Text>
    </View>
  );
};

export default ProfileItem;
