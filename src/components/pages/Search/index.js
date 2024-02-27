import React, {useEffect, useState} from 'react';
import {
    Grid,
    Typography,
    Box,
    CircularProgress,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import SectionWrapper from '../../UI/SectionWrapper';
import {useTheme} from '../../../theme/themeContext';
import {themes} from '../../../theme/themeContext/themes';
import BreadCrumbs from '../../UI/BreadCrumbs';
import ContactForm from '../../UI/ContactForm';
import DonatBadgeComponent from '../../UI/DonatBadge';
import axios from 'axios';
import useStyles from '../../pages/Category/styles';
import H4 from '../../UI/H4';
import SearchField from "../../UI/SearchTextField";
import StyledButton from "../../UI/StyledButton";


const Wyszukiwarka = () => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);
    const [postsData, setPostsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchExecuted, setSearchExecuted] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fetchData = async (pageNum) => {
        try {
            setLoading(true);

            const postsResponse = await axios.get(
                `https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/posts?per_page=6&page=${pageNum}&_embed&search=${searchKeyword}`
            );

            const totalPosts = parseInt(postsResponse.headers['x-wp-total'], 10);

            const newPostsData = postsResponse.data.map(post => ({
                postTitle: post.title.rendered,
                lastPostImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
                postCount: totalPosts,
                postDescription: post.excerpt.rendered,
                postDate: post.date,
                slug: post.slug,
                categories: post.categories,
                tags: post.tags,
            }));

            setPostsData(prevData => [...prevData, ...newPostsData]);
        } catch (error) {
            console.error('Error fetching posts data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
            if (searchExecuted) {
                fetchData(currentPage).then(() => console.log('Posts data fetched'));
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [searchKeyword, searchExecuted, currentPage]
    );

    const handleLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handleSearch = () => {
        // При нажатии на кнопку поиска обновляем данные с учетом введенного ключевого слова
        setPostsData([]);
        setCurrentPage(1);
        setSearchKeyword(searchKeyword.trim());
        setSearchExecuted(true);
    };

    return (
        <SectionWrapper
            id="kraje"
            paddingBottom="100px"
            paddingTop="120px"
        >
            <BreadCrumbs/>
            <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <SearchField handleSearch={handleSearch} searchKeyword={searchKeyword}
                             setSearchKeyword={setSearchKeyword}/>
            </Box>
            <Grid container spacing={3} className={classes.cardWrapper}>
                <Grid item xs={12} sm={12} md={12} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {loading && <CircularProgress className={classes.spinner}/>}

                    {postsData.length === 0 && searchExecuted && !loading && (
                        <Typography variant="body2" className={classes.noResults}>
                            Nic nie znaleziono
                        </Typography>
                    )}
                </Grid>

                {postsData.map((post, index) => (
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
                                            <Typography
                                                variant="body2"
                                                className={classes.postDescription}
                                                dangerouslySetInnerHTML={{__html: post.postDescription}}
                                            />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography variant="body2" className={classes.date}>
                                            {new Date(post?.postDate).toLocaleDateString('pl-PL', {
                                                month: 'long',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
            {postsData.length === 0 ? null : (
                <Box className={classes.buttonWrapper}>
                    <StyledButton text="Załaduj więcej" clicked={handleLoadMore} width="100%"/>
                </Box>
            )}
            <DonatBadgeComponent/>
            <ContactForm/>
        </SectionWrapper>
    );
};

export default Wyszukiwarka;



