import React, { Component } from 'react'
import { View, Text } from 'react-native'

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
         <View>
            { this.state.data.map((item) => (
         <View> 
            <Text>
            Employee Name : {item.employee_name}
            </Text>
            <Text>
            Employee Age : {item.employee_age}
            </Text>
            <Text>
            Employee Salary : {item.employee_salary}
            </Text>
            <Text>
            </Text>
         </View>
          ))}
         </View>
      )
   }
}
export default EmployeeService