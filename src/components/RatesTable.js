import React, { Component } from 'react';
import './RatesTable.css'

class RatesTable extends Component {
  render() {
    const { ratesObject, tableName, tableClassName } = this.props;
    if (!ratesObject) {
      return (
        <div>
        </div>
      )
    }
    return (
      <div className="tableContainer">
        <h3>
          {tableName}
        </h3>
        <table className={`table ${tableClassName}`} cellSpacing="0">
          <thead>
            <tr>
              <th> Rate </th>
              <th> Quantity </th>
              <th> Exchanges </th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(ratesObject).map( rate => {
            return (
              <tr key={rate}>
                <td>
                  { rate }
                </td>
                <td>
                  { ratesObject[rate].quantity }
                </td>
                <td>
                  { ratesObject[rate].supportedExchanges.join(', ') }
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RatesTable;
