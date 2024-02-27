import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Typography, Box, CircularProgress, Backdrop} from '@material-ui/core';
import SectionWrapper from '../../UI/SectionWrapper';
import {useTheme} from '../../../theme/themeContext';
import {themes} from '../../../theme/themeContext/themes';
import BreadCrumbs from '../../UI/BreadCrumbs';
import {fetchPostBySlug} from './apiRequests';
import useStyles from './styles';
import ShareButton from "../../UI/ShareButton";
import ProjectCard from "../../UI/ActualProjectsCard";
import Sidebar from "../../UI/SideBar";
import RichLink from "../../UI/RichLinks";
import {LinkPreview} from "@dhaiwat10/react-link-preview";
import {Helmet} from "react-helmet-async";

const PostDetails = () => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line no-unused-vars
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const {postSlug} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const dataPost = await fetchPostBySlug(postSlug);
                setPost(dataPost);
            } catch (error) {
                console.error('Error fetching post data:', error);
            } finally {
                setLoading(false);
            }
        };

        setSelectedImageIndex(0);
        fetchData().then(r => r);
    }, [postSlug]);


    const descriptionWithImages = post?.content?.rendered || '';

    return (
        <SectionWrapper paddingBottom="100px" paddingTop="120px">
            <RichLink name={post?.title?.rendered} title={post?.title?.rendered} description={post?.content?.rendered} image={post?._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url}/>
            <BreadCrumbs/>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Box className={classes.contentWrapper}>
                <Box className={classes.textWrapper}>
                    <Box style={{borderBottom: '1px solid', borderColor: `${themes[theme].borderColor}`}}>
                        <Typography variant="h1" className={classes.title}
                                    dangerouslySetInnerHTML={{__html: post?.title?.rendered}}/>
                        <Typography variant="h1" className={classes.date}>
                            {new Date(post?.date).toLocaleDateString('pl-PL', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </Typography>
                        <ShareButton url={window.location.href}/>
                    </Box>
                    <Box className={classes.mainImageWrapper}>
                        {post?._embedded && post._embedded['wp:featuredmedia'] && (
                            <div>
                                <img
                                    src={post._embedded['wp:featuredmedia'][0].source_url}
                                    alt={post.title?.rendered}
                                    className={classes.image}
                                    loading="lazy"
                                />
                            </div>
                        )}
                    </Box>
                    <Box className={classes.textContainer}>
                        <Typography variant="body1" dangerouslySetInnerHTML={{__html: descriptionWithImages}}
                                    className={classes.description}/>
                    </Box>
                </Box>
                <Box className={classes.imageWrapper}>
                    <Sidebar>
                        <ProjectCard projectLimit={3} smallProjectView/>
                    </Sidebar>
                </Box>
            </Box>
        </SectionWrapper>
    );
};

export default PostDetails;
