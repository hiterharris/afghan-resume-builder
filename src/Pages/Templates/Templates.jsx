import { Container, Heading, Stack, Box } from '@chakra-ui/react';
import '../pages.css';
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import { useNavigate } from 'react-router-dom'

export default function Templates({ language }) {
    const { setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext)
    const navigate = useNavigate();

    const showTheme = (e) => {
        setShowComponent(!showComponent);
        setCurrentTheme(e.target.id);
        navigate('/theme');
    }

    return (
        <>
            <Container my={{ base: 1.5, md: 32 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'column', sm: 'column' }} display={'flex'} alignItems={'center'} maxW='100%'>
                <Stack
                    width={{ base: '95%', md: '80%' }}
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 1.5, md: 10, sm: '14' }}>
                    <Heading
                        textAlign={{ base: 'center', md: 'start' }}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    >
                        {language.selectTemplateHeading}
                    </Heading>

                </Stack>
                <Box maxW={{ base: '100%', md: '100%' }} className="templatesList">
                    {
                        ThemeTemplateData.map((item, index) => {
                            return <div key={index} className="template" onClick={showTheme}>
                                <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                            </div>
                        })
                    }
                </Box>
            </Container>
        </>
    );
}
