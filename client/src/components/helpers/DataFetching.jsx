import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';
const xml = new XMLParser();

export default function DataFetching() {
    const [backendData, setBackendData] = useState([{}]); //empty array at beginning

    useEffect(() => {
        axios.get("http://localhost:8000/api/firefly/auth_url") // gets the url needed to obtain secret token
            .then(response => {
                axios.get(`${response.data}`)
                    .then(response => {
                        response = xml.parse(response.data)

                        axios.post("http://localhost:8000/api/firefly/auth_secret", JSON.stringify({ secret: response.token.secret }), {
                            headers: {
                                'content-type': 'application/json'
                            }
                        })
                            .then(() => {
                                axios.get("http://localhost:8000/api/firefly/auth_secret")
                                    .then(response => {
                                        console.log(response.data)
                                    })
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    })
                    .catch(error => {
                        if (error.code == "ERR_BAD_REQUEST") {
                            console.log("Log in to Firefly first...") // change to modal message
                        }
                    })
            })
    }, [])
    return (
        <h1>Test</h1>
    )
}
