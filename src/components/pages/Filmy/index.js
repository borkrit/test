// import React, { useEffect, useState } from 'react';
// import {
//     Typography,
//     Box,
//     Button,
//     makeStyles,
//     Grid,
// } from '@material-ui/core';
// import SectionWrapper from '../../UI/SectionWrapper';
// import { useTheme } from '../../../theme/themeContext';
// import { themes } from '../../../theme/themeContext/themes';
// import BreadCrumbs from '../../UI/BreadCrumbs';
// import ContactForm from '../../UI/ContactForm';
// import DonatBadgeComponent from '../../UI/DonatBadge';
// import ShareButton from '../../UI/ShareButton';
// import axios from 'axios';
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     title: {
//         fontFamily: 'Inter-Bold',
//         fontSize: '60px',
//         fontWeight: '500',
//         color: ({ textColor }) => textColor,
//         textAlign: 'center',
//         marginBottom: '32px',
//         [theme.breakpoints.down('sm')]: {
//             fontSize: '20px',
//             marginBottom: '20px',
//         },
//     },
//     videoContainer: {
//         marginBottom: '20px',
//         padding: '16px',
//         border: '1px solid #ddd',
//         borderRadius: '8px',
//     },
//     videoIframe: {
//         width: '100%',
//         height: '400px',
//         borderRadius: '8px',
//         boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//         marginBottom: '16px',
//     },
//     copyButton: {
//         marginTop: '16px',
//     },
// }));
//
// const FilmyPage = () => {
//     const { theme } = useTheme();
//     const classes = useStyles(themes[theme]);
//     const [videoPosts, setVideoPosts] = useState([]);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const tagsResponse = await axios.get('https://turystykabezfiltrow.com/wp-json/wp/v2/tags?per_page=100');
//
//                 if (tagsResponse.data.length === 0) {
//                     console.error('No tags found.');
//                     return;
//                 }
//
//                 const filmyTag = tagsResponse.data.find(tag => tag.name.toLowerCase() === 'filmy');
//
//                 if (!filmyTag) {
//                     console.error('Tag "filmy" not found.');
//                     return;
//                 }
//
//                 const postsResponse = await axios.get(`https://turystykabezfiltrow.com/wp-json/wp/v2/posts?tags=${filmyTag.id}&per_page=10&_embed`);
//                 const videoPostsData = postsResponse.data.map(post => {
//                     const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
//
//                     // Используем DOMParser для парсинга HTML
//                     const parser = new DOMParser();
//                     const doc = parser.parseFromString(post.content.rendered, 'text/html');
//                     const anchor = doc.querySelector('a');
//
//                     // Если найден тег <a>, получаем значение href
//                     const videoUrl = anchor ? anchor.getAttribute('href') : '';
//
//                     // Убираем лишние символы в конце ссылки
//                     const cleanVideoUrl = videoUrl.replace(/&#\d+;$/, '').replace(/&amp;/g, '&');
//                     console.log('cleanVideoUrl:', cleanVideoUrl);
//                     return {
//                         postTitle: post.title.rendered,
//                         videoUrl: cleanVideoUrl,
//                         imageUrl,
//                     };
//                 });
//
//                 setVideoPosts(videoPostsData);
//             } catch (error) {
//                 console.error('Error fetching posts data:', error);
//             }
//         };
//
//         fetchData().then(() => console.log('Posts data fetched'));
//     }, []);
//
//
//
//
//     return (
//         <SectionWrapper id="Filmy" paddingBottom="100px" paddingTop="120px">
//             <BreadCrumbs />
//             <Typography variant="h1" className={classes.title}>
//                 Filmy
//             </Typography>
//             <Grid container spacing={3} className={classes.root}>
//                 {videoPosts.map((post, index) => (
//                     <Grid item key={index} xs={12} sm={6} md={4}>
//                         <Box className={classes.videoContainer}>
//                             <Typography variant="h2" gutterBottom>
//                                 {post.postTitle}
//                             </Typography>
//                             <iframe
//                                 className={classes.videoIframe}
//                                 src={post.videoUrl}
//                                 title={post.postTitle}
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             />
//                             <Button
//                                 className={classes.copyButton}
//                                 variant="outlined"
//                                 color="primary"
//                                 onClick={() => navigator.clipboard.writeText(post.videoUrl)}
//                             >
//                                 Copy Video Link
//                             </Button>
//                         </Box>
//                     </Grid>
//                 ))}
//             </Grid>
//             <ShareButton url={window.location.href} />
//             <DonatBadgeComponent />
//             <ContactForm />
//         </SectionWrapper>
//     );
// };
//
// export default FilmyPage;

import React, {useEffect} from 'react';
import {
    Typography, Box, makeStyles,
} from '@material-ui/core';
import SectionWrapper from '../../UI/SectionWrapper';
import {useTheme} from '../../../theme/themeContext';
import {themes} from '../../../theme/themeContext/themes';
import BreadCrumbs from '../../UI/BreadCrumbs';
import ContactForm from '../../UI/ContactForm';
import DonatBadgeComponent from '../../UI/DonatBadge';
import ShareButton from '../../UI/ShareButton';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '80px',
        marginBottom: '80px',
        [theme.breakpoints.down('sm')]: {
            gap: '40px',
            marginBottom: '40px',
        }
    },
    title: {
        fontFamily: 'Inter-Regular',
        fontSize: '36px',
        fontWeight: '500',
        color: ({textColor}) => textColor,
        textAlign: 'left',
        marginBottom: '12px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            marginBottom: '20px',
        },
    },
    videoContainer: {
        width: '100%',
        maxWidth: '80vw',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%',
        }
        //marginBottom: '20px',
    },
    videoIframe: {
        width: '100%',
        height: '70vh',
        marginBottom: '32px',
        borderRadius: '16px', // Пример радиуса скругления углов
        boxShadow: 'none', // Пример тени
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
            height: '30vh',
        }
    },
    titleSection: {
        fontFamily: 'Inter-Bold',
        fontSize: '60px',
        fontWeight: '500',
        color: ({textColor}) => textColor,
        textAlign: 'center',
        marginBottom: '32px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            marginBottom: '20px',
        }
    },
}));

