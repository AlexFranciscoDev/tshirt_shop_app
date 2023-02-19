import React, { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global';
import { Petition } from '../../helpers/Petition';
import { List } from './List';

export const Tshirts = () => {
  const [tshirts, setTshirts] = useState([]);
  
  useEffect(() => {
    getTshirts();
  }, [])

  {/* Get tshirts*/ }
  const getTshirts = async () => {
    const url = Global.url + 'tshirts';
    const data  = await Petition(url, 'GET');
    if (data.status === 'Success') {
      setTshirts(data.tshirts);
    }
  }

  return (
    <>
      {tshirts.length >= 1 ? <List tshirts={tshirts} setTshirts={setTshirts}></List> : 'There is no tshirts available'}
    </>
  )
}
