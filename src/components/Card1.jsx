import React, { useState } from "react";
import { motion, isValidMotionProp } from "framer-motion";
import {
  Text,
  Heading,
  Box,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'

const box1Variants = {
    initialState: {
      backgroundImage: "linear-gradient(#ffffff,#ffffff)",
      borderRadius:"10px",
      border: "3px solid #2ad5cb",
      // borderImage: "linear-gradient(to left top, #11c2b8, #2ad5cb) 1",
      // borderImageSlice: "1"
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        backgroundImage: "linear-gradient(#ffffff,#ffffff)"
      },
      // backgroundImage: "linear-gradient(#ffffff,#ffffff)",
      // borderImage: "linear-gradient(to left top, #11c2b8, #2ad5cb) 1",
      // borderRadius:"3%"
    },
    hover: {
      scale: 1.05,
      color: "white",
      cursor:'pointer',
      backgroundImage: "linear-gradient(#2ad5cb,#11c2b8)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

const textVariants = {
    initialState: {
      x: 0
    },
    getBack: {
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  const border1Variants={
    initialState: {
      border: ""
    },
    visible: {
      border:"2px solid #ffffff",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    },
  hover:{
      border:'2px solid #67d9d3',
      transition:{
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  }
  

const Card1 = () => {
    const [hoveredCard1, setHoveredCard1] = useState(false);

  return (<>
      <Box
    as={motion.div}
    width="330px"
    height="auto"
    position="relative"
    variants={box1Variants}
    whileHover="hover"
    // borderWidth="3px"
    // borderStyle="solid"
    // borderImage="linear-gradient(#2ad5cb,#11c2b8)"
    // borderImage: "linear-gradient(to right, darkblue, darkorchid) 1"
    // borderColor='#2ad5cb'
    padding="30px"
    paddingTop="50px"
    paddingBottom="40px"
    // borderRadius="3%"
    // backgroundImage="linearGradient"
    animate="visible"
    initial="initialState"
    onMouseEnter={() => setHoveredCard1(true)}
    onMouseLeave={() => setHoveredCard1(false)}
  >
    <Heading fontSize="15px" color={hoveredCard1 ? "#ffffff" : "#7b869c"}>
      COMMUNITY
    </Heading>
    <Heading fontSize="28px" color={hoveredCard1 ? "#ffffff" : "#000000"}>
      Explore
    </Heading>
    <Text marginTop="40px" color={hoveredCard1 ? "#ffffff" : "#7b869c"}>
      Connect with like-minded people in the community
    </Text>
    <UnorderedList
      marginLeft="-4px"
      color={hoveredCard1 ? "#ffffff" : "#000000"}
    >
      <ListItem
        // padding="8px"
        paddingTop="8px"
        paddingBottom="8px"
        textAlign="left"
        display='flex'
        flexDirection='row'
      > 
      <ChevronRightIcon marginTop='1px' boxSize={23} color="#c8d3e6"></ChevronRightIcon>
        <Text
          as={motion.div}
          whileHover="hover"
          initial="initialState"
          animate="getBack"
          variants={textVariants}>
          Download the wallet
        </Text>  
      </ListItem>
      <ListItem
        // padding="8px"
        paddingTop="8px"
        paddingBottom="8px"
        textAlign="left"
        display='flex'
        flexDirection='row'
      > 
      <ChevronRightIcon marginTop='1px' boxSize={23} color="#c8d3e6"></ChevronRightIcon>
        <Text
          as={motion.div}
          whileHover="hover"
          initial="initialState"
          animate="getBack"
          variants={textVariants}>
          Buy IOTA
        </Text>  
      </ListItem>
      <ListItem
        // padding="8px"
        paddingTop="8px"
        paddingBottom="8px"
        textAlign="left"
        display='flex'
        flexDirection='row'
      > 
      <ChevronRightIcon marginTop='1px' boxSize={23} color="#c8d3e6"></ChevronRightIcon>
        <Text
          as={motion.div}
          whileHover="hover"
          initial="initialState"
          animate="getBack"
          variants={textVariants}>
          Build with us
        </Text>  
      </ListItem>
      <ListItem
        // padding="8px"
        paddingTop="8px"
        paddingBottom="8px"
        textAlign="left"
        display='flex'
        flexDirection='row'
      > 
      <ChevronRightIcon marginTop='1px' boxSize={23} color="#c8d3e6"></ChevronRightIcon>
        <Text
          as={motion.div}
          whileHover="hover"
          initial="initialState"
          animate="getBack"
          variants={textVariants}>
          Join the community
        </Text>  
      </ListItem>
    </UnorderedList>
    <Box justifyContent="center" marginTop="3vw">
      <Heading
        as={motion.div}
        variants={border1Variants}
        animate="visible"
        initial="initialState"
        whileHover="hover"      
        fontSize="18px"
        padding="12px"
        marginLeft="30px"
        marginRight="30px"
        color="white"
        backgroundImage="linear-gradient(#15c5bb,#13c4ba)"
        borderRadius="8px"
        border={hoveredCard1 ? "1px solid white" : ""}
      >
        START ENGAGING
      </Heading>
    </Box>
  </Box>
  </>
  );
}

export default Card1;
