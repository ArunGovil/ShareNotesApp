import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Toast from 'react-native-toast-message';
import styles from './styles';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const SignupScreen = () => {
  const [initializing, setInitializing] = useState(true);
  const navigation = useNavigation();
  const [Name, setName] = useState('');
  const [Mail, setMail] = useState('');
  const [Uid, setUid] = useState('');
  const [Department, setDepartment] = useState('');
  const [Password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Computer Science', value: 'cs'},
    {label: 'Zoology', value: 'zoo'},
    {label: 'Commerce', value: 'com'},
  ]);

  const signup = async () => {
    const mail = Mail;
    const password = Password;

    if (!mail) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Mail Cannot be Empty',
        text2: 'Please enter your mail to SignIn',
      });
    } else if (!password) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Password Cannot be Empty',
        text2: 'Please select a password to SignIn',
      });
    } else if (password.length < 6) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Password too short',
        text2: 'Select a password with minimum 6 characters',
      });
    } else {
      try {
        setLoading(true);
        auth()
          .createUserWithEmailAndPassword(mail, password)
          .then(() => {
            auth().onAuthStateChanged(user => {
              if (user) {
                console.log('User ID: ', user.uid);
                setUid(user.uid);
              }
            });
          })
          .then(() => {
            const newReference = database().ref('/users').push();
            newReference.set({
              name: Name,
              dept: Department,
              uid: Uid,
            });
          })
          .then(() => {
            navigation.navigate('Home');
            Toast.show({
              type: 'success',
              position: 'top',
              text1: 'SignIn Successful',
              text2: 'You can start learning now!',
            });
            console.log('User Created');
            setLoading(false);
          });
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            type: 'info',
            position: 'top',
            text1: 'Account already exists',
            text2: 'There is already an account in this mail',
          });
          console.log('That email address is invalid!');
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerBiline}>Start Learning right away!</Text>
        <Text style={styles.headerText}>Signup</Text>
      </View>
      <View style={styles.signupForm}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Name"
          placeholderTextColor="#ADB5BD"
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#ADB5BD"
          onChangeText={text => setMail(text)}
        />
        <View>
          <DropDownPicker
            style={styles.subInput}
            placeholder={'Department'}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={() => setDepartment(value)}
            textStyle={{
              fontFamily: 'Poppins-Regular',
            }}
            dropDownContainerStyle={{
              width: '70%',
              borderWidth: 0,
            }}
          />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder=" Choose Password"
          placeholderTextColor="#ADB5BD"
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.signupButton} onPress={signup}>
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
        {Loading ? (
          <View style={styles.indic}>
            <ActivityIndicator size="large" color="#06B178" />
          </View>
        ) : (
          <Text />
        )}
        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Existing User? Login Now!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
