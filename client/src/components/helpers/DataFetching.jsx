 import React, { useState, useEffect } from 'react';

 export default function DataFetching(){
     const [backendData, setBackendData] = useState([{}]); //empty array at beginning

     useEffect(() => {
         fetch("http://localhost:8000/api").then((res) => {
                 res.json()
             }).then((data) => {
                 setBackendData(data);
             })
             .catch((err) => {
                 console.log("Error:", err);
             })
     }, [])
     return (
        <h1>Test</h1>
     )
 }
