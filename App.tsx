import React from 'react';
import { StyleSheet, Text,ScrollView,View } from 'react-native';
import EmployeeService from './src/components/EmployeeService';
import Header from './src/components/Header';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/*....*/}
        <View style={styles.list}>
          <EmployeeService />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding:40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20
  },
});
