import React, { Component } from 'react';

class RatesTable extends Component {
  render() {
    const { ratesObject, tableName } = this.props;
    if (!ratesObject) {
      return (
        <div>
        </div>
      )
    }
    return (
      <div>
        <div>
          {tableName}
        </div>
        <table>
          <tr>
            <th> Rate </th>
            <th> Quantity </th>
            <th> Exchanges </th>
          </tr>
          {Object.keys(ratesObject).map( rate => {
            return (
              <tr>
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
        </table>
      </div>
    );
  }
}

export default RatesTable;
