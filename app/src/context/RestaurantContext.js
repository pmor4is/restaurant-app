import React, { createContext, useState } from 'react';

export const RestaurantsContext = createContext();

const initialState = {
    name: '',
    categories: '',
    address: '',
    description: '',
};

export const RestaurantsProvider = ({children}) => {
    const [data, setData] = useState(initialState);

    return (
        <RestaurantsContext.Provider value={{data, setData}} >
            {children}
        </RestaurantsContext.Provider>
    )
}