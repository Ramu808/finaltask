
import React,{Component} from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, TextInput,placeholder} from 'react-native'

const width = Dimensions.get('window').width
class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { placeholder }
  }
  render() {
    const { placeholderStyle, style, onChange, ...rest } = this.props;

    return <TextInput 
      {...rest} 
   
      style={this.state.placeholder ? [style, placeholderStyle] : style}
      />
  }
}

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: '#3599fd',
    paddingVertical: 7,
    width: width / 1.5,
    borderRadius: 5
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Quicksand-Medium'
  }
})

export default MyTextInput;



