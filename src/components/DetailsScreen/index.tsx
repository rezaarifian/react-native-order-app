import React, {useEffect, useState} from 'react';
import { Text, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// constans
import { API_URL } from '../../constans/api';

// service
import { get } from '../../services'

// utils
import { currencyConverter, showToast } from '../../utils';

// styles
import styles from './styles';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
  route: RouteProp<RootStackParamList, 'Details'>;
};

const DetailsScreen: React.FC<Props> = ({navigation, route}) => {
  const {params} = route;
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState<DetailOrder>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      get(`${API_URL.DETAIL_ORDER}/${params?.item?.id}`)
      .then((response: any) => {
        console.log('response', response.id); // this result cannot be used, i think issue  from backend
        setDetail(response);
      })
      .catch((err) => {
        showToast(err?.message);
      })
      .finally(() => setLoading(false));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  console.log('olahhh', detail?.products);

  return (
    <ScrollView
      style={styles.scrollViewStyle}
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Order Id</Text>
      <Text style={styles.detailText}>{params?.item?.id}</Text>
      <Text style={styles.title}>Customer Name</Text>
      <Text style={styles.detailText}>{params?.item?.customer_name}</Text>
      <Text style={styles.title}>Total Order</Text>
      <Text style={styles.detailText}>{currencyConverter(Number(params?.item?.total_price))}</Text>
    </ScrollView>
  );
};

export default DetailsScreen;