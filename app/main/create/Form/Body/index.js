import React, { useEffect, useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import TextInput from "../../../../common/TextInput";
import Priority from "./Priority";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setGeneralStore } from "@/app/store/General";

const CONFIG = {
  title: {
    placeholder: "Enter Title..",
  },
  description: {
    placeholder: "Enter Description..",
    multiline: true,
    numberOfLines: 4,
    height: 100,
  },
};

const Body = (props) => {
  const { handleClose, defaultValue = {} } = props || {};
  const dispatch = useDispatch();
  const { list = [] } = useSelector((s) => s.general);

  const [todoData, setTodoData] = useState({});

  useEffect(() => {
    if (defaultValue?.title) {
      setTodoData(defaultValue);
    }
  }, [defaultValue]);

  const handleSubmit = () => {
    const { title = "", description = "", priority = "" } = todoData || {};

    if (!title || !description || !priority) {
      Alert.alert("All fields are required");
    }

    if (defaultValue?.mode === "edit") {
      const editedList = list?.map((item) =>
        item.key === todoData.key ? todoData : item
      );

      dispatch(
        setGeneralStore({
          list: editedList,
        })
      );

      handleClose();
      return;
    }

    dispatch(
      setGeneralStore({
        list: [{ ...todoData, key: (list?.[0]?.key || 0) + 1 }, ...list],
      })
    );

    handleClose();
  };

  return (
    <View>
      <Pressable onPress={handleClose} style={styles.close}>
        <Text style={styles.close_txt}>X</Text>
      </Pressable>

      <View style={styles.body}>
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput
            {...CONFIG.title}
            value={todoData?.title || ""}
            onChangeText={(val) =>
              setTodoData((prev) => ({ ...prev, title: val }))
            }
          />
        </View>
        <View>
          <Text style={styles.label}>Description</Text>
          <TextInput
            {...CONFIG.description}
            value={todoData?.description || ""}
            onChangeText={(val) =>
              setTodoData((prev) => ({ ...prev, description: val }))
            }
          />
        </View>

        <View>
          <Text style={styles.label}>Priority</Text>
          <Priority todoData={todoData} setTodoData={setTodoData} />
        </View>

        <Pressable onPress={handleSubmit} style={styles.create}>
          <Text style={styles.btn_txt}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Body;
