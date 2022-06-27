import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigation";
import Colors from "../constants/Colors";

import { Shadow } from "react-native-shadow-2";
import Card from "../components/UI/Card";
import ProfileItem from "../components/UI/ProfileItem";
import tw from "twrnc";
import ProfileCard from "../components/ProfileCard";

type MainScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Main"
>;

type Props = {
  navigation: MainScreenNavigationProps;
};

const MainScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "TB Web Solution",
      headerStyle: {
        backgroundColor: Colors.light.background,
      },
      headerTitleStyle: {
        color: tw.color("text-white"),
      },
      headerLeft: () => (
        <View style={styles.btnContainer}>
          <TouchableOpacity>
            <Ionicons name="menu" size={25} color={tw.color("text-white")} />
          </TouchableOpacity>
        </View>
      ),
      headerRight() {
        return (
          <View style={styles.headerRight}>
            <View style={styles.btnContainer}>
              <TouchableOpacity>
                <AntDesign
                  name="search1"
                  size={25}
                  color={tw.color("bg-white")}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.btnContainer,
                backgroundColor: "red",
                borderRadius: 5,
              }}
            >
              <TouchableOpacity>
                <AntDesign name="plus" size={25} color={tw.color("bg-white")} />
              </TouchableOpacity>
            </View>
          </View>
        );
      },
    });
  }, []);

  return (
    <View style={tw`h-full`}>
      <ProfileCard
        fullName="ivan invanov"
        gender="Male"
        age={100}
        weight={120}
      />
      <ScrollView>
        <Card>
          <Text style={tw`bg-blue-100`}>Profle</Text>
        </Card>
        <Card>
          <Text style={tw`bg-blue-100`}>Profle</Text>
        </Card>
        <Card>
          <Text style={tw`bg-blue-100`}>Profle</Text>
        </Card>
        <Text style={tw`bg-blue-100`}>Prescriptions</Text>
        <Text style={tw`bg-blue-100`}>Commentary</Text>
        <Text style={tw`bg-blue-100`}>controller</Text>
      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  headerRight: {
    width: 80,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  btnContainer: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
