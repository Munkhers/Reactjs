import React, { useState } from 'react'


const data = {
    "name": "John",
    "additionalData": {
        "instructor": true,
        "favoriteHobbies": [
            "Coding",
            "Playing Basketball"
        ],
        "favoriteFood": {
            "type": "soup",
            "includeNoodle": true
        },
        "moreDetails": {
            "favoriteBasketballPlayer": "Kyrie Irving",
            "numberOfSiblings": 5,
            "isYoungest": true,
            "hometown": {
                "city": "Portland",
                "state": "OR"
            },
            "citiesLivedIn": [
                "Portland",
                "Chicago",
                "Ulaanbaatar"
            ]
        }
    }
}

const DataManipulation = () => {
    const [sampleData, setSampleData] = useState(data)

    return (
        <div>
            <pre>{JSON.stringify(sampleData, null, 2)}</pre>

            <button onClick={() => {
                setSampleData(prevState => ({
                    ...prevState,
                        name: 'Munkh',
                }))
            }}>Change name</button>

            <button onClick={() => {
                setSampleData(prevState => ({
                    ...prevState,
                        additionalData: {
                        ...prevState.additionalData,
                            favoriteHobbies:
                                [...prevState.additionalData.favoriteHobbies, 'watch soccer']
                    }
                }))
            }}>Add hobby</button>

            <button onClick={() => {
                setSampleData((prevState) => ({
                    ...prevState,
                        additionalData: {
                        ...prevState.additionalData,
                            favoriteFood: {
                            ...prevState.additionalData.favoriteFood,
                                    includeNoodle: false,
                        }
                    }
                }))
            }}>includeNoodle to false</button>

            <button onClick={() => {
                setSampleData((prevState) => ({
                    ...prevState,
                        additionalData: {
                            ...prevState.additionalData,
                                moreDetails: {
                                    ...prevState.additionalData.moreDetails,
                                            isYoungest: false
                        }
                    }

                }))
            }}>Change more details</button>

            <button onClick={() => {
                setSampleData(prevState => ({
                    ...prevState,
                        additionalData: {
                            ...prevState.additionalData,
                                moreDetails: {
                                    ...prevState.additionalData.moreDetails,
                                        hometown: {
                                            ...prevState.additionalData.moreDetails.hometown,
                                                    state: 'IL'
                            }
                        }
                    }
                }))

            }

            }>Change Hometown</button>

            <button onClick={() => {
                setSampleData(prevState => ({
                    ...prevState,
                        additionalData: {
                            ...prevState.additionalData,
                                moreDetails: {
                                    ...prevState.additionalData.moreDetails,
                                        citiesLivedIn: 
                                            prevState.additionalData.moreDetails.citiesLivedIn.filter(item => item !== 'Ulaanbaatar')
                                        
                        }
                    }
                }))

            }

            }>Remove city</button>

            <button onClick={() => {
                setSampleData(prevState => ({
                    ...prevState,
                        additionalData: {
                            ...prevState.additionalData,
                                moreDetails: {
                                    ...prevState.additionalData.moreDetails,
                                        citiesLivedIn: [
                                            ...prevState.additionalData.moreDetails.citiesLivedIn, 'Schaumburg'
                            ]
                        }
                    }
                }))
            }
            }>Add city</button>

        </div>
    )
}

export default DataManipulation





