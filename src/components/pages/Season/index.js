import React, {useEffect, useState} from 'react';
import {
    Grid,
    Typography,
    Backdrop,
    CircularProgress, Box,
} from '@material-ui/core';
import {useLocation, Link} from 'react-router-dom';
import H4 from "../../UI/H4";
import SectionWrapper from "../../UI/SectionWrapper";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import BreadCrumbs from "../../UI/BreadCrumbs";
import ContactForm from "../../UI/ContactForm";
import DonatBadgeComponent from "../../UI/DonatBadge";
import axios from "axios";
import useStyles from "../Category/styles";
import H1 from "../../UI/H1";
import ProjectCard from "../../UI/ActualProjectsCard";
import StyledButton from "../../UI/StyledButton";

const SeasonPageComponent = () => {
    const { theme } = useTheme();
    const classes = useStyles(themes[theme]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const postsPerPage = 9;
    const [page, setPage] = useState(1);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fetchData = async (pageNum) => {
        setLoading(true);
        try {
            const tagsResponse = await axios.get('https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/tags?per_page=100');
            const sezonTag = tagsResponse.data.find(tag => tag.name.toLowerCase() === 'sezon');

            if (!sezonTag) {
                console.error('Tag "sezon" not found.');
                return;
            }

            const response = await axios.get(`https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/posts?tags=${sezonTag.id}&per_page=${postsPerPage}&page=${pageNum}&_embed`);

            const newCategoriesData = response.data.map(post => {
                const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';

                return {
                    postTitle: post.title.rendered,
                    lastPostImage: imageUrl,
                    postDescription: post.excerpt.rendered,
                    postDate: post.date,
                    postSlug: post.slug,
                };
            });

            setCategoriesData(prevData => [...prevData, ...newCategoriesData]);
        } catch (error) {
            console.error('Error fetching categories data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(page).then(() => console.log('Categories data fetched'));
    }, [location.pathname, location.search, page]);

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };


    return (
        <SectionWrapper id="actual" paddingBottom="100px" paddingTop="120px">
            <BreadCrumbs/>
            <Typography variant="h1" className={classes.title}>
                WEŹ UDZIAŁ
            </Typography>
            <Grid container spacing={3} className={classes.cardWrapper}>
                {categoriesData.map((post, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Link to={`/wydarzenia/${post.postSlug}`} className={classes.link}>
                            <Box className={classes.root}>
                                {post.lastPostImage && (
                                    <div className={classes.imageContainer}>
                                        <img
                                            src={post.lastPostImage}
                                            alt={post.postTitle}
                                            className={classes.image}
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                                <Box className={classes.textContainer}>
                                    <Box>
                                        <Box>
                                            <H4 className={classes.h4}>{post.postTitle}</H4>
                                        </Box>
                                        <Box className={classes.description}>
                                            <Typography variant="body2" className={classes.postDescription}
                                                        dangerouslySetInnerHTML={{__html: post.postDescription}}/>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" className={classes.date}>
                                            {new Date(post?.postDate).toLocaleDateString('pl-PL', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
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
            <Box className={classes.addsPosts}>
                <H1 text="Co zrealizowaliśmy?"/>
                <ProjectCard projectLimit={3}/>
                <Grid container spacing={3} className={classes.buttonContainer}>
                    <Grid item xs={12} sm={6} md={4}>
                        <StyledButton text="Wszystkie Wycieczki" href="/wycieczki" width="100%" to="/wycieczki"/>
                    </Grid>
                </Grid>
            </Box>
            <DonatBadgeComponent/>
            <ContactForm/>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </SectionWrapper>
    );
};

export default SeasonPageComponent;