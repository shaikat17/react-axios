import React, { useEffect } from 'react'
import axios from 'axios';

import authFetch from '../axios/custom';

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
   const fetchData = async () => {
     // console.log('Global axios instance');
     try {
        const response = authFetch('/react-store-products')
       const response2 = await axios(randomUserUrl);
       const data = response.data;
       console.log(data);
     } catch (error) {}
   };

   useEffect(() => {
     fetchData();
   }, []);

   return <h2 className="text-center">CustomInstance</h2>;
}

export default CustomInstance