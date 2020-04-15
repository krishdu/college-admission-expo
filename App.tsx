import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EmployeeService from './src/components/EmployeeService';

export default function App() {
  return (
    <View style={styles.container}>
       <EmployeeService />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
