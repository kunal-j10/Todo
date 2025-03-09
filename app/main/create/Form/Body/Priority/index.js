import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const PRIORITY_MAPPING = [
  {
    label: "Low",
    value: "low",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "High",
    value: "high",
  },
];

const Priority = (props) => {
  const { setTodoData = () => {}, todoData } = props || {};
  const handlePress = (val) => {
    setTodoData((prev) => ({ ...prev, priority: val?.value }));
  };

  return (
    <View style={styles.container}>
      {PRIORITY_MAPPING?.map((item) => (
        <Pressable
          onPress={() => handlePress(item)}
          style={{
            ...styles.priority_item,
          }}
          key={item.value}
        >
          <View
            style={{
              ...styles.check,
              ...(todoData?.priority === item.value ? styles.active : {}),
            }}
          />
          <Text style={styles.txt}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Priority;
