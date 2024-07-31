import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import '../pages.css';
import homeLogo from './../../Assets/home-logo.png'
import { Image } from '@chakra-ui/react'
import { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import { useNavigate } from 'react-router-dom'

export default function Homepage({ language }) {
    const { selectBtn, setSelectBtn } = useContext(ResumeContext);
    const navigate = useNavigate();

    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn);
        navigate('/templates')
    }

    return (
        <>
            <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
                <Stack
                    width={{ base: '95%', md: '47%' }}
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 1.5, md: 10, sm: '14' }}>
                    <>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                            lineHeight={'110%'}>
                            {language.heading}
                        </Heading>
                        <Text color={'gray.500'} maxW={'3xl'}>
                            {language.subheading}
                        </Text>
                        <Flex _dark={{ color: 'gray.50' }} textAlign={'start'} flexDirection={'column'} w={'full'}>
                            <Box className='Bullet_Points'>
                                <Button>1</Button>
                                <Text _dark={{ color: "gray.400" }} color={'gray.900'} fontSize={'xl'}>
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
                </Stack>
                <Stack>
                    <Image src={homeLogo} alt='home logo' my={'4'} />
                    <Button
                        onClick={handleSelectTemplate}
                        rounded={'full'}
                        padding={8}
                        className='mb-4'
                        colorScheme={'teal'}
                        bg={'#38B2AC'}
                        _hover={{ bg: '#319795' }}>
                        {language.selectTemplateButton}
                    </Button>
                </Stack>
            </Container>
        </>
    );
}
