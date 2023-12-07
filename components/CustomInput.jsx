import { View, TextInput, Button, StyleSheet } from "react-native";

const CustomInput = ({
  placeholderProp,
  textItemProp,
  onChangeTextHandlerEvent,
  addItemToListEvent,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholderProp}
        onChangeText={onChangeTextHandlerEvent}
        value={textItemProp}
      />
      <Button        
        title="agregar"
        color= "#2A65C0"
        onPress={addItemToListEvent}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#EAEDED",
    marginTop: 30,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    border: 1,
    borderStyle: "solid",
  },
  textInput: {
    width: 230,
    borderBottomColor: "#ccc",
    borderBottomWidth: 3,
    fontSize: 18
  },

});
