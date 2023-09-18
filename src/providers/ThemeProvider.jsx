"use client";

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const ThemeProvider = ({children}) => {
    const {theme} = useContext(ThemeContext);
    console.log(theme);
    return <div className={theme}>{children}</div>;
};

export default ThemeProvider;