import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt: {
    fontWeight: "bold",
  },
  check: {
    height: 20,
    width: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#000000",
  },
  priority_item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 2,
  },
  active: {
    borderColor: "#00A5EC",
    backgroundColor: "#00A5EC",
  },
});

export default styles;
