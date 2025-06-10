import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card_elevation: {
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 16,
    padding: 1,
    marginBottom: 12,
  },
  container: {
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  head_right: {
    flexDirection: "row",
    gap: 8,
  },
  title: {
    flex: 1,
    fontSize: 22,
    color: "#000",
    textTransform: "capitalize",
  },
  body: {
    marginBottom: 12,
  },
  desc: {
    fontSize: 14,
    color: "#000",
  },
  priority: {
    fontSize: 14,
    color: "#CC1103",
    marginTop: 8,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  checkbox: {
    marginRight: 8,
  },
  markComplete: {
    fontSize: 14,
    color: "#000",
  },
  button: {
    backgroundColor: "#CC1103",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default styles;
