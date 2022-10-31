import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('https://botw-compendium.herokuapp.com/api/v2/all')
      .then((res) => {
        setData(res.data);
      });
  }, []);

  console.log(data);

  return <div>Home</div>;
};

export default Home;
