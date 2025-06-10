import { Pressable, Text, View } from "react-native";
import { Checkbox } from "react-native-paper";
import useCardActions from "../hooks/useCardActions";
import styles from "./styles";

const Card = (props) => {
  const {
    title = "",
    description = "",
    priority = "",
    completed = false,
  } = props?.item || {};

  const { onDelete, onEdit, onMarkComplete } = useCardActions(props);

  return (
    <View style={styles.card_elevation}>
      <View style={styles.container}>
        <View style={styles.head}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>
          <View style={styles.head_right}>
            <Pressable onPress={onEdit} style={styles.button}>
              <Text style={styles.buttonText}>Edit</Text>
            </Pressable>
            <Pressable onPress={onDelete} style={styles.button}>
              <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.body}>
          <Text style={styles.desc}>{description}</Text>
        </View>

        <Text style={styles.priority}>Priority: {priority}</Text>
        <View style={styles.footer}>
          <Checkbox
            status={completed ? "checked" : "unchecked"}
            onPress={onMarkComplete}
            style={styles.checkbox}
          />
          <Text style={styles.markComplete}>Mark as completed</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
