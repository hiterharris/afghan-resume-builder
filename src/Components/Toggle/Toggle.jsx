import React, { useState } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import './Toggle.css';

const Toggle = ({ english, setEnglish }) => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setEnglish(!english);
        setIsOn(!isOn);
    };

    return (
        <Box className='Toggle'>
            <Stack className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
                <div className="toggle-knob">
                    {isOn ? <span className="toggle-icon">🇦🇫</span> : <span className="toggle-icon">🇺🇸</span>}
                </div>
            </Stack>
        </Box>
    );
};

export default Toggle;
