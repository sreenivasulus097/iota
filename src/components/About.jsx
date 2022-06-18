import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import styles from '../styles/about.module.css';
import React from 'react';

const About = () => {
  return (
    <Flex alignItems='center' justifyContent='center' direction={['column']} bgColor="white" h={['85vh', '110vh']}>
      <Heading color='teal.300' fontSize='md' my={8}>INTRODUCING</Heading>
      <Heading color='black' w={['90%', '32rem']}>An Open, Feeless Data And Value Transfer Protocol</Heading>
      <Box className={styles.box} my={8}></Box>
      <Text color='black' w={['90%', '30rem']}>IOTA has fundamentally reengineered distributed ledger technology, enabling secure exchange of both value and data, without any fees.</Text>
      <Button _hover={{ bg: "teal.400" }} bg='teal.600' my={8} p={6}>LEARN ABOUT IOTA</Button>
    </Flex>
  );
}

export default About;
