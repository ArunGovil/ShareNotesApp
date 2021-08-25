import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const NavBar = () => {
  const home = <Icon name="home" size={25} color="#06B178" />;
  const upload = <Icon name="add" size={25} color="#06B178" />;
  const saved = <Icon name="chat" size={25} color="#06B178" />;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navitem}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navicon}>{home}</Text>
          <Text style={styles.navtext}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navitem}
          onPress={() => navigation.navigate('Upload')}>
          <Text style={styles.navicon}>{upload}</Text>
          <Text style={styles.navtext}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navitem}
          onPress={() => navigation.navigate('Saved')}>
          <Text style={styles.navicon}>{saved}</Text>
          <Text style={styles.navtext}>Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;
