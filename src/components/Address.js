import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TWzipcode from 'react-twzipcode';

class Address extends Component {
  handleChange = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <TWzipcode
          countyFieldName={'縣市'}
          countyValue={'台北市'}
          zipcodePlaceholder={'郵遞區號'}
          css={[
            'form-control county-sel',
            'form-control district-sel',
            'form-control zipcode',
          ]}
          handleChangeCounty={this.handleChange}
          handleChangeDistrict={this.handleChange}
          handleChangeZipcode={this.handleChange}
        />
      </div>
    );
  }
}

export default Address;
