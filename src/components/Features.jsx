import { Box, Container, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import socialVideo from "../assets/videos/social.mp4";
import mobilityVideo from "../assets/videos/mobility.mp4";
import smartcityVideo from "../assets/videos/smartcity.mp4";
import globalTradeVideo from "../assets/videos/globaltrade.mp4";
import digitalVideo from "../assets/videos/digital.mp4";
import "../../node_modules/react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "../featuresStyles.css";
import { featuresData } from "../data/featuresData";

const Features = () => {
  const videosList = [
    socialVideo,
    mobilityVideo,
    smartcityVideo,
    globalTradeVideo,
    digitalVideo,
  ];

  const featuresDataCategory = [
    "socialVideo",
    "mobilityVideo",
    "smartcityVideo",
    "globalTradeVideo",
    "digitalVideo",
  ];
  const carouselRef = useRef();

  const [videoCount, setVideoCount] = useState(0);
  const [videoSrc, setVideoSrc] = useState(videosList[0]);
  const [curSlideState, setCurSlideState] = useState(0);
  const [filterFeaturesData, setFilterFeaturesData] = useState([]);

  const [carouselItem, setCarouselItem] = useState([
    "active",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
  ]);
  const maxCount = 4;

  useEffect(() => {
    setFilterFeaturesData(
      featuresData.filter(
        (data) => data.category === featuresDataCategory[videoCount]
      )
    );
  }, [videoCount]);

  //Video end event handler
  const handleVideoEnd = (event) => {
    console.log("video end handle event");

    console.log(videoCount + 1);
    if (videoCount === maxCount) {
      setVideoSrc(videosList[0]);
      setVideoCount(0);
      handleCarouselActiveItem(0);
      carouselRef.current.goToSlide(0);
      setCurSlideState(0);
      handleCarouselActiveItem(0);
    } else {
      console.log("video end handle else");
      setVideoSrc(videosList[videoCount + 1]);
      setVideoCount((videoCount) => videoCount + 1);
      console.log("video count:", videoCount);
      carouselRef.current.goToSlide(videoCount + 1);
      setCurSlideState(videoCount);
      handleCarouselActiveItem(videoCount + 1);
      console.log("current slide:", carouselRef);
    }
  };

  //Carousel active item event handler
  const handleCarouselActiveItem = (sliderIndex) => {
    console.log("handle carousel active item", sliderIndex);
    let newArr = [...carouselItem];
    carouselItem.forEach((element, index) => {
      if (index === sliderIndex) newArr[index] = "active";
      else newArr[index] = "inactive";
    });
    setCarouselItem(newArr);
  };

  //Right arrow button click handler
  const rightButtonClick = (curSlide, rest) => {
    console.log("right button clicked", videoCount, curSlide);
    if (curSlide === maxCount) {
      rest.carouselState.currentSlide = 0;
      setVideoSrc(videosList[0]);
      setVideoCount(0);
      handleCarouselActiveItem(0);
      setCurSlideState(0);
    } else {
      rest.carouselState.currentSlide = curSlide + 1;
      setVideoSrc(videosList[curSlide + 1]);
      setVideoCount(curSlide + 1);
      handleCarouselActiveItem(curSlide + 1);
      setCurSlideState(curSlide + 1);
    }
  };

  //Left arrow button click handler
  const leftButtonClick = (curSlide, rest) => {
    console.log("left button clicked", videoCount, curSlide);
    if (curSlide === 0) {
      rest.carouselState.currentSlide = maxCount;
      setVideoSrc(videosList[maxCount]);
      setVideoCount(maxCount);
      handleCarouselActiveItem(maxCount);
      setCurSlideState(maxCount);
    } else {
      rest.carouselState.currentSlide = curSlide - 1;
      setVideoSrc(videosList[curSlide - 1]);
      setVideoCount(curSlide - 1);
      handleCarouselActiveItem(curSlide - 1);
      setCurSlideState(curSlide - 1);
    }
  };

  //custom button group for arrow buttons
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    rest.carouselState.currentSlide = curSlideState;
    // console.log("rest", rest);
    //console.log("rest", rest.carouselState.currentSlide);
    return (
      <div className="">
        <button
          type="button"
          className="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
          onClick={() => leftButtonClick(currentSlide, rest)}
        />
        <button
          type="button"
          className="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
          onClick={() => rightButtonClick(currentSlide, rest)}
        />
      </div>
    );
  };

  //custom styles for carousel
  const carouselStyles = {
    borderTop: "2px solid #000",
    display: "flex",
    listStyle: "none",
    padding: 0,
    justifyContent: "space-between",
    alignItems: "stretch",
    alignContent: "stretch",
  };

  //carousel item click handler
  const handleItemClick = (event) => {
    console.log("handle item click", event.target.id);
    const slideId = parseInt(event.target.id);
    /* if (slideId === maxCount) {
      setVideoCount(maxCount);
    } else if (slideId === 0) {
      setVideoCount(-1);
    } else {
      setVideoCount(slideId - 1);
    }
    handleVideoEnd(); */
    console.log("handle click", slideId);
    setVideoSrc(videosList[slideId]);
    setVideoCount(slideId);
    carouselRef.current.goToSlide(slideId);
    setCurSlideState(slideId);
    handleCarouselActiveItem(slideId);
  };

  //carousel respoinsive device type handler
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="features-container">
        <div className="video-text">
          <Heading
            as="h4"
            size="md"
            textAlign="center"
            mx="auto"
            textTransform="uppercase"
            pb="8"
            fontSize="1rem"
            pt="5rem"
            fontFamily="Metropolis Bold"
            lineHeight="1.5"
            color="rgb(15, 193, 183)"
            fontWeight="bold"
          >
            Industries
          </Heading>
          <Heading
            as="h2"
            fontSize="2rem"
            textAlign="center"
            color="rgb(246, 248, 252)"
            mx="auto"
            w="25%"
            mb="14%"
          >
            IOTA Enables Now Possibilities
          </Heading>
          <Carousel
            ref={carouselRef}
            partialVisible={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            customButtonGroup={<ButtonGroup />}
            ssr={false} // means to render carousel on server-side.
            infinite={false}
            /* autoPlay={responsive !== "mobile" ? true : false} */
            /*autoPlaySpeed={3000}*/
            /* autoPlayInterval={10000} */
            keyBoardControl={true}
            /*  transitionDuration={500}*/
            containerClass="carousel-container"
            deviceType={responsive}
            customStyles={carouselStyles}
            dotListClass="custom-dot-list-style"
            arrows={false}
            renderArrowsWhenDisabled={false}
            centerMode={true}
          >
            <div
              id="0"
              className={`link ${carouselItem[0]}`}
              onClick={(e) => handleItemClick(e)}
            >
              {carouselItem[0] === "active" ? (
                <>
                  <div className="item-label active-item-label">
                    Social Impact
                  </div>
                  <span>Visit Page</span>
                </>
              ) : (
                <div className="item-label">Social Impact</div>
              )}
            </div>
            <div
              id="1"
              className={`link ${carouselItem[1]}`}
              onClick={(e) => handleItemClick(e)}
            >
              {carouselItem[1] === "active" ? (
                <>
                  {" "}
                  <div className="item-label active-item-label">Mobility</div>
                  <span>Visit Page</span>
                </>
              ) : (
                <div className="item-label">Mobility</div>
              )}
            </div>
            <div
              id="2"
              className={`link ${carouselItem[2]}`}
              onClick={(e) => handleItemClick(e)}
            >
              {carouselItem[2] === "active" ? (
                <>
                  <div className="item-label active-item-label">
                    Smart Cities
                  </div>
                  <span>Visit Page</span>
                </>
              ) : (
                <div className="item-label">Smart Cities</div>
              )}
            </div>
            <div
              id="3"
              className={`link ${carouselItem[3]}`}
              onClick={(e) => handleItemClick(e)}
            >
              {carouselItem[3] === "active" ? (
                <>
                  {" "}
                  <div className="item-label active-item-label">
                    Global Trade
                  </div>
                  <span>Visit Page</span>
                </>
              ) : (
                <div className="item-label">Global Trade</div>
              )}
            </div>
            <div
              id="4"
              className={`link ${carouselItem[maxCount]}`}
              onClick={(e) => handleItemClick(e)}
            >
              {carouselItem[maxCount] === "active" ? (
                <>
                  {" "}
                  <div className="item-label active-item-label">
                    Digital Identity
                  </div>
                  <span>Visit Page</span>
                </>
              ) : (
                <div className="item-label">Digital Identity</div>
              )}
            </div>
          </Carousel>

          {/*  */}
          <Container maxW="container.lg" mb="8%">
            <Grid
              templateColumns={{
                sm: "repeat(3, 1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(3,1fr)",
              }}
              gap={6}
            >
              {filterFeaturesData.map((data) => {
                return (
                  <>
                    <Box alignItems="center">
                      <Image src={data.image} alt="Image One" margin="auto" />
                      <Text className="feature-title">{data.title}</Text>
                      <Text className="feature-desc">{data.description}</Text>
                    </Box>
                  </>
                );
              })}
            </Grid>
          </Container>
        </div>

        <Box
          as="video"
          id="videoFeature"
          controls
          autoPlay
          playsInline
          loop={false}
          src={videoSrc}
          alt="IOTA"
          data-autoplay=""
          muted
          pointerEvents="none"
          h="100%"
          w="100%"
          onEnded={(e) => handleVideoEnd(e)}
          sx={{
            aspectRatio: "16/9",
          }}
        />
      </div>
    </>
  );
};

export default Features;