const filmy = [
    {
        title: 'Tajemnice Bazyliki Mniejszej pw. św. Wincentego a Paulo w Bydgoszczy',
        videoUrl: 'https://www.youtube.com/embed/0NPg6unxGgI',
    },
    {
        title: '“Historia bydgoskich zakonów” – “Bydgoszcz? Dzieje się! cz. 4.',
        videoUrl: 'https://www.youtube.com/embed/40Dq8PIBUFU',

    },
    {
        title: '“Osiedle Sielanka” – “Bydgoszcz? Dzieje się! cz. 3.',
        videoUrl: 'https://www.youtube.com/embed/QktzHwVGmgI',
    },
    {
        title: '“Zbocze Bydgoskie – “Bydgoszcz? Dzieje się! cz. 2.',
        videoUrl: 'https://www.youtube.com/embed/J_Q56gL8mJ4',
    },
    {
        title: '“Puszcza Bydgoska” – “Bydgoszcz? Dzieje się! cz. 1.',
        videoUrl: 'https://www.youtube.com/embed/6mH8hj-dBH0',
    }
];

const FilmyPage = () => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <SectionWrapper id="Filmy" paddingBottom="100px" paddingTop="120px">
            <BreadCrumbs/>
            <Typography variant="h1" className={classes.titleSection}>
                Filmy
            </Typography>
            <Box className={classes.root}>
                {filmy.map((post, index) => (
                    <Box className={classes.videoContainer}>
                        <iframe
                            className={classes.videoIframe}
                            src={post.videoUrl}
                            title={post.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        <Typography variant="h2" className={classes.title}>
                            {post.title}
                        </Typography>
                        <ShareButton url={post.videoUrl}/>
                    </Box>
                ))}
            </Box>
            <DonatBadgeComponent/>
            <ContactForm/>
        </SectionWrapper>
    );
};

export default FilmyPage;

