import { View, Text, TextInput, Pressable, StatusBar } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";

import useConfigureTask from "./hooks/useConfigureTask";
import styles from "./styles";

const AddTaskScreen = ({ route }) => {
  const { isEditMode, errors, todoData, setTodoData, handleSubmit, goBack } =
    useConfigureTask({
      defaultValue: route?.params?.defaultValue || {},
    });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </Pressable>

        <Text style={styles.headerTitle}>
          {isEditMode ? "Edit Task" : "Add Task"}
        </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter task title"
          value={todoData.title}
          onChangeText={(val) =>
            setTodoData((prev) => ({ ...prev, title: val }))
          }
        />
        {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input]}
          height={100}
          placeholder="Enter task description"
          value={todoData.description}
          numberOfLines={4}
          onChangeText={(val) =>
            setTodoData((prev) => ({ ...prev, description: val }))
          }
          multiline
        />
        {errors.description && (
          <Text style={styles.errorText}>{errors.description}</Text>
        )}

        <Text style={styles.label}>Priority</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={todoData.priority}
            onValueChange={(val) =>
              setTodoData((prev) => ({ ...prev, priority: val }))
            }
          >
            <Picker.Item label="Low" value="low" />
            <Picker.Item label="Medium" value="medium" />
            <Picker.Item label="High" value="high" />
          </Picker>
        </View>
        {errors.priority && (
          <Text style={styles.errorText}>{errors.priority}</Text>
        )}

        <Pressable onPress={handleSubmit} style={styles.addButton}>
          <Text style={styles.addButtonText}>
            {isEditMode ? "Edit Task" : "Add Task"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddTaskScreen;
