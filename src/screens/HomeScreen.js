import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = ({navigation}) => {
  const {state, deleteBlogPost, getBlogPosts} = useContext(BlogContext);

  useEffect(() => {
    getBlogPosts();
  }, []);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  });

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogpost => blogpost.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View style={styles.row}>
                <Text key={item.id} style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 24,
  },
  icon: {
    fontSize: 24,
  },
});
