import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { Checkbox, Menu } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setGeneralStore } from "@/app/store/General";
import { useState } from "react";

const PRIORITY_COLOR_MAPPING = {
  low: {
    backgroundColor: "#FFD8C2",
    color: "#FF6B16",
  },
  medium: {
    backgroundColor: "#D4CCFF",
    color: "#250CA9",
  },
  high: {
    backgroundColor: "#FFC6C2",
    color: "#CC1103",
  },
};

const Card = (props) => {
  const {
    title = "",
    description = "",
    priority = "",
    completed = false,
    key = "",
  } = props?.item || {};

  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const onMarkComplete = () => {
    const updatedList = props?.list?.map((item) =>
      item.key === key ? { ...item, completed: !item?.completed } : item
    );

    dispatch(
      setGeneralStore({
        list: updatedList,
      })
    );
  };

  const onEdit = () => {
    props?.setEditModal({
      ...props?.item,
      mode: "edit",
      show: true,
    });
  };

  const onDelete = () => {
    const updatedList = props?.list?.filter((item) => item?.key !== key);

    dispatch(
      setGeneralStore({
        list: updatedList,
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.head, ...(completed ? styles.completed : {}) }}>
        <View style={styles.checkbox}>
          <Checkbox
            status={completed ? "checked" : "unchecked"}
            onPress={onMarkComplete}
          />
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>

        <View style={styles.head_left}>
          <Text
            style={{
              ...styles.priority,
              ...PRIORITY_COLOR_MAPPING?.[priority],
            }}
          >
            {priority}
          </Text>

          <Menu
            visible={showMenu}
            onDismiss={() => setShowMenu(false)}
            anchor={
              <Pressable
                onPress={() => setShowMenu(!showMenu)}
                style={styles.menu}
              >
                <Text style={styles.menu_bold}>:</Text>
              </Pressable>
            }
          >
            <Menu.Item onPress={onEdit} title="Edit" />
            <Menu.Item onPress={onDelete} title="Delete" />
          </Menu>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title_body}>{title}</Text>

        <Text style={styles.desc_head}>Description :</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </View>
  );
};

export default Card;
