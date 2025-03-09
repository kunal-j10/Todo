const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  container: {
    borderColor: "#8590A2",
    borderRadius: 12,
    backgroundColor: "#00A5EC",
    overflow: "hidden",
  },
  title: {
    textTransform: "capitalize",
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
    width:'66%'
  },
  body: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 0.5,
    borderColor: "#8590A2",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  title_body: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 18,
  },

  desc_head: {
    marginTop: 8,
    marginBottom: 4,
    color: "#00A5EC",
    fontWeight: "bold",
  },

  desc: {
    textTransform: "capitalize",
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#00A5EC",
    padding: 4,
  },
  priority: {
    alignSelf: "flex-end",
    backgroundColor: "red",
    textTransform: "capitalize",
    fontWeight: "bold",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    color: "#FFFFFF",
  },
  checkbox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
  },
  completed: {
    backgroundColor: "#8590A2",
  },
  menu: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  menu_bold: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFFFFF",
  },
  head_left: {
    flexDirection: "row",
    gap: 4,
  },
});

export default styles;
