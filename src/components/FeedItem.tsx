import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface FeedItemProps {
  title: string;
  description: string;
  imageUrl: string;
  likes: number;
}

const FeedItem: React.FC<FeedItemProps> = ({ title, description, imageUrl, likes }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.likes}>{`${likes} curtidas`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  description: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  likes: {
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#999',
  },
});

export default FeedItem;
