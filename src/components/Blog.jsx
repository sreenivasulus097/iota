import React, { useState } from "react";
import { blogData } from "../data/blogData";

import {
  Text,
  Heading,
  Box,
  Grid,
  GridItem,

  transition,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const CardWrapper = ({ children, bgImage }) => {
  return (
    <Box
      h={"100%"}
      w={"100%"}
      borderRadius={[0,0,8]}
      px={"1.5rem"}
      pt={"2rem"}
      pb={"2rem"}
      position="relative"
      overflow="hidden"
      bg="white"
      bgImage={bgImage}
      bgRepeat="no-repeat"
      bgSize="cover"
      _hover={{
        cursor: "pointer",
        "& .card-content":{ transform: "translate(-50%,-50%)"},
        "& .hidden-text":{
          opacity: "1",
        },
        "& .backdrop":
        {transform:"scale(2)"}
      }}
    >
      {children}
    </Box>
  );
};
const FirstCard = () => {
  return (
    <CardWrapper>
      <Box h="100%" w="100%" display="flex" justifyContent="space-between" alignItems="flex-start"
        flexDirection="column"
        textAlign="left">
        
      <Heading fontSize="1rem" color="#00e0ca">EXPLORE</Heading>
      <Heading color="black">IOTA Foundation</Heading>
      <Text fontSize="1rem" maxW={"75%"} color="rgb(72,87,118)">
        Learn about the deep expertise that drives the IOTA foundation
      </Text>
      <CardLink linkText="View all departments" color="black" firstCardLink={true}/>
    
      </Box>
    </CardWrapper>
  );
};
const BlogCard = ({ blog }) => {
  return (
    <CardWrapper  bgImage={blog.image}>
       <Box
       className="backdrop"
       display={["none","none","block"]}
        position="absolute"
        left="0"
        top={"0"}
        w="100%"
        h="100%"
        transform=  "scale(0)"
        transition="all 650ms"
        borderRadius="50rem"
        bg="linear-gradient(315deg,#00e0ca 8.22%,#0fc1b7)"
        opacity="0.5"
        
      ></Box>
      <Box
      className="card-content"
        position="absolute"
        left="50%"
        top={"50%"}
        transform={["translate(-50%,-50%)","translate(-50%,-50%)","translate(-50%,-25%)",]}
        transition="transform 100ms"
        textAlign="center"
        width="100%"
        color="white"
       
      >
        <Heading fontSize={"1.9rem"}>{blog.title}</Heading>
        <Text
        className="hidden-text"
        display={["none","none","block"]}

          fontSize={"1rem"}
          opacity="0"
          transition="opacity 200ms"
          mt="1.5rem"
          color="white"
        
        >
          {blog.description}
        </Text>
      </Box>
     <CardLink linkHref="#" linkText="Learn more"/>
     
    </CardWrapper>
  );
};
const CardLink=({linkText,linkHref,color,firstCardLink})=>{
  const [hoveredLink, setHoveredLink] = useState(false);

 return(  <Box
  position={firstCardLink?"static":"absolute"}
  left="0"
  bottom="1rem"
  display="flex"
  justifyContent={firstCardLink?"left":"center"}
  alignItems="center"
  w="100%"
  onMouseEnter={() => setHoveredLink(true)}
  onMouseLeave={() => setHoveredLink(false)}
>
  <Text 
  color={color ?color :"white"}
  fontWeight="600" fontSize={"0.9rem"}>
    {linkText}
  </Text>
  <ChevronRightIcon
    color="#00E0CA"
    boxSize="5"
    transform={hoveredLink && "translateX(7px)"}
    transition="transform 200ms"
  />
</Box>)
}
const Blog = () => {
  return (
    <Box my="4rem 2rem" w="100%" bg="#F6F9FD" py="5rem" >
      <Box mx={"auto"} maxWidth={1000} className="blog-container">
        <Grid
          templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 320px)","repeat(2, 320px)","repeat(3, 320px)"]}
          templateRows={["repeat(1, 220px)","repeat(6, 220px)","repeat(3, 320px)","repeat(3, 320px)","repeat(2, 320px)"]}
          gap={[0,0,6,6]}
          justifyContent="center"
>
          <GridItem>
            <FirstCard />
          </GridItem>
          {blogData.map((blog, i) => {
            return (
              <GridItem>
                <BlogCard blog={blog} />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Blog;
