import { React, useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import BuilderArea from '../BuilderArea';
import Theme1 from './../../Theme/Theme1/Theme1';
import Theme2 from '../../Theme/Theme2/Theme2';
import Theme3 from '../../Theme/Theme3/Theme3';
import ErrorPage from '../Error/ErrorPage';

const themeComponents = {
    Theme1: Theme1,
    Theme2: Theme2,
    Theme3: Theme3,
};

const Theme = ({ language }) => {
    const { currentTheme, themeData, componentRef } = useContext(ResumeContext);

    const renderThemeComponent = () => {
        const ThemeComponent = themeComponents[currentTheme];
        if (!ThemeComponent) return <ErrorPage />;
        return (
            <BuilderArea 
                theme={<ThemeComponent componentRef={componentRef} themeData={themeData} />} 
                language={language} 
            />
        )
    };

    return (
        <>
            {renderThemeComponent()}
        </>
    );
};

export default Theme;