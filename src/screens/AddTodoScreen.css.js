/* styles.css */
import { StyleSheet } from "react-native";
import { configs } from "../utils/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: "center",
  },
  textInput_style: {
    borderColor: configs.colors.lightGray,
    height: 50,
    borderWidth: 1,
    paddingLeft: 4,
    borderRadius: 8,
  },
  button_addTodo: {
    width: 60,
    height: 50,
    marginVertical: 16,
    backgroundColor: configs.colors.green,
    justifyContent: "center",
    borderRadius: 8,
  },
  addText_style: {
    color: configs.colors.white,
    alignSelf: "center",
  },
});
