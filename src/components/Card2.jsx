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


const box2Variants = {
  initialState: {
    backgroundImage: "linear-gradient(#ffffff,#ffffff)",
    borderRadius:"10px",
    border: "3px solid #abb8cf",
    // borderImage: "linear-gradient(to left top, #11c2b8, #2ad5cb) 1",
    // borderImageSlice: "1"
  },visible: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        backgroundImage: "linear-gradient(#ffffff,#ffffff)"
        // opacity:1
      }
    },
    hover: {
      scale: 1.05,
      color: "white",
      cursor:'pointer',
      // backgroundImage: "linear-gradient(#2ad5cb,#11c2b8)",
      backgroundImage: "linear-gradient(#c2cfe3,#8695af)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

const border2Variants={
  initialState: {
    border: "",
  },
  visible: {
    border:"2px solid #ffffff",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    }
  },
hover:{
    border:'2px solid #bac3d3',
    transition:{
      duration: 0.3,
      ease: "easeInOut",
    }
  }
}

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

const Card2 = () => {
    const [hoveredCard2, setHoveredCard2] = useState(false);

  return (
    <>
    <Box
    as={motion.div}
    variants={box2Variants}
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
    onMouseEnter={() => setHoveredCard2(true)}
    onMouseLeave={() => setHoveredCard2(false)}
    >
    <Heading fontSize="15px" backgroundImage={hoveredCard2 ? "#c1cee2" : "#7b869c"}>
      DEVELOPER
    </Heading>
    <Heading
      fontSize="28px"
      color={hoveredCard2 ? "#ffffff" : "#000000"}
    >
      Develop
    </Heading>
    <Text marginTop="40px" color={hoveredCard2 ? "#ffffff" : "#7b869c"}>
      Start building innovative solutions with IOTA 
    </Text>
    <UnorderedList
      // listStyleType="none"
      marginLeft="-4px"
      color={hoveredCard2 ? "#ffffff" : "#000000"}
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
          Read our documentation
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
          Explore the roadmap
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
          Explore the code libraries
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
          Learn with tutorials
        </Text>
      </ListItem>
    </UnorderedList>
    <Box justifyContent="center" marginTop="3vw">
      <Heading
        as={motion.div}
        fontSize="18px"
        variants={border2Variants}
        animate="visible"
        initial="initialState"
        whileHover="hover"
        padding="12px"
        marginLeft="30px"
        marginRight="30px"
        // backgroundColor="#c3d0e4"
        backgroundImage="linear-gradient(#919fb8,#8b9ab3)"
        borderRadius="8px"
      >
        START DEVELOPING
      </Heading>
    </Box>
  </Box>
    </>
  );
}

export default Card2;
