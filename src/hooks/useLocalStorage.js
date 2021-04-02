import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key)
            return item !== null ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setLocalStorage = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setStoredValue(value);
        } catch (error) {
            console.log(error);
        }
    }

    return [
        storedValue,
        setLocalStorage
    ]    
    
}