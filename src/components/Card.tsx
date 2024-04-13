import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { Card as RNCard, CardProps as RNCardProps } from 'react-native-elements';

interface CardProps extends RNCardProps {
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ containerStyle, children, ...otherProps }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <RNCard {...otherProps}>{children}</RNCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 10,
  },
});

export default Card;
