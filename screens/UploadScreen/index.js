import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import PromoCard from '../../components/PromoCard';
import DropDownPicker from 'react-native-dropdown-picker';
import DocumentPicker from 'react-native-document-picker';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import RNFetchBlob from 'rn-fetch-blob';
import Toast from 'react-native-toast-message';
// import {BorderlessButton} from 'react-native-gesture-handler';

const UploadScreen = () => {
  const [Title, setTitle] = useState('');
  // const [Name, setName] = useState('');
  const [Semester, setSemester] = useState('');
  const [Subject, setSubject] = useState('');
  const [Type, setType] = useState('');
  const [Result, setResult] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [Transferred, setTransferred] = useState('');
  const [SubList, setSubList] = useState([]);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Sem 1', value: 's1'},
    {label: 'Sem 2', value: 's2'},
    {label: 'Sem 3', value: 's3'},
    {label: 'Sem 4', value: 's4'},
    {label: 'Sem 5', value: 's5'},
    {label: 'Sem 6', value: 's6'},
  ]);

  const [openx, setOpenx] = useState(false);
  const [valuex, setValuex] = useState(null);
  const [itemsx, setItemsx] = useState([
    {label: 'HTML', value: 'html'},
    {label: 'CSS', value: 'css'},
    {label: 'GIT', value: 'git'},
    {label: 'MATHS', value: 'maths'},
    {label: 'Electronics', value: 'elec'},
    {label: 'English', value: 'eng'},
    {label: 'FOSS', value: 'foss'},
    {label: 'AI', value: 'ai'},
    {label: 'Data Mining', value: 'dm'},
    {label: 'CFO', value: 'cfo'},
  ]);

  // useEffect(() => {
  //   setSubList([]);
  //   const onChildAdded = database()
  //     .ref('subjects')
  //     .orderByChild('sem')
  //     .equalTo(Semester)
  //     .on('child_added', snapshot => {
  //       const blankArray = [];
  //       blankArray.push(snapshot.val());
  //       setSubList(notes => [...notes, ...blankArray]);
  //       console.log(SubList.name);
  //     });
  //   return () => database().ref('subjects').off('child_added', onChildAdded);
  // }, [Semester]);

  console.log(Semester);

  const selectPDF = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      const pdfpath = res.uri;
      const pdfresult = await RNFetchBlob.fs.readFile(pdfpath, 'base64');
      const pdffilename = res.name;
      setTitle(pdffilename);
      setResult(pdfresult);
      setType(res.type);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Toast.show('No PDF selected');
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'No File Selected',
          text2: 'Please select a file before uploading',
        });
      }
    }
  };

  const selectIMG = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      const pdfpath = res.uri;
      const pdfresult = await RNFetchBlob.fs.readFile(pdfpath, 'base64');
      const pdffilename = res.name;
      setTitle(pdffilename);
      setResult(pdfresult);
      setType(res.type);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'No File Selected',
          text2: 'Please select a file before uploading',
        });
      }
    }
  };

  const selectDOC = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.docx],
      });
      const pdfpath = res.uri;
      const pdfresult = await RNFetchBlob.fs.readFile(pdfpath, 'base64');
      const pdffilename = res.name;
      setTitle(pdffilename);
      setResult(pdfresult);
      setType(res.type);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'No File Selected',
          text2: 'Please select a file before uploading',
        });
      }
    }
  };

  const uploadNotes = async () => {
    const uploadUri = Result;
    const filename = Title;
    console.log(filename);

    if (uploadUri === null) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'No File Selected',
        text2: 'Please select the file before uploading',
      });
    } else {
      setUploading(true);
    }

    const task = storage().ref(filename).putString(uploadUri, 'base64');

    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;
    } catch (e) {
      console.log(e);
    }
    setResult(null);

    task.snapshot.ref.getDownloadURL().then(function (getDownloadURL) {
      const newReference = database().ref('/notes').push();
      setUploading(false);

      newReference
        .set({
          semester: Semester,
          title: Title,
          subject: Subject,
          type: Type,
          url: getDownloadURL,
        })
        .then(
          () => setUploading(false),
          Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Note Uploaded',
            text2: 'Thanks for your contribution!',
          }),
        );
      setTitle(null);
      setSubject(null);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.head}>Upload Notes</Text>
      </View>
      <View style={styles.promo}>
        <PromoCard />
      </View>
      <View style={styles.typeContainer}>
        <TouchableOpacity onPress={selectPDF}>
          <View style={styles.imageFile}>
            <Text style={styles.imageText}>Select PDF</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={selectIMG}>
          <View style={styles.imageFile}>
            <Text style={styles.imageText}>Images</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={selectDOC}>
          <View style={styles.imageFile}>
            <Text style={styles.imageText}>Docs</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.uploadDetails}>
        <DropDownPicker
          zIndex={3000}
          zIndexInverse={1000}
          style={styles.dropinput}
          placeholder={'Semester'}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={item => setSemester(value)}
          textStyle={{
            fontFamily: 'Poppins-Regular',
          }}
          dropDownContainerStyle={{
            width: '90%',
            marginLeft: '5%',
            borderWidth: 0,
          }}
        />
        <DropDownPicker
          zIndex={2000}
          zIndexInverse={2000}
          style={styles.dropinput}
          placeholder={'Subject'}
          open={openx}
          value={valuex}
          items={itemsx}
          setOpen={setOpenx}
          setValue={setValuex}
          setItems={setItemsx}
          onChangeValue={item => setSubject(valuex)}
          textStyle={{
            fontFamily: 'Poppins-Regular',
          }}
          dropDownContainerStyle={{
            width: '90%',
            marginLeft: '5%',
            borderWidth: 0,
          }}
        />
        <TextInput
          style={styles.titleinput}
          placeholder="Note Title"
          placeholderTextColor="#ADB5BD"
          onChangeText={text => setTitle(text)}
        />
        <TouchableOpacity style={styles.uploadButton} onPress={uploadNotes}>
          <Text style={styles.uploadText}>Upload</Text>
        </TouchableOpacity>
      </View>
      {uploading ? (
        <View style={styles.indic}>
          <ActivityIndicator size="small" color="#06B178" />
          <Text style={styles.aindicator}> Uploading Note {Transferred} %</Text>
        </View>
      ) : (
        <Text />
      )}
    </View>
  );
};

export default UploadScreen;
