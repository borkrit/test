import React, {useEffect, useState} from 'react';
import {
    Grid,
    Typography,
    Backdrop,
    CircularProgress, Box,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import H4 from "../../../UI/H4";
import SectionWrapper from "../../../UI/SectionWrapper";
import {useTheme} from "../../../../theme/themeContext";
import {themes} from "../../../../theme/themeContext/themes";
import BreadCrumbs from "../../../UI/BreadCrumbs";
import ContactForm from "../../../UI/ContactForm";
import DonatBadgeComponent from "../../../UI/DonatBadge";
import axios from "axios";
import useStyles from "../styles";
import StyledButton from "../../../UI/StyledButton";
import {Skeleton} from "@material-ui/lab";


const ActualsPageComponent = () => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const postsPerPage = 9;

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData(1);  // Загружаем данные для первой страницы при монтировании компонента
    }, []);

    const fetchData = async (pageNumber) => {
        setLoading(true);
        try {
            const postsResponse = await axios.get(
                `https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=${pageNumber}&_embed`
            );

            const newCategoriesData = postsResponse.data.map((post) => {
                const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';

                return {
                    postTitle: post.title.rendered,
                    lastPostImage: imageUrl,
                    postDescription: post.excerpt.rendered,
                    postDate: post.date,
                    slug: post.slug,
                    categories: post.categories,
                    tags: post.tags,
                };
            });

            // Обновляем категории, добавляя новые к уже существующим
            setCategoriesData((prevData) => [...prevData, ...newCategoriesData]);
        } catch (error) {
            console.error('Error fetching posts data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleLoadMore = () => {
        const nextPage = Math.ceil(categoriesData.length / postsPerPage) + 1;
        fetchData(nextPage);
    };


    return (
        <SectionWrapper id="actual" paddingBottom="100px" paddingTop="120px">
            <BreadCrumbs/>
            <Typography variant="h1" className={classes.title}>
                Artykuły
            </Typography>
            <Grid container spacing={3} className={classes.cardWrapper}>
                {categoriesData.map((post, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Link
                            to={
                                post.categories?.some(category => category === 730842049) ||
                                post.tags?.some(tag => tag === 730842067)
                                    ? `/wycieczki/${post.slug}`
                                    : `/artykuly/${post.slug}`
                            }
                            onClick={() => console.log("Link Clicked:", post)}
                            className={classes.linkWrapper}
                        >
                            <Box className={classes.root}>
                                    <div className={classes.imageContainer}>
                                        <img
                                            src={post.lastPostImage}
                                            alt={post.postTitle}
                                            className={classes.image}
                                            loading="lazy"
                                        />
                                    </div>
                                <Box className={classes.textContainer}>
                                    <Box>
                                        <Box>
                                            <H4 className={classes.h4}>
                                                {post.postTitle ? post.postTitle : <Skeleton variant="text" />}
                                            </H4>
                                        </Box>
                                        <Box className={classes.description}>
                                            <Typography variant="body2" className={classes.postDescription}>
                                                {post.postDescription ? (
                                                    <div dangerouslySetInnerHTML={{__html: post.postDescription}} />
                                                ) : (
                                                    <Skeleton variant="text" />
                                                )}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" className={classes.date}>
                                            {post.postDate
                                                ? new Date(post.postDate).toLocaleDateString('pl-PL', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                })
                                                : <Skeleton variant="text" />}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
            <Box className={classes.buttonWrapper}>
                <StyledButton text="Załaduj więcej" clicked={handleLoadMore} width="100%"/>
            </Box>
            <DonatBadgeComponent/>
            <ContactForm/>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </SectionWrapper>
    );
};

export default ActualsPageComponent;