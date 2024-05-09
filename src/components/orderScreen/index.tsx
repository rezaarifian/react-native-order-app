import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

// component
import Loading from '../Loading/Loading';

// constans
import { API_URL } from '../../constans/api';

// service
import { get, deleted } from '../../services'

// utils
import { showToast, currencyConverter, dateFormater } from '../../utils';

// styles
import styles from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Order'>;
};

const OrderScreen: React.FC<Props> = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const[loadingLoadMore, setLoadingLoadMore] = useState(false);
  const [listOrder, setListOrder] = useState<ListOrder>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemDeleted, setItemDeleted] = useState('');

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    setLoadingLoadMore(true);
    try {
      get(`${API_URL.GET_ORDERS}?page=${page}&limit=10`)
      .then((res) => {
        setListOrder(prevData => [...prevData, ...res?.list]);
        setTotalPages(res?.total)
      })
      .catch((err) => {
        showToast(err?.message);
      })
      .finally(() => setLoading(false));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoadingLoadMore(false);
    }
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handleDelete = () => {
    try {
      deleted(`${API_URL.DETAIL_ORDER}/${itemDeleted}`)
      .then((res) => {
        showToast(res);
      })
      .catch((err) => {
        showToast(err?.message);
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setModalVisible(false)
    }
  };

  const handleCancel = () => {
    // Close the modal without performing any action
    setModalVisible(false);
  };

  const handleDetail = (item: ItemOrder) => {
    navigation.navigate('Details', {
      item
    });
  };

  const ConfirmationModal = ({ visible, onConfirm, onCancel }: {visible:  boolean, onConfirm: () => void, onCancel: () => void}) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onCancel}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are You Sure To Delete This?</Text>
            <Text style={styles.modalDesc}>You can't recover data because it will  be deleted peermanently.</Text>
            <View>
              <TouchableHighlight underlayColor={'transparent'} onPress={onConfirm} style={styles.buttonModalDeleted}>
                <Text style={styles.buttonModalDeletedText}>Yes, Delete It</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={onCancel} style={styles.buttonCancelModal}>
                <Text style={styles.buttonCancelModalText}>Back</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  const renderItem = ({item}: {item: ItemOrder}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.labelId}>Order Id</Text>
        <Text style={styles.textId}>{item?.id}</Text>
        <View style={styles.devider}/>
        <View style={styles.detailContainer}>
          <Text style={styles.textRight}>Customer</Text>
          <Text style={styles.textLeft}>{item?.customer_name}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.textRight}>Total Products</Text>
          <Text style={styles.textLeft}>{item?.total_products}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.textRight}>Total Price</Text>
          <Text style={styles.textLeft}>{currencyConverter(Number(item?.total_price))}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.textRight}>Order Date</Text>
          <Text style={styles.textLeft}>{dateFormater(Date.parse(item?.created_at))}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 10}}>
          <TouchableHighlight style={styles.buttonEdit}>
            <Text style={styles.buttonEditText}>Edit</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'transparent'} style={styles.buttonDetail} onPress={() => handleDetail(item)}>
            <Text style={styles.buttonDetailText}>Detail</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonDelete}>
            <Icon name="delete-outline" size={20} color={'#d41e3c'} onPress={() => {
              setItemDeleted(item?.id);
              setModalVisible(true);
            }}/>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    if (!loadingLoadMore) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.body}>
        {loading ?
          <Loading isLoading={loading} /> :
          <FlatList
            data={listOrder}
            contentContainerStyle={styles.containerList}
            renderItem={renderItem}
            keyExtractor={(item: ItemOrder) => item.id}
            ListFooterComponent={renderFooter}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
          />
        }
        <ConfirmationModal 
          visible={modalVisible} 
          onConfirm={handleDelete} 
          onCancel={handleCancel} 
        />
      </SafeAreaView>
    </>
  );
};

export default OrderScreen;