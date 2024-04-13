import React from 'react';
import { View, StyleSheet } from 'react-native';
import Feed from '../components/Feed';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Feed />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default Home;
