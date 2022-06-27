import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigation";
import Colors from "../constants/Colors";
import tw from "twrnc";

import Card from "../components/UI/Card";
import ProfileCard from "../components/ProfileCard";
import Prescription from "../components/Prescription";

type MainScreenNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Main"
>;

type Props = {
  navigation: MainScreenNavigationProps;
};

const MainScreen: React.FC<Props> = ({ navigation }) => {
  const [prescriptions, setprescriptions] = React.useState([
    {
      id: 1,
      name: "Rifamcipin",
      formulation: "100 mg tabs",
      dose: "1 tab three times a day",
      course: 10,
    },
    {
      id: 2,
      name: "Ethambutoln",
      formulation: "PAS sodium salt (equivalent to 4g PAS acid), sachet",
      dose: "3 -3.5 g two times a day",
      course: 14,
    },
    {
      id: 3,
      name: "Levofloxacin",
      formulation: "100mg  dispersible tab",
      dose: "3 or 4 tab a day",
      course: 21,
    },
  ]);

  React.useEffect(() => {
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
      <View>
        <View style={tw`mt-2`}>
          <Card>
            <Text style={tw`text-2xl text-center font-bold`}>
              Recommended for HR-TB
            </Text>
            <TouchableOpacity>
              <View
                style={tw`flex flex-row justify-center items-center border-2 rounded border-rose-500 py-2 my-4`}
              >
                <AntDesign
                  name="plus"
                  size={24}
                  color={tw.color("text-rose-600")}
                />
                <Text style={tw`ml-2 text-rose-700 font-bold`}>
                  Add prescription
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <FlatList
                keyExtractor={item => item.name}
                data={prescriptions}
                renderItem={({ item }) => (
                  <Prescription
                    name={item.name}
                    formulation={item.formulation}
                    dose={item.dose}
                    course={item.course}
                  />
                )}
              />
              <Card>
                <Text style={tw`bg-blue-100`}>Profle</Text>
              </Card>
            </View>
          </Card>
        </View>
      </View>
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
