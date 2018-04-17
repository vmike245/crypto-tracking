import React, { Component } from 'react';

class CurrencySelect extends Component {
  render() {
    const { currentValue, options, onChange } = this.props;
    return (
      <select value={currentValue} onChange={onChange}>
        {options.map((option) => <option key={option} value={option}> {option} </option>)}
      </select>
    );
  }
}

export default CurrencySelect;
