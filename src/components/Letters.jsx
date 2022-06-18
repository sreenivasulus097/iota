import React,{useState,useEffect,useRef} from 'react';
import { motion, AnimatePresence, usePresence } from "framer-motion";
import {
  Text,} from "@chakra-ui/react";


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const letterVariants = {
  initialState: {
    // x:70,
    scale: 1.2,
    opacity:0.1
  },
  visible: {
    scale: 1.0,
    opacity:1,
    transition: {
      duration: randomIntFromInterval(1, 3),
      ease: "easeIn",
    },
  },
};


const Letters = ({content,index}) => {
  return (
    <>
        {content.split("").map((i)=>{
          // console.log(i)
          let spacing="";
          console.log(index)
          if(index==0) spacing="10vw"
          else if(index==1) spacing="15vw"
          else if(index==2) spacing="200vw"
          return (
            <Text
              as={motion.div} key={index} variants={letterVariants} initial="initialState" animate="visible" style={{padding:'0.22vw',color:"white",fontSize:"8vh",marginTop:"-12vh"}}>
              {i}
             </Text>
              )
        })}
    </>
  );
}

export default Letters;
