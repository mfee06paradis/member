import React, { useState, useEffect } from 'react';
import TWzipcode from 'react-twzipcode';

function Address() {
  const [county, setCounty] = useState('');
  const [address, setAddress] = useState('');
  const [addressData, setAddressData] = useState('');
  const handleChange = (data) => {
    setAddress(data.county + data.district + data.zipcode);
  };
  useEffect(() => {
    const member = JSON.parse(localStorage.getItem('Member')) || [];
    setCounty(member.MemberAddress.substr(0, 3));
    setAddress(member.MemberAddress);
  }, []);

  return (
    <>
      <div className="row accountRow">
        <div className="col-1"></div>
        <div className="col-11">地址</div>
        <div className="col-1"></div>
        <div className="col-3">
          <p>縣市</p>
          <p>區/鄉/鎮</p>
          <p>郵遞區號</p>
        </div>
        <div>
          <TWzipcode
            countyValue={county}
            districtValue={''}
            zipcodePlaceholder={'郵遞區號'}
            css={[
              'form-control county-sel',
              'form-control district-sel',
              'form-control zipcode',
            ]}
            handleChangeCounty={handleChange}
            handleChangeDistrict={handleChange}
            handleChangeZipcode={handleChange}
          />
        </div>
        <div className="col-12"></div>
        <div className="col-1"></div>
        <span className="col-lg-3 col-5">
          <input type="text" style={{ height: '2em' }} value={address} />
        </span>
        <span className="addressPC">
          <input
            type="text"
            style={{ height: '2em', width: '108%' }}
            onChange={(event) => {
              setAddressData(address + event.target.value);
            }}
            onBlur={() => {
              sessionStorage.setItem('address', JSON.stringify(addressData));
            }}
          />
        </span>
        <div className="col-5 addressMobile" style={{ display: 'none' }}>
          <input
            type="text"
            style={{ height: '2em', width: '108%' }}
            onChange={(event) => {
              setAddressData(address + event.target.value);
            }}
            onBlur={() => {
              sessionStorage.setItem('address', JSON.stringify(addressData));
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Address;
