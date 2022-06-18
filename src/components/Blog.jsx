import React, { useState } from "react";
import { blogData } from "../data/blogData";
import {
  Text,
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  transition,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const CardWrapper = ({ children, setHoveredCard, bgImage }) => {
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
      _hover={{
        cursor: "pointer"
      }}
      onMouseEnter={() => setHoveredCard(true)}
      onMouseLeave={() => setHoveredCard(false)}
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
      <Heading>IOTA Foundation</Heading>
      <Text fontSize="1rem" maxW={"75%"}>
        Learn about the deep expertise that drives the IOTA foundation
      </Text>
      <CardLink linkText="View all departments" color="black" firstCardLink={true}/>
    
      </Box>
    </CardWrapper>
  );
};
const BlogCard = ({ blog }) => {
  const [hoveredCard, setHoveredCard] = useState(false);
  return (
    <CardWrapper setHoveredCard={setHoveredCard} bgImage={blog.image}>
       <Box
        position="absolute"
        left="0"
        top={"0"}
        w="100%"
        h="100%"
        transform={hoveredCard ? "scale(2)" : "scale(0)"}
        transition="all 700ms"
        borderRadius="50rem"
        bg="#00e0ca"
        opacity="0.2"
      ></Box>
      <Box
        position="absolute"
        left="50%"
        top={"50%"}
        transform={
          hoveredCard ? "translate(-50%,-25%)" : "translate(-50%,-50%)"
        }
        transition="transform 100ms"
        textAlign="center"
        width="100%"
        color="white"
      >
        <Heading fontSize={"1.9rem"}>{blog.title}</Heading>
        <Text
          fontSize={"1rem"}
          opacity={hoveredCard ? "1" : "0"}
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
    boxSize="6"
    transform={hoveredLink && "translateX(7px)"}
    transition="transform 200ms"
  />
</Box>)
}
const Blog = () => {
  return (
    <Box my="2rem" w="100%" bg="#F6F9FD" py="5rem">
      <Box mx={"auto"} maxWidth={1000} className="blog-container">
        <Grid
          templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(1, 320px)","repeat(2, 320px)","repeat(3, 320px)"]}
          templateRows={["repeat(1, 260px)","repeat(6, 260px)","repeat(6, 320px)","repeat(3, 320px)","repeat(2, 320px)"]}
          gap={[0,0,6,6]}
          justifyContent="center"
          margin="0 3%"
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
