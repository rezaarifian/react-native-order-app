import React, { useEffect, useState } from 'react';
import { Text, ScrollView, TextInput, TouchableHighlight, View, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RouteProp } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// constans
import { API_URL } from '../../constans/api';

// service
import { get, post } from '../../services'

// utils
import { showToast, getTotalPrice } from '../../utils';

// styles
import styles from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'CreateOrderScreen'>;
  route: RouteProp<RootStackParamList, 'CreateOrderScreen'>;
};

const CreateOrderScreen: React.FC<Props> = ({navigation}) => {
  const [name, setName] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ItemProducts>();
  const [listProduct, setListProduct] = useState<ListProduct>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      get(API_URL.GET_PRODUCT)
      .then((response) => {
        setListProduct(response?.data);
      })
      .catch((err) => {
        showToast(err?.message);
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleQuantity = (quantity: string) => {
    setQuantity(quantity);
    const totalPriceFinal = getTotalPrice(Number(selectedProduct?.price), Number(quantity));
    setTotalPrice(String(totalPriceFinal));
  }

  const handleSave = () => {
    // {
    //     "customer_name": "Anugrah Jaya",
    //     "products": [
    //         {
    //             "product_id": 1,
    //             "quantity": 10
    //         },
    //         {
    //             "product_id": 2,
    //             "quantity": 8
    //         },
    //         {
    //             "product_id": 3,
    //             "quantity": 5
    //         }
    //     ]
    // }
    if (name !== '' && selectedProduct?.id && quantity !== '') {
        const body = {
            customer_name: name,
            products: [
                {
                    product_id: selectedProduct?.id,
                    quantity: quantity,
                }
            ],
        }
        console.log('body', body);
        post(API_URL.DETAIL_ORDER, body)
            .then((response) => {
                showToast('Success Add New Order');
            })
            .catch((error) => {
              showToast(error?.message);
            });
    } else {
        Alert.alert('Please completed mandatory field');
    }
  }

  return (
    <ScrollView
      style={styles.scrollViewStyle}
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Customer Name<Text style={styles.mandatoryLaabel}>*</Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Input customer name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <View style={styles.devider}/>
      <Text style={styles.textProductDetail}>Product Detail</Text>
      <Text style={styles.title}>Product Name<Text style={styles.mandatoryLaabel}>*</Text></Text>
      <View style={styles.containerPicker}>
        <Picker
            selectedValue={selectedProduct}
            style={styles.dropdown}
            onValueChange={(itemValue, itemIndex) => 
                setSelectedProduct(itemValue)
            }>
        <Picker.Item enabled={false} label="Select product name" value="0" style={{color: '#cfd0d1'}} />
        {listProduct.map((option: ItemProducts) => {
            return (
                <Picker.Item
                    key={option?.id}
                    label={option?.name}
                    value={option}
                />
            )
        })}
        </Picker>
      </View>
    <Text style={styles.title}>Price</Text>
    <TextInput
        style={styles.inputDisable}
        editable={false}
        placeholder="Price"
        value={String(selectedProduct?.price || '')}
    />
    <Text style={styles.title}>Quantity<Text style={styles.mandatoryLaabel}>*</Text></Text>
    <TextInput
        style={styles.input}
        placeholder="Input quantity"
        onChangeText={quantity => handleQuantity(quantity)}
        value={quantity}
        keyboardType='numeric'
    />
    <View style={styles.devider}/>
    <Text style={styles.title}>Total Order Price</Text>
    <TextInput
        style={styles.inputDisable}
        editable={false}
        placeholder="Total Price"
        value={totalPrice}
    />
    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 50}}>
          <TouchableHighlight underlayColor={'transparent'} style={styles.buttonBack} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonBackText}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'transparent'} style={styles.buttonSave} onPress={() => handleSave()}>
            <Text style={styles.buttonSaveText}>Save</Text>
          </TouchableHighlight>
        </View>
    </ScrollView>
  );
};

export default CreateOrderScreen;