import React from 'react'
import useDarkMode from 'use-dark-mode';
import Toggle from './ToggleBtn';

const DarkMode = () => {
    const darkMode = useDarkMode(false);

    return (
        <div>
            <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
        </div>
    );
};

export default DarkMode;
