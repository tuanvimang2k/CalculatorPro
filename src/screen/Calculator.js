import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, StatusBar, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue]= useState('0')
  const [operator,setOperator] = useState('')
  const [firstValue, setFirstValue]=useState('')
  const [isDarkMode, setIsDarkMode] = useState(false);

  // function to toggle for Dark mode 
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  // function to toggle for Dark mode 
  const [isImage1, setIsImage1] = useState(true);
  const toggleImage = () => {
    setIsImage1(!isImage1);
  };

  // function to handle all the inputs 0-9 
  const handleNumberInput=(num)=>{
    if(displayValue=='0'){
      setDisplayValue(num.toString())
    }
    else{
      setDisplayValue(displayValue+num)
    }
  }
  // function to handle all the operators 
  const handleOperator=(operator)=>{
    setOperator(operator)
    setFirstValue(displayValue)
    setDisplayValue('0')
  }
  // function to handle C button 
  const handleClear=()=>{
    setDisplayValue('0')
    setOperator('')
    setFirstValue('')
  }

  // function to handle equal button press
  const handleEqual=()=>{
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if(operator==='+'){
      setDisplayValue((num1+num2).toString())
    }else if(operator==='-'){
      setDisplayValue((num1-num2).toString())
    }else if(operator==='/'){
      setDisplayValue((num1/num2).toString())
    }else if(operator==='X'){
      setDisplayValue((num1*num2).toString())
    }else if (num2=='12345'){
      console.log('You are a hacker')
    }

    setOperator('')
    setFirstValue('')

  }
  return (
    <View style={[styles.lightContainer, isDarkMode ? { backgroundColor: 'black' } : null]}>
   
      <TouchableOpacity onPress={() => { toggleImage(); toggleDarkMode(); }}>
          {isImage1 ? (
            <Image
              source={require('../../assets/imgs/sun.png')} // Replace with the path to your first image
              style={styles.image}
            />
          ) : (
            <Image
              source={require('../../assets/imgs/moon.png')} // Replace with the path to your second image
              style={styles.image}
            />
          )}
      </TouchableOpacity>
      <View style={styles.displayContainer}>
        {/* <Text style={styles.displayText}> */}
        <Text style={[styles.displayText, isDarkMode ? styles.displayDarkText : styles.displayText]}>
          {displayValue}
        </Text>
      </View>

      
      {/* ============ DISPLAY CONTAINER ENDS ============ */}
      <View style={styles.buttonContainer}>
        {/* ========== 7,8,9,/ row ========== */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={()=>{handleNumberInput(7)}}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>{handleNumberInput(8)}}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button} onPress={()=>{handleNumberInput(9)}}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button,  isDarkMode ? styles.operatorDarkButton : styles.operatorButton]} onPress={()=>{handleOperator('/')}}>
            <Text style={[styles.buttonText,isDarkMode ? styles.operatorDarkButtonText : styles.operatorButtonText]}>/</Text>
          </TouchableOpacity>
        </View>
        {/* ========== 4,5,6,+ row ========== */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={()=>{handleNumberInput(4)}}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>{handleNumberInput(5)}}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button} onPress={()=>{handleNumberInput(6)}}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, isDarkMode ? styles.operatorDarkButton : styles.operatorButton]} onPress={()=>{handleOperator('X')}}>
            <Text style={[styles.buttonText, isDarkMode ? styles.operatorDarkButtonText : styles.operatorButtonText]}>X</Text>
          </TouchableOpacity>
        </View>
        
        {/* ========== 1,2,3,x row ========== */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={()=>{handleNumberInput(1)}}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={()=>{handleNumberInput(2)}}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button} onPress={()=>{handleNumberInput(3)}}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, isDarkMode ? styles.operatorDarkButton : styles.operatorButton]} onPress={()=>{handleOperator('-')}}>
            <Text style={[styles.buttonText, isDarkMode ? styles.operatorDarkButtonText : styles.operatorButtonText]}>-</Text>
          </TouchableOpacity>
        </View>

        {/* ========== C, 0, =, X  row ========== */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button,styles.zeroButton]} onPress={()=>{handleNumberInput(0)}}>
            <Text style={[styles.buttonText,styles.zeroButtonText]}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, isDarkMode ? styles.operatorDarkButton : styles.operatorButton]} onPress={()=>{handleOperator('+')}}>
            <Text style={[styles.buttonText, isDarkMode ? styles.operatorDarkButtonText : styles.operatorButtonText]}>+</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button,isDarkMode ? styles.equalDarkButton : styles.equalButton]} onPress={handleEqual}>
            <Text style={[styles.buttonText, styles.equalButtonText]}>=</Text>
          </TouchableOpacity>
        </View>
        {/* ========== C row ========== */}
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button,isDarkMode ? styles.equalDarkButton : styles.equalButton]} onPress={handleClear}>
            <Text style={[styles.buttonText,styles.equalButtonText]}>C</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
  lightContainer: {
    flex:1,
    backgroundColor:'#f5f5f5',
    alignItems:'center',
    justifyContent:'center',
    
  },
  darkContainer: {
    flex:1,
    backgroundColor:'midnightblue',
    color:'#f5f5f5',
    alignItems:'center',
    justifyContent:'center',
    
  },
  displayContainer:{
    flex:2,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingBottom:30,
  },
  displayText:{
    fontSize:48,
    color:'#333',
  },
  displayDarkText:{
    fontSize:48,
    color:'#faf8eb',
  },
  buttonContainer:{
    flex:3,
    width:"80%",
  },
  row:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:15,
  },
  button:{
    flex:1,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    elevation:3, 
  },
  buttonText:{
    fontSize:28,
    color:'black'
  },
  zeroButton:{
    flex:2,
    paddingLeft:35,
    paddingRight:35,
  },
  zeroButtonText:{
    marginLeft:10,
  },
  operatorButton:{
    backgroundColor:"#f0f0f0",
  },
  operatorDarkButton:{
    backgroundColor:"#61615e",
  },
  operatorButtonText:{
    color:"#ff9500",
  },
  operatorDarkButtonText:{
    color:'#fff'
  },
  equalButton:{
    flex:1,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ff9500',
    elevation:3,    
  },
  equalDarkButton:{
    flex:1,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#0a05a8',
    elevation:3, 
  },
  equalButtonText:{
    fontSize:32,
    color:'#fff'
  },
  image:{
    width: 35,
    height: 35,
    marginTop:10,
    marginRight:320,
  },

});