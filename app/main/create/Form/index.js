import { Modal, View } from "react-native";
import styles from "./styles";
import Body from "./Body";

const Form = (props) => {
  const {
    show = false,
    animationType = "none",
    handleClose = () => {},
    style,
    defaultValue={}
  } = props || {};
  
  return (
    <Modal
      visible={show}
      animationType={animationType}
      transparent={true}
      onRequestClose={handleClose}
      style={style}
    >
      <View style={styles.container_fluid}>
        <View style={styles.container}>
          <Body handleClose={handleClose} defaultValue={defaultValue}/>
        </View>
      </View>
    </Modal>
  );
};

export default Form;
