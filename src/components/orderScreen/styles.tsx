import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
  
  const styles = StyleSheet.create({
    body: {
      backgroundColor: 'white',
      flex: 1,
    },
    containerList: {
      rowGap: 12,
      marginTop: 20,
      paddingBottom: 50,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 16,
      marginVertical: 8,
      marginHorizontal: 16,
      borderColor: '#cfd0d1',
      borderWidth: 1,
    },
    labelId: {
      fontSize: 16, 
      color: Colors.black, 
      fontWeight: '400'
    },
    textId: {
      fontSize: 16,
      fontWeight: 'bold',
      color: Colors.black,
    },
    devider: {
      height: 1, 
      backgroundColor: '#cfd0d1', 
      width: '100%',
      marginVertical: 15

    },
    detailContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    textRight: {
      fontSize: 14,
      color: Colors.black,
    },
    textLeft: {
      fontSize: 14,
      marginLeft: 'auto',
      color: Colors.black,
    },
    buttonEdit: {
      backgroundColor: '#19212e',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    buttonEditText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    buttonDetail: {
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor: '#3e81ed',
      borderWidth: 1,
      paddingVertical: 12,
      paddingHorizontal: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    buttonDetailText: {
      color: '#3e81ed',
      fontSize: 14,
      fontWeight: 'bold',
    },
    buttonDelete: {
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor: '#85797b',
      borderWidth: 0.5,
      paddingVertical: 12,
      paddingHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    footer: {
      paddingVertical: 20,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 30,
      alignItems: 'center',
      elevation: 5,
    },
    modalText: {
      marginBottom: 20,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    modalDesc: {
      textAlign: 'center', 
      fontSize: 17,
      fontWeight: '400', 
      marginBottom: 20,
    },
    buttonModalDeleted: {
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor: '#e3364d',
      borderWidth: 1,
      paddingVertical: 12,
      paddingHorizontal: 80,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
      marginBottom: 10,
    },
    buttonModalDeletedText: {
      color: '#e3364d',
      fontSize: 14,
      fontWeight: 'bold',
    },
    buttonCancelModal: {
      backgroundColor: '#19212e',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 80,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 10,
    },
    buttonCancelModalText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

  export default styles;
  