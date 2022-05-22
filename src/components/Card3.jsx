import React, { useState } from "react";
import { motion, isValidMotionProp } from "framer-motion";
import {
  Text,
  Heading,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'

const box3Variants = {
  initialState: {
    backgroundImage: "linear-gradient(#ffffff,#ffffff)",
    borderRadius:"10px",
    border: "3px solid #455473",
    // borderImage: "linear-gradient(to left top, #11c2b8, #2ad5cb) 1",
    // borderImageSlice: "1"
  },
  visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        backgroundImage: "linear-gradient(#ffffff,#ffffff)"
        // opacity:1
      }
    },
    hover: {
      scale: 1.05,
      cursor:'pointer',
      backgroundImage: "linear-gradient(#455473,#152139)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      },
      exit: {}
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

  const border3Variants={
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
      border:'2px solid #646e81',
      transition:{
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  }
  



const Card3 = () => {
const [hoveredCard3, setHoveredCard3] = useState(false);

  return (
      <>
        <Box
    as={motion.div}
    variants={box3Variants}
    width="330px"
    height="auto"
    position="relative"
    whileHover="hover"
    border="2px solid green"
    padding="30px"
    paddingTop="50px"
    paddingBottom="40px"
    borderRadius="3%"
    backgroundImage="linearGradient"
    borderColor="#2bd5cb"
    animate="visible"
    initial="initialState"
    onMouseEnter={() => setHoveredCard3(true)}
    onMouseLeave={() => setHoveredCard3(false)}
  >
    <Heading fontSize="15px" color={hoveredCard3 ? "#ffffff" : "#7b869c"}>
      ENTERPRISE
    </Heading>
    <Heading
      fontSize="28px"
      color={hoveredCard3 ? "#ffffff" : "#000000"}
    >
      Solutions
    </Heading>
    <Text marginTop="40px" color={hoveredCard3 ? "#ffffff" : "#7b869c"}>
      Discover new applications and business models 
    </Text>
    <UnorderedList
      marginLeft="-4px"
      color={hoveredCard3 ? "#ffffff" : "#000000"}
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
            IOTA technologies
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
              Explore industries
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
              View our services
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
            Partner with us
          </Text>  
        </ListItem>
    </UnorderedList>
    <Box justifyContent="center" marginTop="3vw">
      <Heading
        as={motion.div}
        fontSize="18px"
        padding="12px"
        marginLeft="30px"
        marginRight="30px"            
        color="white"
        backgroundImage="linear-gradient(#1e2a43,#1a263f)"
        variants={border3Variants}
        animate="visible"
        initial="initialState"
        whileHover="hover"
        borderRadius="8px"
        border={hoveredCard3 ? "1px solid white" : ""}
      >
        START INNOVATING
      </Heading>
    </Box>
  </Box>
      </>
  );
}

export default Card3;