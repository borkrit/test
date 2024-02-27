import React, { useState, useContext, createContext } from 'react';

const FloatingButtonContext = createContext();

export const useFloatingButton = () => {
    return useContext(FloatingButtonContext);
};

export const FloatingButtonProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleButton = () => {
        setIsOpen(!isOpen);
    };

    return (
        <FloatingButtonContext.Provider value={{ isOpen, toggleButton }}>
            {children}
        </FloatingButtonContext.Provider>
    );
};
