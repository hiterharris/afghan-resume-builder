import { React, useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import BuilderArea from '../BuilderArea';
import Theme1 from './../../Theme/Theme1/Theme1';
import Theme2 from '../../Theme/Theme2/Theme2';
import Theme3 from '../../Theme/Theme3/Theme3';
import ErrorPage from '../Error/ErrorPage';
import { Button, Box } from '@chakra-ui/react';

const themeComponents = {
    Theme1: Theme1,
    Theme2: Theme2,
    Theme3: Theme3,
};

const Theme = ({ english, setEnglish }) => {
    const { currentTheme, themeData, componentRef } = useContext(ResumeContext);

    const renderThemeComponent = () => {
        const ThemeComponent = themeComponents[currentTheme];
        if (!ThemeComponent) return <ErrorPage />;
        return <BuilderArea theme={<ThemeComponent componentRef={componentRef} themeData={themeData} />} />;
    };

    return (
        <>
            <Box margin={4}>
                {/* <Button className='language-button' minWidth={36} onClick={() => setEnglish(!english)}>{english ? 'تغییر به دری' : 'Switch to English'}</Button> */}
                <Button className='language-button' minWidth={36} onClick={() => setEnglish(!english)}>{english ? 'Switch to Dari' : 'Switch to English'}</Button>
            </Box>
            {renderThemeComponent()}
        </>
    );
};

export default Theme;