import { Box, Button, Text } from "@chakra-ui/react";
import { AppColors } from "../../../utils/AppColors";
import { fontFamily } from "../../../utils/Font";
import ReviewCard from "../../../components/ReviewCard";
import { reviewData } from "../../../data/reviewData";
import { reviewInterface } from "../../../utils/AppReusableInterfaces";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 625 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 625, min: 0 },
        items: 1,
    },
};
const OurReviewComp = () => {
    const navigate = useNavigate();
    const carouselRef = useRef<any>(null);

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
        }
    };
    return (
        <Box mt="50px" w="100%" px={{ base: "15px", sm: "20px" }}>
            <Text
                color={AppColors.primary}
                textAlign="center"
                fontWeight="bold"
                fontFamily={fontFamily}
            >
                Review Section
            </Text>
            <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={{ base: "20px", md: "25px" }}
                mt="10px"
                fontFamily={fontFamily}
            >
                Customer Valuable Reviews
            </Text>

            {/* review card  */}
            <Box
                mt="40px"
                w="100%"
                display="flex"
                justifyContent="center"
                alignItems={"center"}
            >
                <Box cursor="pointer" onClick={handleNextClick} mr={"8px"}>
                    <FaChevronLeft size="16px" />
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems={"center"}
                    w={{ base: "80%", md: "85%" }}
                >
                    <Box w="99%">
                        <Carousel
                            ref={carouselRef}
                            swipeable={true}
                            draggable={true}
                            autoPlay
                            autoPlaySpeed={2000}
                            showDots={false}
                            centerMode={false}
                            customTransition="transform 1000ms ease-in-out"
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            keyBoardControl={true}
                            transitionDuration={1000}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={[
                                "tablet",
                                "mobile",
                                "desktop",
                            ]}
                            dotListClass="custom-dot-list-style"
                            // itemClass="carousel-item-padding-40-px"
                        >
                            {reviewData.map(
                                (item: reviewInterface, index: number) => (
                                    <Box
                                        w="100%"
                                        key={index}
                                        display="flex"
                                        justifyContent="center"
                                        alignItems={"center"}
                                    >
                                        <ReviewCard reviewDetails={item} />
                                    </Box>
                                )
                            )}
                        </Carousel>
                    </Box>
                </Box>
                <Box cursor="pointer" onClick={handlePrevClick} ml={"8px"}>
                    <FaChevronRight size="16px" />
                </Box>
            </Box>

            {/* browse all button */}
            <Box textAlign="center" mt="25px">
                <Button
                    bg={AppColors.black}
                    color={AppColors.white}
                    _hover={{ bg: AppColors.primary, color: AppColors.white }}
                    onClick={() => navigate("/allreview")}
                >
                    See All Reviews
                </Button>
            </Box>
        </Box>
    );
};

export default OurReviewComp;
