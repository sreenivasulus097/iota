import React from 'react';
import styles from '../styles/footer.module.css';
import { Box, Container, Flex, Heading, Icon, Spacer, StackDivider, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { BsYoutube, BsGithub, BsTwitter, BsReddit, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaDiscord, FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box className={styles.cover} pt={22}>
      <Container maxW='6xl'  px={['10', 0]}>
        <VStack
          divider={<StackDivider borderColor='gray.500' />}
          align='strecth'
          pt={30}
        >
          <Box className={styles.alignTxt} mb={8} color='grey.200'>
            <Heading fontSize={['24', '36']}>IOTA Provides Digital Trust,</Heading>
            <Heading fontSize={['24', '36']}>Enabling Us To Build</Heading>
            <Heading fontSize={['24', '36']}>A Better World</Heading>
          </Box>
          
          <Box mt={8}>
          <Flex color='gray.400' pb={16} direction={['column', 'column', 'row']}>
            
              <Box>
              <Heading size='md' fontSize={14} pb={4} className={styles.alignTxt} >Registered Address</Heading>
              <Text maxW='8rem' fontSize={14} className={styles.alignTxt} >IOTA Foundation 
                    Pappelallee 78/79 
                    10437 Berlin
                    Germany
              </Text>
              </Box>
            
            <Spacer />
            
              <Text fontSize={14} className={styles.alignTxt} w={['1000', '28rem']} pt={[8, 0, 0]}>© 2022 IOTA Foundation - Privacy Policy , Impressum , Trademark Policy 
                    Get in touch: Contact Us 
                    Board of Directors: Dominik Schiener and Navin Ramachandran 
                    ID/Company No.: 3416/1234/2 
                    EU public ID number in the EU Transparency Register: 500027331119-04 
                    VAT ID: DE329624902
              </Text>
            
          </Flex>
          </Box>
        </VStack>
      </Container >
      <Flex w='full' h={['12', '16']}>
        <Flex  bg='#161F35' className={styles.ele} w='full' alignItems='center' justifyContent='center'>
          <Icon as={BsYoutube} w={[6, 8, 12, 18]} />
          <Heading px={[0, 0, 0, 2]} fontSize={[0, 0, 0, 18]}>Youtube</Heading>
        </Flex>
        <Flex bg='#2E384E'  className={styles.ele} w='full' alignItems='center' justifyContent='center'>
          <Icon as={BsGithub} w={[6, 8, 12, 18]}  />
          <Heading px={[0, 0, 0, 2]} fontSize={[0, 0, 0, 18]}>GitHub</Heading>
        </Flex>
        <Flex   bg='#4D566D' className={styles.ele} w='full' alignItems='center' justifyContent='center'>
          <Icon as={FaDiscord} w={[6, 8, 12, 18]} />
          <Heading px={[0, 0, 0, 2]} fontSize={[0, 0, 0, 18]}>Discord</Heading>
        </Flex>
        <Flex  bg='#6C768C' className={styles.ele} w='full' alignItems='center' justifyContent='center'>
          <Icon as={BsTwitter} w={[6, 8, 12, 18]}  />
          <Heading px={[0, 0, 0, 2]} fontSize={[0, 0, 0, 18]}>Twitter</Heading>
        </Flex>
        <Flex   bg='#7F899F' className={styles.ele} w='full' alignItems='center' justifyContent='center'>
          <Icon as={BsReddit} w={[6, 8, 12, 18]}  />
          <Heading px={[0, 0, 0, 2]} fontSize={[0, 0, 0, 18]}>Reddit</Heading>
        </Flex>
        <Flex bg='#8A95AA' className={styles.ele} w='full' alignItems='center' justifyContent='center' >
          <Icon as={BsLinkedin} w={[6, 8, 12, 18]}  />
          <Heading px={[0, 0, 0, 2]} fontSize={[0, 0, 0, 18]}>Linkedin</Heading>
        </Flex>
        <Flex  bg='#9CA5BB' className={styles.ele} w='full' alignItems='center' justifyContent='center'>
          <Icon as={BsInstagram} w={[6, 8, 12, 18]}  />
          <Heading px={[0, 0, 0, 2]} fontSize={[0, 0, 0, 18]}>Instagram</Heading>
        </Flex>
        <Flex  bg='#BCC6DC' className={styles.ele} w='full' alignItems='center' justifyContent='center'>
          <Icon as={FaFacebookSquare} w={[6, 8, 12, 18]}  />
          <Heading px={[0, 0, 0, 2]} fontSize={[0, 0, 0, 18]}>Facebook</Heading>
        </Flex>
      </Flex>
    </Box>
    );
}

export default Footer;