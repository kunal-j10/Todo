import { FlatList, Text, View } from "react-native";
import Create from "./create";
import Card from "./card";
import styles from "./styles";
import { useSelector } from "react-redux";
import { useState } from "react";
import Form from "./create/Form";

const Main = () => {
  const { list = [] } = useSelector((s) => s.general);

  const [editModal, setEditModal] = useState({ show: false });

  return (
    <View style={styles.container}>
      <Create />

      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            key={item.key}
            item={item}
            list={list}
            setEditModal={setEditModal}
          />
        )}
        ItemSeparatorComponent={<View style={styles.item_separator} />}
      />

      {editModal?.show ? (
        <Form
          show={editModal?.show}
          handleClose={() => setEditModal({ show: false })}
          defaultValue={editModal}
        />
      ) : null}
    </View>
  );
};

export default Main;
