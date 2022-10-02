import { StarIcon } from '@chakra-ui/icons';
import {
    Button,
    Center,
    Heading,
    Stack,
    Text,
    Box,
    useColorModeValue,
  } from '@chakra-ui/react';
  

  export default function BookCard() {
    return (
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '50%', md: '300px' }}
          height={{ sm: '376px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Book Title
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              Book Author
            </Text>

            <Stack 
                width={'100%'}
                mt={'2rem'}
                direction={'row'}
                padding={2}
                justifyContent={'center'}
                alignItems={'center'}>
                <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                        <StarIcon
                            key={i}
                            color={i < 5 ? 'teal.500' : 'gray.300'}
                        />
                    ))}
                </Box>
            </Stack>
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                See Details
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }
  