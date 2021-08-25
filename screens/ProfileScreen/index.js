import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Emoji from 'react-native-emoji';
import styles from './styles';

import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  console.log(user);

  const logout = () => {
    auth()
      .signOut()
      .then(
        () => navigation.navigate('Login'),
        console.log('User signed out!'),
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Successfully Logged Out',
          text2: 'Do visit the ShareNotes again, Cheers!',
        }),
      );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.head}>Your Profile</Text>
      </View>
      <View style={styles.profile}>
        <Image
          style={styles.profileImg}
          source={require('../../assets/images/dp.png')}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.userName}>Student</Text>
          <Text style={styles.userDept}>Selected Stream</Text>
        </View>
      </View>
      <View style={styles.others}>
        <View style={styles.list}>
          <Text style={styles.heading}>Share NotesApp</Text>
          <Text style={styles.details}>Share the App with your Friends!</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.heading}>Get Help</Text>
          <Text style={styles.details}>Get help regarding the App</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.heading}>About Us</Text>
          <Text style={styles.details}>Tap to know about the Team</Text>
        </View>
        <TouchableOpacity style={styles.list} onPress={logout}>
          <View>
            <Text style={styles.heading}>Logout</Text>
            <Text style={styles.details}>Logout of ShareNotes now</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Made with
          <Emoji name="heart" />
          in SN College
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
