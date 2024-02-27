import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {makeStyles} from "@material-ui/core/styles";
import CustomButton from "../StyledButton";
import SwiperCore, {Pagination, Autoplay, EffectFade} from "swiper";
import Typography from "@material-ui/core/Typography";
import 'swiper/swiper.min.css';
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

const useStyles = makeStyles((theme) => ({
    slider: {
        width: '100%',
        height: '100vh',
        position: 'relative',
    },
    slide: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0 0 12px 12px',
        [theme.breakpoints.down('sm')]: {
            borderRadius: 0,
        }
    },
    slideContent: {
        //position: 'absolute',
        //top: '60%',
        //left: '50%',
        //transform: 'translate(-50%, -50%)',
        //textAlign: 'center',
        width: '50%',
        marginLeft: '20px',
        color: '#fff',
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            // top: '50%',
            width: 'calc(100% - 40px)',
        }
    },
    buttonContainer: {
        width: '60%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    pagination: {
        padding: '0 20px 0 20px',
        position: "absolute",
        bottom: 30,
        left: "50%",
        display: "flex",
        gap: '20px',
        width: '100%',
        transform: "translateX(-50%)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        clickable: false,
    },
    paginationItem: {
        width: '100%',
        height: 5,
        background: "#fff",
        //margin: "0 10px",
        opacity: 0.5,
        clickable: false,
        transition: "opacity 0.3s ease",
        [theme.breakpoints.down('sm')]: {
            // width: 50,
            // height: 3,
        }
    },
    paginationItemActive: {
        opacity: 1,
    },
    title: {
        fontSize: '56px',
        marginBottom: '20px',
        fontWeight: 700,
        textAlign: 'left',
        color: ({inputBorderColor}) => inputBorderColor,
        textTransform: 'uppercase',

        fontFamily: 'Inter-Bold',
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px',
        }
    },
    description: {
        fontFamily: 'Inter-Bold',
        textTransform: 'uppercase',
        fontSize: '24px',
        fontWeight: 500,
        color: ({inputBorderColor}) => inputBorderColor,
        textAlign: 'left',
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            fontSize: '20px',
        }
    }
}));

const Carousel = ({slides}) => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        const {activeIndex} = swiper;
        setActiveSlide(activeIndex);
        swiper.slideTo(activeIndex);
    };

    return (
        <Swiper
            className={classes.slider}
            spaceBetween={0}
            slidesPerView={1}
            navigation={false}
            autoplay={{delay: 7000}}
            pagination={{clickable: false}}
            onSlideChange={handleSlideChange}
        >
            {slides.map((slide, index) => (
                <SwiperSlide
                    key={index}
                    className={classes.slide}
                    style={{backgroundImage: `url(${slide.image})`}}
                >
                    <div className={classes.slideContent}>
                        <Typography className={classes.title}>{slide.title}</Typography>
                        {slide.description ? (
                            <>
                                <Typography className={classes.description}>{slide.description}</Typography>
                            </>
                        ) : null}
                        <div className={classes.buttonContainer}>
                                <CustomButton width="100%" text={slide.buttonText} variant="white" to={slide.link}/>
                        </div>
                        {/*{index === 0 && (*/}
                        {/*    <CustomButton width="100%" text="Зателефонувати"/>*/}
                        {/*)}*/}
                    </div>
                </SwiperSlide>
            ))}
            <div className={classes.pagination}>
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`${classes.paginationItem} ${
                            i === activeSlide ? classes.paginationItemActive : ""
                        }`}
                    />
                ))}
            </div>
        </Swiper>
    );
};

export default Carousel;