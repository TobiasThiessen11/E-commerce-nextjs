"use client"
import {createContext, useState, useContext} from 'react'

const AppContext = createContext<any>(undefined);

export function AppWrapper({children} : {
    children: React.ReactNode;
} ) {
    let [name, setName] = useState('Julian')

    return (
        <AppContext.Provider value={{
            name,
            setName
            }}>
            {children}
        </AppContext.Provider>
    )

}

export function useAppContext() {
     return useContext(AppContext);
}