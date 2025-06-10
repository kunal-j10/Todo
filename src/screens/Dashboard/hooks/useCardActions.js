import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setGeneralStore } from "../../../../store/General";

const useCardActions = (props) => {
  const { list = [], item = {} } = props || {};
  const { key = "" } = item || {};

  const dispatch = useDispatch();
  const navigation = useNavigation()

  const onMarkComplete = () => {
    const updatedList = list?.map((item) =>
      item.key === key ? { ...item, completed: !item?.completed } : item
    );

    dispatch(
      setGeneralStore({
        list: updatedList,
      })
    );
  };

  const onDelete = () => {
    const updatedList = list?.filter((item) => item?.key !== key);

    dispatch(
      setGeneralStore({
        list: updatedList,
      })
    );
  };

  const onEdit = () => {
    navigation.navigate("add", {
      defaultValue: {
        ...item,
        mode: "edit",
      },
    });
  };

  return {
    onMarkComplete,
    onDelete,
    onEdit,
  };
};

export default useCardActions;
