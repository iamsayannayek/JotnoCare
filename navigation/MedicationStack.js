import { createStackNavigator } from "@react-navigation/stack";
import AddMedication from "../components/Medicine/AddMedication";
import MedicationForm from "../components/Medicine/MedicationForm";

const Stack = createStackNavigator();

const MedicationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddMedication"
        component={AddMedication}
        options={{ headerTitle: "Add Medicine" }}
      />
      <Stack.Screen
        name="MedicationForm"
        component={MedicationForm}
        options={{ headerTitle: "Medication Details" }}
      />
    </Stack.Navigator>
  );
};

export default MedicationStack;
