import {exception} from 'node:console';
import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const HeadBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text style={styles.userName}>Hi Student!</Text>
      </View>
      <View style={styles.picContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.pic}
            source={require('../../assets/images/user.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeadBar;
