import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

type Props =  {
    isLoading: boolean;
}
const Loading: React.FC<Props> = ({isLoading}) => {
  if (!isLoading) return null;

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;