import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailsScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'pink',
    flex: 1,
  },
});
