import { Text, View, Pressable, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons
          name="format-list-checks"
          size={24}
          color="#D32F2F"
        />
        <Text style={styles.logoText}>TaskMate</Text>
      </View>

      <Pressable
        onPress={() => navigation.navigate("add")}
        style={styles.addTask}
      >
        <Text style={styles.btnTxt}>Add Task</Text>
      </Pressable>
    </View>
  );
};

export default Header;
