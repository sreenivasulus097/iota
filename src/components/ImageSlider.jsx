import React,{useState,useEffect} from 'react';
import { SliderData } from './SliderData';
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
  HStack,
  Divider,
  effect
} from "@chakra-ui/react";
import { ChevronRightIcon,ChevronLeftIcon } from '@chakra-ui/icons'
import { motion, AnimatePresence, usePresence } from "framer-motion";
import Letters from './Letters';

const videoVariants = {
  initialState: {
    x:70,
    opacity:0
  },
  visible: {
    x:0,
    opacity:1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  hidden:{
    x:-70,
    opacity:0,
    transition:{
      duration:1.5,
      ease:"easeOut"
    }
  }
};

const ImageSlider = () => {
  let myTimeout,myBufferTimeout;
  const [current,setCurrent]=useState(0);
  const [buffer,setBuffer]=useState(0);
  const [haltSuccess,setHaltSuccess]=useState(false);
  let handleNextBtn=(e)=>{
    e.preventDefault();
    setHaltSuccess(true);
    try{
    clearTimeout(myTimeout);
    console.log('timeout halted for ',current)
    }catch(e){
      console.log(e)
    }
    setBuffer(buffer+1)
    myBufferTimeout=setTimeout(()=>{
      if(current!==2) setCurrent(current+1);
      else setCurrent(0);
      setHaltSuccess(false);
    },1000)
    console.log(current,' set now')
  }
  let switchSlide=()=>{
    clearTimeout(myTimeout);
    if(!haltSuccess){
        setBuffer(buffer+1)
        myBufferTimeout=setTimeout(async()=>{
        if(current!==2) setCurrent(current+1);
        else setCurrent(0);  
      },1000)
    } 
    else if(haltSuccess&&current==0) {
      setBuffer(buffer+1)
      myBufferTimeout=setTimeout(async()=>{
      if(current!==2) setCurrent(current+1);
      else setCurrent(0);  
    },1000)
    }
  }
  let handlePrevBtn=(e)=>{
    e.preventDefault();
    setHaltSuccess(true);
    try{
    clearTimeout(myTimeout);
    console.log('timeout halted for ',current)
    }catch(e){
      console.log(e)
    }
    setBuffer(buffer+1)
    myBufferTimeout=setTimeout(()=>{
      if(current!==0) setCurrent(current-1);
      else setCurrent(2);
      setHaltSuccess(false);
    },1000)
    console.log(current,' set now')
  }

  useEffect(() => {
      console.log('current slide',current)
      myTimeout=setTimeout(
        () =>{
          switchSlide()
          console.log('timeout over for ',current)
        },7000);
  }, [current])

  return (
    <>
      <div style={{display:"flex",position:"absolute",borderTop:"1px solid #506270",marginTop:"64vh",width:"100%",zIndex:"1"}}>
        <ChevronLeftIcon style={{border:"1px solid #506270",borderRadius:"100%",marginLeft:"17%",marginTop:"-3vh",fontSize:"45px", color:"white",padding:"10px",backgroundColor:"#1d2339"}} onClick={handlePrevBtn} ></ChevronLeftIcon>
        <Box style={{display:"flex",flexDirection:"row",width:"40%",marginLeft:"10%",height:"20vh"}}>
        {SliderData.map((slide,vidIndex)=>{
          return (current==vidIndex?
              <>
              <Letters content={slide.textDataFirst} index={vidIndex}></Letters>
              <Text style={{visibility:"hidden"}}>\s\s</Text>
              <Letters content={slide.textDataSecond} index={vidIndex}></Letters>
              </>:null
            )
          })}
        </Box>
        <ChevronRightIcon style={{border:"1px solid #506270",borderRadius:"100%",marginLeft:"5%",marginTop:"-3vh",fontSize:"45px", color:"white",padding:"10px",backgroundColor:"#1d2339"}} onClick={handleNextBtn}></ChevronRightIcon>
      </div>
      {SliderData.map((slide,vidIndex)=>{
          return (current==vidIndex?
            <AnimatePresence exitBeforeEnter>
                <motion.div
                  key={buffer}
                  variants={videoVariants}
                  initial="initialState" 
                  animate="visible"
                  exit="hidden"
              >
                <video
                  src={slide.video} 
                  alt="slide video" 
                  autoPlay="autoplay" 
                  muted
                  style={{zIndex:"1"}}
                  position="absolute"
                  width="100%"
                  height='auto'
                  border-radius="10px"
                  key={current}
                />
              </motion.div>
            </AnimatePresence>:null
          )
      })}
    </>
  );
}

export default ImageSlider;