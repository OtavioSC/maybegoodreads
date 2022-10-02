import { BellIcon, TimeIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';


export default function FeedCard() {
  return (
    <Center py={6}>
      <Box
        maxW={'70%'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            <BellIcon/> New notification
          </Heading>
          <Text marginTop={2} color={'gray.500'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Stack direction={'row'} spacing={0} fontSize={'sm'}>
          <TimeIcon marginRight={2}/>    
            <Text color={'gray.500'}> Datetime </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
