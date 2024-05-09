import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title: {
      fontSize: 16,
      color: '#202421'
    },
    detailText: {
      marginVertical: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    scrollViewStyle: {
      flex: 1,
      backgroundColor: '#fff'
    },
    contentContainer: {
      padding: 20,
    },
    mandatoryLaabel: {
      fontSize: 16, 
      color: 'red'
    },
    input: {
      width: '100%',
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    inputDisable: {
      width: '100%',
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor: '#ccc'
    },
    devider: {
      height: 1, 
      backgroundColor: '#cfd0d1', 
      width: '100%',
      marginVertical: 15
    },
    textProductDetail: {
      fontSize: 18,
      marginBottom: 15,
    },
    containerPicker: {
      width: '100%', 
      borderColor: '#cfd0d1', 
      borderWidth: 1, 
      borderRadius: 8, 
      marginVertical: 10
    },
    dropdown: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: 'red',
    },
    buttonBack: {
      backgroundColor: '#ffff',
      borderRadius: 5,
      borderColor: '#cfd0d1',
      borderWidth: 1,
      paddingVertical: 10,
      paddingHorizontal: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      width: '47%',
    },
    buttonBackText: {
      color: 'black',
      fontSize: 14,
      fontWeight: 'bold',
    },
    buttonSave: {
      backgroundColor: '#3e81ed',
      borderRadius: 5,
      borderColor: '#3e81ed',
      borderWidth: 1,
      paddingVertical: 12,
      paddingHorizontal: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      width: '47%',
    },
    buttonSaveText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

  export default styles;