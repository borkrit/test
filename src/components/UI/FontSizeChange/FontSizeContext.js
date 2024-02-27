import React, { createContext, useContext, useState, useEffect } from 'react';

const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
    const savedFontSize = localStorage.getItem('fontSize');
    const [fontSize, setFontSize] = useState(savedFontSize ? parseFloat(savedFontSize) : 0);
    const [aPlusClicked, setAPlusClicked] = useState(false);

    const updateFontSize = (change) => {
        const computedBodyStyle = window.getComputedStyle(document.body);
        const currentBodyFontSize = parseFloat(computedBodyStyle.fontSize);
        const newBodyFontSize = currentBodyFontSize + change;

        document.body.style.fontSize = `${newBodyFontSize}px`;

        document.querySelectorAll('body *').forEach((element) => {
            const computedStyle = window.getComputedStyle(element);
            const currentFontSize = parseFloat(computedStyle.fontSize);
            const newFontSize = currentFontSize + change;

            element.style.fontSize = `${newFontSize}px`;
        });

        setFontSize((prevFontSize) => prevFontSize + change);
        setAPlusClicked(true);
    };

    const resetFontSize = () => {
        document.body.style.fontSize = '';

        document.querySelectorAll('body *').forEach((element) => {
            element.style.fontSize = '';
        });

        setFontSize(0);
        setAPlusClicked(false);
    };

    // Применяем сохраненный размер при загрузке страницы
    useEffect(() => {
        if (savedFontSize) {
            updateFontSize(0);
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    // Добавляем слушатель события для обновления размера шрифта при изменении размеров окна
    useEffect(() => {
        const handleResize = () => {
            updateFontSize(0);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Сохраняем значение fontSize в localStorage при его изменении
    useEffect(() => {
        localStorage.setItem('fontSize', fontSize);
    }, [fontSize]);

    return (
        <FontSizeContext.Provider value={{ fontSize, aPlusClicked, updateFontSize, resetFontSize }}>
            {children}
        </FontSizeContext.Provider>
    );
};

export const useFontSize = () => {
    const context = useContext(FontSizeContext);
    if (!context) {
        throw new Error('useFontSize must be used within a FontSizeProvider');
    }
    return context;
};
