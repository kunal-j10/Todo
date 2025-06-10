import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import Header from "./Header";
import Card from "./Card";
import styles from "./styles";

const Main = () => {
  const { list = [] } = useSelector((s) => s.general);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <FlatList
          data={list}
          contentContainerStyle={styles.flatlist}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card key={item.key} item={item} list={list} />
          )}
          ItemSeparatorComponent={<View style={styles.item_separator} />}
        />
      </View>
    </>
  );
};

export default Main;
