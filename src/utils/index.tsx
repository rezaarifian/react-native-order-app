import {
    Alert,
    ToastAndroid,
    Platform,
  } from 'react-native';
import dayjs from 'dayjs'

export const showToast = (message: string) => {
    if (Platform.OS === 'android') {
      ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        0,
        80,
      );
    } else {
        Alert.alert(message);
    }
  };

  export const currencyConverter = (amount: number) => {
    const _amount = amount < 0 ? 0 : amount;
  
    return `${String(_amount).replace(
      /\B(?=(\d{3})+(?!\d))/g,
      '.',
    )}`;
  };

  export const dateFormater = (date: number) => {
    var formattedDate = dayjs(date).format('DD/MM/YYYY HH:MM');
    return formattedDate;
  };

  export const getTotalPrice = (price: number, quantity: number) => {
    const totalPrice = price * quantity;
    return totalPrice;
  };