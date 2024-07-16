import { useContext, useEffect } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import { Box, Flex, HStack, useDisclosure, useColorMode, useColorModeValue, Stack, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom'
import back from './../../Assets/back.png';
import backWhite from './../../Assets/back-white.png';
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar({ language }) {
    const { selectBtn, setSelectBtn } = useContext(ResumeContext)
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen } = useDisclosure();
    const content = language.nav;
    const navigate = useNavigate();
    const location = useLocation();

    const handleBackButton = () => {
        setSelectBtn(!selectBtn);
        navigate(-1);
        setTimeout(() => {
            window.scrollTo(0, 0)
          }, 200)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location]);

    return (
        <>
            <Box id='navbar' bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box onClick={handleBackButton} style={{ cursor: 'pointer' }}>
                        {location.pathname != '/' && <img style={{ height: '44px' }} src={colorMode === 'light' ? back : backWhite} alt='back' />}
                    </Box>
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200', fontWeight: 'bold' }} to={'/'}>{content.home}</Link>
                        </HStack>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </HStack>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/'} >Home </Link>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }} to={'/about'}> About</Link>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
