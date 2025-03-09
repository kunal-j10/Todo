import { Text, View, Modal, Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";
import Form from "./Form";

const Create = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Pressable onPress={()=>setShow(true)} style={styles.create}>
        <Text style={styles.btn_txt}>Create</Text>
      </Pressable>

      {show ? <Form show={show} handleClose={() => setShow(false)} /> : null}
    </View>
  );
};

export default Create;
