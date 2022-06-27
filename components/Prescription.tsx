import { Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Card from "./UI/Card";
import tw from "twrnc";
import PrescriptionItem from "./PrescriptionItem";
type Props = {
  name: string;
  formulation: string;
  dose: string;
  course: number;
};

const Prescription: React.FC<Props> = ({
  name,
  formulation,
  dose,
  course = 0,
}) => {
  return (
    <View style={tw`my-2`}>
      <Card>
        <View style={tw`flex flex-row justify-between items-center`}>
          <Text style={tw`text-xl font-bold`}>{name}</Text>
          <Feather name="edit" size={24} color={tw.color("text-rose-600")} />
        </View>
        <PrescriptionItem name="Formulation:" description={formulation} />
        <PrescriptionItem name="Dose:" description={dose} />
        <PrescriptionItem name="Course:" description={`${course} day`} />
      </Card>
    </View>
  );
};

export default Prescription;
