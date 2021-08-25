import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [Mail, setMail] = useState('');
  const [Password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false);
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

  if (user) {
    console.log('User email: ', user.email);
    navigation.navigate('Home');
  }

  const login = () => {
    const mail = Mail;
    const password = Password;

    setLoading(true);

    auth()
      .signInWithEmailAndPassword(mail, password)
      .then(() => {
        navigation.navigate('Home');
        Toast.show({
          type: 'success',
          position: 'top',
          text1: 'Login Successful',
          text2: 'You can start learning now!',
        });
        console.log('Login Successfull');
        setLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Invalid Email',
            text2: 'Please type the email address correctly',
          });
          console.log('That email address is invalid!');
        }
        if (error.code === 'auth/user-not-found') {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'User not found',
            text2: 'The user is not registered',
          });
          console.log('The user is not registered');
        }
        if (error.code === 'auth/wrong-password') {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Password Incorrect',
            text2: 'The entered password is incorrect',
          });
          console.log('The user is not registered');
        }
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerBiline}>Welcome to ShareNotes</Text>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.loginForm}>
        <View style={styles.welcome}>
          <Image
            style={styles.welImg}
            source={require('../../assets/images/welcome.png')}
          />
        </View>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#ADB5BD"
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={text => setMail(text)}
          // onEndEditing={validate}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#ADB5BD"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={login}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        {Loading ? (
          <View style={styles.indic}>
            <ActivityIndicator size="large" color="#06B178" />
          </View>
        ) : (
          <Text />
        )}
        <TouchableOpacity
          style={styles.singupLink}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>New User? Register Here!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
