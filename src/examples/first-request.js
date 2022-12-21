import React, { useEffect } from "react";
import axios from "axios";

// api url
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {

    const fetchData = async () => {
        try {
            const response = await axios(url)
            const data = response.data
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

  useEffect(() => {
    fetchData()
    // console.log("First axios request");
  }, []);

  return <h2 className="text-center">First-request</h2>;
};

export default FirstRequest;
