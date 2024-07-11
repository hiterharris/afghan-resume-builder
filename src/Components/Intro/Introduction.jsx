import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import './introduction.css';
import homeLogo from './../../Assets/home-logo.png'
import { Image } from '@chakra-ui/react'
import { useContext, useEffect } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import ThemeTemplateData from '../../db/ThemeTemplateData';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

export default function Introduction() {
    const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);
    const [language, setLanguage] = useState('en    ');
    const [english, setEnglish] = useState(true);
    
    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn)
    }

    const showTheme = (e) => {
        setShowComponent(!showComponent)
        setCurrentTheme(e.target.id)
    }

    useEffect(() => {
        if (english) {
            setLanguage(languages.en)
        } else {
            setLanguage(languages.da)
        }
    }, [english]);


    const languages = {
        en: {
            heading: "Your resume in three easy steps",
            subheading: "Resume builder tools that assemble well-formatted resume. Through a resume builder, you can create a professional-looking resume in a few easy steps. This resume builder offer different template options, so you can select the template that best fits your needs and style.",
            steps: ['Select a template from our collection.', 'Build you resume using our easy to use resume builder.', 'Download your resume.'],
            selectTemplateButton: 'Select Template',
        },
        da: {
            heading: "رزومه شما در سه مرحله آسان",
            subheading: 'ابزارهای سازنده رزومه که رزومه‌های با قالب‌بندی مناسب را تهیه می‌کنند. با استفاده از یک سازنده رزومه، شما می‌توانید در چند مرحله آسان یک رزومه حرفه‌ای و زیبا بسازید. این سازنده رزومه گزینه‌های مختلف الگو را ارائه می‌دهد، بنابراین شما می‌توانید الگویی را انتخاب کنید که بهترین تطابق را با نیازها و سبک شما داشته باشد.',
            steps: ['یک الگو از مجموعه ما انتخاب کنید.', 'با استفاده از سازنده رزومه آسان ما، رزومه خود را بسازید.', 'رزومه خود را دانلود کنید.'],
            selectTemplateButton: 'انتخاب الگو'
        }
    };

    return (
        <>
            <Helmet>
                <title>Resume Builder - Create Your Resume in Minutes</title>
                <meta name="description" content="Build your professional resume in minutes using our easy-to-use online resume builder. Choose from a variety of templates and customize your resume to land your dream job. Get started now!" />
                <meta name="keywords" content="resume builder, online resume builder, professional resume, resume templates, resume designs, resume generator, resume creator, resume maker, build resume, create resume, download resume" />
                <meta name="robots" content="index,follow" />
                <meta name="author" content="Hardik Desai" />
                <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
                <meta property="og:url" content="https://quick-resume.netlify.app/about" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Button onClick={() => setEnglish(!english)}>Language: {english ? 'English' : 'Dari'}</Button>

            <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
                <Stack
                    width={{ base: '95%', md: '47%' }}
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 1.5, md: 10, sm: '14' }}>

                    {
                        selectBtn
                            ?
                            <>
                                <Heading
                                    fontWeight={600}
                                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                    lineHeight={'110%'}>
                                        {language.heading}
                                    {/* Your resume in three{' '}
                                    <Text as={'span'} color={'#38B2AC'}>
                                        easy {' '}
                                    </Text>
                                    steps */}
                                </Heading>

                                <Text color={'gray.500'} maxW={'3xl'}>
                                    {language.subheading}
                                    {/* Resume builder tools that assemble well-formatted resume. Through a resume builder, you can create a professional-looking resume in a few easy steps. This resume builder offer different template options, so you can select the template that best fits your needs and style. */}
                                </Text>

                                <Flex _dark={{ color: 'gray.50' }} textAlign={'start'} flexDirection={'column'} w={'full'}>
                                    <Box className='Bullet_Points'>
                                        <Button>1</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            {/* Select a template from our collection. */}
                                            {language.steps[0]}
                                        </Text>
                                    </Box>
                                    <Box className='Bullet_Points'>
                                        <Button>2</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            {language.steps[1]}   
                                        </Text>
                                    </Box>
                                    <Box className='Bullet_Points'>
                                        <Button>3</Button>
                                        <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
                                            {language.steps[2]}
                                        </Text>
                                    </Box>
                                </Flex>
                            </>
                            :
                            <Heading
                                m={'1.5'}
                                textAlign={{ base: 'center', md: 'start' }}
                                fontWeight={600}
                                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                lineHeight={'110%'}>
                                Select a {' '}
                                <Text as={'span'} color={'#38B2AC'}>
                                    Template {' '}
                                </Text>
                                from the list
                            </Heading>
                    }
                </Stack>

                {
                    selectBtn ?
                        <Stack>
                            <Image src={homeLogo} alt='home logo' my={'4'} />
                            <Button
                                onClick={handleSelectTemplate}
                                rounded={'full'}
                                px={6}
                                className='mb-4'
                                colorScheme={'teal'}
                                bg={'#38B2AC'}
                                _hover={{ bg: '#319795' }}>
                                {language.selectTemplateButton}
                            </Button>
                        </Stack>
                        :
                        <>
                            <Box maxW={{ base: '100%', md: '61%' }} className="templatesList">
                                {
                                    ThemeTemplateData.map((item, index) => {
                                        return <div key={index} className="template" onClick={showTheme}>
                                            <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
                                        </div>
                                    })
                                }
                            </Box>
                        </>
                }
            </Container>
        </>

    );
}
