/* styles.css */
import {StyleSheet} from 'react-native';
import { configs } from '../utils/constants';

export default StyleSheet.create({

  
  container: {
    flex: 1,
  },
  toto_list:{
    padding: 16, 
    flex: 1 
  },
  todo_item: {
    paddingVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#dddddd',
    borderRadius: 4
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: configs.colors.primary
  },

});
