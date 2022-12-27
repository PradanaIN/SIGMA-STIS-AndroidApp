import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const state = () => {
  const [data, setData] = useState({});
  const getEvents = async () => {
    const result = await axios({
      url: 'https://222011287.student.stis.ac.id/event',
      method: 'GET',
    });
    setData(result.data.event);
  };
  useEffect(() => {
    getEvents();
  });

  return {data}
};

export default state;

// export default state = {
//   jobs: [
//     {
//       id: 'A123',
//       name: 'KSM PPK',
//       prioritas: 'Tinggi',
//       tanggal: '22/12/2022',
//       waktu: '20.00',
//     },
//     {
//       id: 'A122',
//       name: 'KSM OS',
//       prioritas: 'Tinggi',
//       tanggal: '22/12/2022',
//       waktu: '20.00',
//     },
//     {
//       id: 'A125',
//       name: 'KSM APG',
//       prioritas: 'Tinggi',
//       tanggal: '22/12/2022',
//       waktu: '20.00',
//     },
//   ]
// };
