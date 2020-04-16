import React,{Component} from 'react';
import { StyleSheet, Text,View } from 'react-native';
class Header extends Component{
    render(){
        return(
            <View style={Styles.header}>
                <Text style={Styles.title}>Online Admission Managment</Text>
          </View>
        )
    }
}
const Styles=StyleSheet.create({
    header:{
    height:80,
    padding:38,
    backgroundColor:'coral',
    },
    title:{
    textAlign:'center',
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    },
});
export default Header;