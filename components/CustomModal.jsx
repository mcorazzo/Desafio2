import { View, Text, Modal, StyleSheet, Button, Alert } from "react-native";

const CustomModal = ({
  animationTypeProp,
  isVisibleProp,
  itemSelectedProp,
  onDeleteItemHandlerEvent,
  setModalVisibleEvent,
}) => {
  const handleDelete = () => {
    onDeleteItemHandlerEvent();

    Alert.alert(
      "Eliminado",
      `El ítem "${itemSelectedProp.value}" se ha eliminado exitosamente`,
      [{ text: "OK", onPress: () => setModalVisibleEvent(false) }]
    );
  };

  return (
    <Modal animationType={animationTypeProp} visible={isVisibleProp}>
      <View style={styles.modalMessageContainer}>
        <Text style={styles.warningText}>Se eliminará:</Text>
        <Text style={styles.itemText}>{itemSelectedProp.value}</Text>
      </View>
      <View style={styles.modalButtonContainer}>
        <Button
          title="Cancelar"
          color="#444"
          onPress={() => setModalVisibleEvent(!isVisibleProp)}
        />
        <Button title="Sí, eliminar" color="#ef233c" onPress={handleDelete} />
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalMessageContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  warningText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
});
