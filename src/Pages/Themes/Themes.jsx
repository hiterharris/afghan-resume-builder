import { React, useContext } from 'react'
import Introduction from '../../Components/Intro/Introduction'
import ResumeContext from '../../Context/ResumeContext';
import BuilderArea from '../BuilderArea';
import Theme1 from './../../Theme/Theme1/Theme1'
import Theme2 from '../../Theme/Theme2/Theme2';
import Theme3 from '../../Theme/Theme3/Theme3';
import ErrorPage from '../Error/ErrorPage';
import Templates from '../Templates/Templates';
import { render } from '@testing-library/react';


const Themes = ({ english, setEnglish, language }) => {
    const { currentTheme, showComponent, themeData, componentRef } = useContext(ResumeContext);

    const renderThemeComponent = () => {
        // Example conditional rendering
        if (!selectedTheme) return null; // or some default message/component

        // Assuming you have components for each theme
        switch (currentTheme) {
            case 'Theme1':
                return <BuilderArea theme={<Theme1 componentRef={componentRef} themeData={themeData} />} />
            case 'Theme2':
                return <BuilderArea theme={<Theme2 componentRef={componentRef} themeData={themeData} />} />
            case 'Theme3':
                return <BuilderArea theme={<Theme3 componentRef={componentRef} themeData={themeData} />} />
            case 'Theme4':
                return  <ErrorPage />
            // Add cases for other themes
            default:
                return <Templates english={english} setEnglish={setEnglish} language={language} />
        }
    };



    return (
        <>
        {renderThemeComponent()}
            {/* {
                !showComponent && <Introduction english={english} setEnglish={setEnglish} language={language} />
            } */}
            {/* {
                (showComponent && currentTheme === 'Theme1') && <BuilderArea theme={<Theme1 componentRef={componentRef} themeData={themeData} />} />
            }
            {
                (showComponent && currentTheme === 'Theme2') && <BuilderArea theme={<Theme2 componentRef={componentRef} themeData={themeData} />} />
            }
            {
                (showComponent && currentTheme === 'Theme3') && <BuilderArea theme={<Theme3 componentRef={componentRef} themeData={themeData} />} />
            }
            {
                (showComponent && currentTheme === 'Theme4') && <ErrorPage />
            } */}
        </>
    )
}

export default Themes
