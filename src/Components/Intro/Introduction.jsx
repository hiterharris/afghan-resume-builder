// import { Flex, Container, Heading, Stack, Text, Button, Box, Center } from '@chakra-ui/react';
// import './introduction.css';
// import homeLogo from './../../Assets/home-logo.png'
// import { Image } from '@chakra-ui/react'
// import { useContext } from 'react';
// import ResumeContext from '../../Context/ResumeContext';
// import ThemeTemplateData from '../../db/ThemeTemplateData';
// import { Helmet } from 'react-helmet';
// import { useNavigate } from 'react-router-dom'

// export default function Introduction({ english, setEnglish, language }) {
//     const { selectBtn, setSelectBtn, setCurrentTheme, showComponent, setShowComponent } = useContext(ResumeContext);

//     const handleSelectTemplate = () => {
//         setSelectBtn(!selectBtn);
//     }

//     const showTheme = (e) => {
//         setShowComponent(!showComponent)
//         setCurrentTheme(e.target.id)
//     }

//     console.log('selectBtn', selectBtn);

//     return (
//         <>
//             <Helmet>
//                 <title>Resume Builder - Create Your Resume in Minutes</title>
//                 <meta name="description" content="Build your professional resume in minutes using our easy-to-use online resume builder. Choose from a variety of templates and customize your resume to land your dream job. Get started now!" />
//                 <meta name="keywords" content="resume builder, online resume builder, professional resume, resume templates, resume designs, resume generator, resume creator, resume maker, build resume, create resume, download resume" />
//                 <meta name="robots" content="index,follow" />
//                 <meta name="author" content="Hardik Desai" />
//                 <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
//                 <meta property="og:url" content="https://quick-resume.netlify.app/about" />
//                 <meta property="og:type" content="website" />
//             </Helmet>
            
//             <Box margin={4}>
//                 <Button className='language-button' onClick={() => setEnglish(!english)}>{english ? 'Switch to Dari' : 'Switch to English'}</Button>
//             </Box>

//             <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
//                 <Stack
//                     width={{ base: '95%', md: '47%' }}
//                     textAlign={'center'}
//                     align={'center'}
//                     spacing={{ base: 8, md: 10 }}
//                     py={{ base: 1.5, md: 10, sm: '14' }}>

//                     {
//                         selectBtn
//                             ?
//                             <>
//                                 <Heading
//                                     fontWeight={600}
//                                     fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
//                                     lineHeight={'110%'}>
//                                         {language.heading}
//                                 </Heading>
//                                 <Text color={'gray.500'} maxW={'3xl'}>
//                                     {language.subheading}
//                                 </Text>
//                                 <Flex _dark={{ color: 'gray.50' }} textAlign={'start'} flexDirection={'column'} w={'full'}>
//                                     <Box className='Bullet_Points'>
//                                         <Button>1</Button>
//                                         <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
//                                             {language.steps[0]}
//                                         </Text>
//                                     </Box>
//                                     <Box className='Bullet_Points'>
//                                         <Button>2</Button>
//                                         <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
//                                             {language.steps[1]}   
//                                         </Text>
//                                     </Box>
//                                     <Box className='Bullet_Points'>
//                                         <Button>3</Button>
//                                         <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
//                                             {language.steps[2]}
//                                         </Text>
//                                     </Box>
//                                 </Flex>
//                             </>
//                             :
//                             <Heading
//                                 m={'1.5'}
//                                 textAlign={{ base: 'center', md: 'start' }}
//                                 fontWeight={600}
//                                 fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
//                                 lineHeight={'110%'}>
//                                 Select a {' '}
//                                 <Text as={'span'} color={'#38B2AC'}>
//                                     Template {' '}
//                                 </Text>
//                                 from the list
//                             </Heading>
//                     }
//                 </Stack>
//                 {
//                     selectBtn ?
//                         <Stack>
//                             <Image src={homeLogo} alt='home logo' my={'4'} />
//                             <Button
//                                 onClick={handleSelectTemplate}
//                                 rounded={'full'}
//                                 px={6}
//                                 className='mb-4'
//                                 colorScheme={'teal'}
//                                 bg={'#38B2AC'}
//                                 _hover={{ bg: '#319795' }}>
//                                 {language.selectTemplateButton}
//                             </Button>
//                         </Stack>
//                         :
//                         <>
//                             <Box maxW={{ base: '100%', md: '61%' }} className="templatesList">
//                                 {
//                                     ThemeTemplateData.map((item, index) => {
//                                         return <div key={index} className="template" onClick={showTheme}>
//                                             <img id={item.id} src={item.imageSrc} alt={item.imageAlt} />
//                                         </div>
//                                     })
//                                 }
//                             </Box>
//                         </>
//                 }
//             </Container>
//         </>
//     );
// }
