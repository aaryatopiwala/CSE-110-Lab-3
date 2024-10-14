// ThemeContext.ts
import React, { createContext, useState } from 'react';

export const themes = {
 light: {
   foreground: '#000000',
   background: '#eeeeee',
 },
 dark: {
   foreground: '#ffffff',
   background: '#222222',
 },
};

export const ThemeContext = createContext(themes.light);

// export const ThemeProvider = ({ }) => {
//     const [currentTheme, setCurrentTheme] = useState(themes.light);

//     function toggleTheme() {
//         setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
//     }

//     return (
//         <ThemeContext.Provider value = {{ currentTheme }}>

//         </ThemeContext.Provider>
//     );
// };
