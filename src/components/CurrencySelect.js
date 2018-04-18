import React, { Component } from 'react';
import './CurrencySelect.css'
class CurrencySelect extends Component {
  render() {
    const { currentValue, options, onChange } = this.props;
    return (
      <select className="currencySelect" value={currentValue} onChange={onChange}>
        {options.map((option) => <option key={option} value={option}> {option} </option>)}
      </select>
    );
  }
}

export default CurrencySelect;
