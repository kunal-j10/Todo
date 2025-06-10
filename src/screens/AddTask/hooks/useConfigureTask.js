import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setGeneralStore } from "../../../../store/General";
import useNotifications from "./useNotifications";

const useConfigureTask = ({ defaultValue }) => {
  const { list = [] } = useSelector((s) => s.general);
  const { triggerNotification } = useNotifications();

  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const [errors, setErrors] = useState({});
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
    priority: "low",
  });
  
  const isEditMode = defaultValue?.mode === "edit";

  useEffect(() => {
    if (defaultValue?.title) {
      setTodoData(defaultValue);
    }
  }, [defaultValue]);

  const goBack = () => {
    navigation.goBack();
  };

  const validateData = () => {
    const { title = "", description = "", priority = "" } = todoData || {};

    let newErrors = {};

    if (!title) newErrors.title = "Title is required.";
    if (!description) newErrors.description = "Description is required.";
    if (!priority) newErrors.priority = "Priority must be selected.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateData()) return;

    if (isEditMode) {
      const editedList = list.map((item) =>
        item.key === todoData.key ? todoData : item
      );

      dispatch(
        setGeneralStore({
          list: editedList,
        })
      );
    } else {
      
      triggerNotification({
        title: "New Task Added",
        body: `Task "${todoData.title}" has been added successfully.`,
      });

      dispatch(
        setGeneralStore({
          list: [{ ...todoData, key: (list?.[0]?.key || 0) + 1 }, ...list],
        })
      );
    }

    goBack();
  };

  return {
    errors,
    todoData,
    isEditMode,
    goBack,
    setTodoData,
    handleSubmit,
  };
};

export default useConfigureTask;
