import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomColor: "#E0E0E0",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontSize: 16,
    marginLeft: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "normal",
    textAlign: "center",
    flex: 1,
    marginRight: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop:20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#F8F8F8",
  },
  textArea: {
    height: 80,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#D1D1D1",
    borderRadius: 8,
    backgroundColor: "#F8F8F8",
    marginBottom: 5,
  },
  errorText: {
    color: "#D32F2F",
    fontSize: 14,
    marginTop: 2,
  },
  addButton: {
    backgroundColor: "#D32F2F",
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 50,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
