import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Box, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import H4 from "../H4";
import {Link} from "react-router-dom";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: ({backgroundColor}) => backgroundColor,
        color: ({textColor}) => textColor,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        cursor: 'pointer',
        padding: '10px 10px 20px 10px',
        boxShadow: '0px 0px 16px 0px #0000000f',
        transition: "all 0.5s ease-out",
        borderRadius: '16px',
        '&:hover': {
            transition: "all 0.5s ease-out",
            transform: 'scale(1.02)',
            // '& $image': {
            //     transition: "all 0.5s ease-out",
            //     transform: 'scale(1.05)',
            // },
        },
        '&:hover $mainTitle': {
            transition: "all 0.3s ease-out",
            color: ({postsHoverTextColor}) => postsHoverTextColor,
        },
    },
    textContainer: {
        flex: 1,
        //padding: '10px',
        //border: '1px solid',
        //borderColor: ({borderColor}) => borderColor,
    },
    image: {
        transition: "all 0.3s ease-out",
        width: '100%',
        height: '30vh',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            height: '25vh',
        }
    },
    imageContainer: {
        display: 'flex',
        flex: '0 0 auto',
        overflow: 'hidden',
        marginBottom: '12px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '10px',
        }
    },
    date: {
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        fontWeight: '400',
        opacity: '0.6',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
        }
    },
    //TODO: refactor
    cardWrapper: {
        marginBottom: '6px',
    },
    linkWrapper: {
        textDecoration: 'none',
        color: 'inherit', // Унаследовать цвет из родительского элемента
    },
    description: {
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        fontWeight: '400',
        lineClamp: 4,
        boxOrient: 'vertical',
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginBottom: '32px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            marginBottom: '16px',
        }
    },
    mainTitle: {
        lineClamp: 2,
        boxOrient: 'vertical',
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
}));

const PostCard = ({post, mediaData}) => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);
    const featuredMediaId = post.featured_media;
    const media = featuredMediaId ? mediaData[featuredMediaId] : null;

    return (
        <Link to={`/artykuly/${post.slug}`} className={classes.linkWrapper}>
            <Box className={classes.root}>
                {media && (
                    <Box className={classes.imageContainer}>
                        <img src={media.source_url} alt={post.title.rendered} className={classes.image} loading="lazy"/>
                    </Box>
                )}
                <Box className={classes.textContainer}>
                    <H4 className={classes.mainTitle}>{post.title.rendered}</H4>
                    <Typography variant="body2" className={classes.description} dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                    <Typography variant="body2" className={classes.date}>
                        {new Date(post?.date).toLocaleDateString('pl-PL', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
};

const PostsCard = ({postLimit}) => {
    const [postData, setPostData] = useState([]);
    const [mediaData, setMediaData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get(`https://weckwerthblog.wpcomstaging.com//wp-json/wp/v2/posts?per_page=${postLimit}`);
                setPostData(response.data);

                const mediaIds = response.data.map((post) => post.featured_media);
                const mediaPromises = mediaIds.map((mediaId) =>
                    axios.get(`https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/media/${mediaId}`)
                );

                const mediaResults = await Promise.all(mediaPromises);

                const mediaDataObject = mediaResults.reduce((acc, media) => {
                    acc[media.data.id] = media.data;
                    return acc;
                }, {});
                setMediaData(mediaDataObject);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData().then(r => console.log(r));
    }, [postLimit]);

    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.cardWrapper}>
            {postData.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <PostCard post={post} mediaData={mediaData}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default PostsCard;









