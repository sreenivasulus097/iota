import { effect } from '@chakra-ui/react';
import React,{useState,useEffect} from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

const Hero = () => {

  return (<div style={{backgroundImage:'linear-gradient(to bottom, #242b44, #1e253d, #181d32, #14192d, #0c1122)'}}>
              <ImageSlider slides={SliderData}></ImageSlider>
          </div>
        );
      }

export default Hero;
