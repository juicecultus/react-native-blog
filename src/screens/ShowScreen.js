import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';

const ShowScreen = ({navigation, route}) => {
  const {id} = route.params;

  const {state} = useContext(Context);

  const blogPost = state.find(post => post.id === id);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id})}>
        <Feather name="edit-2" size={30} style={styles.icon} />
      </TouchableOpacity>
    ),
  });

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
});
