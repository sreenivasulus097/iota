import React, { useState } from "react";
import { chakra,ChevronRightIcon } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import {
  Text,
  Heading,
  Stack,
  Box,
  Feature,
  UnorderedList,
  ListItem,
  ScaleFade,
  VStack,
  HStack
} from "@chakra-ui/react";
import Media from "react-media";

const Pricing = () => {

  const desktopOrientation=<Stack
  position="relative"
  spacing="20px"
  width="1040px"
  direction="row"
  justifyContent="center"
  marginLeft="auto"
  marginRight="auto"
  marginTop="75px"
>
  <Card1></Card1>
  <Card2></Card2>
  <Card3></Card3>
</Stack>;

const tabletOrientation=<Stack
  position="relative"
  spacing="20px"
  width="auto"
  direction="column"
  alignItems="center"
  marginTop="75px"
>
<HStack
  spacing="20px"
  width="684px"
>
<Card1></Card1>
<Card2></Card2>
</HStack>
<HStack
  spacing="20px"
  width="684px"
>
  <Card3></Card3>
  <Box
    as={motion.div}
    width="330px"
    height="auto"
    position="relative"
    border="2px solid white"
    padding="30px"
    paddingTop="50px"
    paddingBottom="40px"
  >
  </Box>
</HStack>
</Stack>


const mobileOrientation=<Stack
position="relative"
spacing="20px"
width="auto"
direction="column"
alignItems="center"
marginTop="75px"
>
<HStack
spacing="20px"
width="330px"
>
  <Card1></Card1>
</HStack>
<HStack
spacing="20px"
width="330px"
>
  <Card2></Card2>
</HStack>
<HStack
spacing="20px"
width="330px"
>
  <Card3></Card3>
</HStack>
</Stack>



  return (
    <>
      <Heading fontSize="35px">Get Started</Heading>
      <Media query="(min-width:1080px)">
        {(matches) => {
          return matches ? desktopOrientation : <Media query="(min-width:760px)">
              {(matches) => {
                return matches?tabletOrientation:mobileOrientation
              }}
            </Media>
        }}
      </Media>
    </>
  );
};

export default Pricing;
