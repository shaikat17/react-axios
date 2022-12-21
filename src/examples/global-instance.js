import React, { useEffect } from 'react'
import axios from 'axios'

const productsUrl = 'https://course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstance = () => {
  const fetchData = async () => {
    // console.log('Global axios instance');
    try {
      const response = await axios(productsUrl)
      const response2 = await axios(randomUserUrl)
      const data = response.data
      console.log(data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <h2 className='text-center'>GlobalInstance</h2>
  )
}

export default GlobalInstance