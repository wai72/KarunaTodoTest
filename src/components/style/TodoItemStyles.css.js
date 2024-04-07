/* styles.css */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  todo_item: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'space-between',
    padding: 8,
    alignItems: 'center',
    borderColor: '#dddddd',
    borderRadius: 4
  },

  todo_item_text: {
    flex:1,
    marginRight: 8,
    color: '#000000',
    paddingLeft: 8,

  },
  complete_checkbox: {
    textDecorationLine: 'line-through',
    width: 20,
    height: 20,
    color: '#888888',
    paddingRight: 8,
  }, 
  delete_button: {
    width: 40,
    height: 50,
    backgroundColor: '#ff6347',
    padding: 4,
    borderRadius: 4,
  }

});
