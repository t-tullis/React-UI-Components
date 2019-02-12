import React from 'react';
import './App.css';
// import ButtonContainer from './components/ButtonComponents/ButtonContainer'
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className= 'calc-container'>
      <CalculatorDisplay  />
      <div className = 'action-btns'>
        <ActionButton buttonStyle='red-button' text = "Clear" />
        <NumberButton buttonStyle='number-btns' className = 'operator' text = "/" />
      </div>
        <div className = 'row'>
          <NumberButton buttonStyle='number-btns' text= "7"/>
          <NumberButton buttonStyle='number-btns' text = "8"/>
          <NumberButton buttonStyle='number-btns' text = "9"/>
          <NumberButton buttonStyle='red-button' text = "X" />
      </div>
      <div className = 'row'>
          <NumberButton buttonStyle='number-btns' text= "4"/>
          <NumberButton buttonStyle='number-btns' text = "5"/>
          <NumberButton buttonStyle='number-btns' text = "6"/>
          <NumberButton buttonStyle='red-button'  text = "-" />
      </div>
      <div className = 'row'>
          <NumberButton buttonStyle='number-btns' text= "1"/>
          <NumberButton buttonStyle='number-btns' text = "2"/>
          <NumberButton buttonStyle='number-btns' text = "3"/>
          <NumberButton buttonStyle='red-button' text = "+" />
      </div>
      <div className = 'action-btns'>
        <ActionButton buttonStyle='number-btns' text = "0" />
        <NumberButton buttonStyle='red-button' text = "=" />
      </div>
    </div>
  );
};

export default App;
