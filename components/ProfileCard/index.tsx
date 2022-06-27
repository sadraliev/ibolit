import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Card from "../UI/Card";
import ProfileItem from "../UI/ProfileItem";
import tw from "twrnc";

type Props = {
  fullName: string;
  gender: "Female" | "Male";
  age: number;
  weight: number;
};

const ProfileCard: React.FC<Props> = ({
  fullName = "john doe",
  gender = "Male",
  age = 21,
  weight = 10,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const getInitials = (fullName: string): string => {
    const firsName = fullName.split(" ")[0].charAt(0).toUpperCase();
    const lastName = fullName.split(" ")[1].charAt(0).toLocaleUpperCase();
    return firsName + lastName;
  };
  return (
    <View style={{ display: isOpen ? "flex" : "none" }}>
      <Card>
        <View style={tw`flex flex-row justify-between items-center py-1`}>
          <Text style={tw`text-2xl`}>On treatment</Text>
          <TouchableOpacity onPress={() => setIsOpen(false)}>
            <View style={styles.btnContainer}>
              <TouchableOpacity>
                <AntDesign
                  name="close"
                  size={25}
                  color={tw.color("text-gray-500")}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
        <View style={tw`flex flex-row`}>
          <View
            style={tw`w-16 h-16 rounded-full bg-teal-600 flex justify-center items-center`}
          >
            <Text style={tw`text-2xl text-white`}>{getInitials(fullName)}</Text>
          </View>
          <View style={tw`ml-4`}>
            <View>
              <Text style={tw`text-xl capitalize`}>{fullName}</Text>
            </View>
            <View style={tw`flex flex-row py-2`}>
              <ProfileItem
                text={`${gender}, ${age}y.o`}
                icon={
                  <FontAwesome
                    name="venus"
                    size={14}
                    color={tw.color("text-gray-300")}
                  />
                }
              />
              <ProfileItem
                text={`${weight} kg`}
                icon={
                  <FontAwesome5
                    name="weight"
                    size={14}
                    color={tw.color("text-gray-300")}
                  />
                }
              />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  btnContainer: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    height: 80,
  },
});
