import React, {useEffect, useRef, useState} from 'react';
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

const WycieczkiPageComponent = () => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const postsPerPage = 9;

    const pageRef = useRef(1);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchData();  // Загружаем данные для первой страницы при монтировании компонента
    }, []);

    const handleLoadMore = () => {
        pageRef.current += 1;
        fetchData();
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            // Получаем все категории (categories)
            const categoriesResponse = await axios.get(`https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/categories?per_page=100`);

            // Ищем категорию 'wycieczki'
            const wycieczkiCategory = categoriesResponse.data.find(category => category.name.toLowerCase() === 'wycieczki');

            if (!wycieczkiCategory) {
                console.error('Category not found');
                return;
            }

            // Получаем все посты с выбранной категорией 'wycieczki'
            const response = await axios.get(`https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/posts?categories=${wycieczkiCategory.id}&per_page=${postsPerPage}&page=${pageRef.current}&_embed`);

            const newCategoriesData = response.data.map(post => {
                const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';

                return {
                    postTitle: post.title.rendered,
                    lastPostImage: imageUrl,
                    postDescription: post.excerpt.rendered,
                    postDate: post.date,
                    projectSlug: post.slug
                };
            });

            // Добавляем новые данные к существующим
            setCategoriesData(prevData => [...prevData, ...newCategoriesData]);
        } catch (error) {
            console.error('Error fetching categories data:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <SectionWrapper id="actual" paddingBottom="100px" paddingTop="120px">
            <BreadCrumbs/>
            <Typography variant="h1" className={classes.title}>
                Co zrealizowaliśmy?
            </Typography>
            <Grid container spacing={3} className={classes.cardWrapper}>
                {categoriesData.map((post, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Link to={`/wycieczki/${post.projectSlug}`} className={classes.link}>
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
            <DonatBadgeComponent/>
            <ContactForm/>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </SectionWrapper>
    );
};

export default WycieczkiPageComponent;