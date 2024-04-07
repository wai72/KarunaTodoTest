const showToast = (text1, text2) => {
    Toast.show({
      type: 'Info', 
      text1: text1, 
      text2: text2, 
      position: 'bottom', 
      visibilityTime: 3000, 
      autoHide: true, 
      topOffset: 30, 
      bottomOffset: 40,
    });
}
export default showToast;