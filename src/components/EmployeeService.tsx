import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,FlatList } from 'react-native'

class EmployeeService extends Component {
   state = {
      data: []
   }
   componentDidMount = () => {
      fetch('http://dummy.restapiexample.com/api/v1/employees', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson.data
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         // <View style={styles.card} >
         //    { this.state.data.map((item) => (
         // <View  style={styles.item} > 
         //    <Text>
         //    Employee Name : {item.employee_name}
         //    </Text>
         //    <Text>
         //    Employee Age : {item.employee_age}
         //    </Text>
         //    <Text>
         //    Employee Salary : {item.employee_salary}
         //    </Text>
         //    <Text>
         //    </Text>
         // </View>
         //  ))}
         // </View>
   <View>
   <FlatList
    data={this.state.data}
    renderItem={({ item }) =>
       <TouchableOpacity onPress={()=>{alert('Touched '+item.employee_name)}}>
        <View style={styles.item}>
       <Text >Name:{item.employee_name}</Text>
       <Text >Age:{item.employee_age}</Text>
       <Text >Salery:{item.employee_salary}</Text>
       </View>  
       </TouchableOpacity>
      }
      keyExtractor={(item) => item.id}
     />
   </View>
      )
   }
}
const styles=StyleSheet.create({
// card:{
//    backgroundColor:'coral',
//    padding:20,
// },
// item:{
//    padding:10,
//    backgroundColor:'pink',
//    marginTop:20,
//   fontSize:40,
//   marginHorizontal:20,
//   margin:10,
// }
item:{
   padding:10,
   backgroundColor:'pink',
   marginTop:20,
  fontSize:40,
  marginHorizontal:15,
 },
});
export default EmployeeService;