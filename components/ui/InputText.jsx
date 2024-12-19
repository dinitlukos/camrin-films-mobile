import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";

export default InputText = (props) => {
  const {label, text, setText } = props;
  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        value={text}
        mode="outlined"
        style={styles.text}
        onChangeText={setText}
        mask="+[00] [000] [000] [000]"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    width: "100%",
  },
  text: {
    fontSize: 20,
  },
});
