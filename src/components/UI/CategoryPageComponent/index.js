import React, {useEffect, useState} from 'react';
import {
    Grid,
    makeStyles,
    Typography,
    Backdrop,
    CircularProgress, Box, Icon,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import {useNavigate, useLocation, Link} from 'react-router-dom';
import H4 from "../../UI/H4";
import SectionWrapper from "../../UI/SectionWrapper";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import BreadCrumbs from "../../UI/BreadCrumbs";
import ContactForm from "../ContactForm";
import DonatBadgeComponent from "../DonatBadge";
import axios from "axios";
import {ReactComponent as PostsCount} from "../../../assets/Icons/posts-count-icon.svg";


const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
    pagination: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: ({paginationSelectedBackgroundColor}) => paginationSelectedBackgroundColor,
            color: ({paginationSelectedTextColor}) => paginationSelectedTextColor,
            border: ({paginationSelectedBorderColor}) => `1px solid ${paginationSelectedBorderColor}`,
        },
        '& .MuiPaginationItem-rounded': {
            borderRadius: '0',
        },
        '& .MuiPaginationItem-root': {
            color: ({paginationTextColor}) => paginationTextColor,
            backgroundColor: ({paginationBackgroundColor}) => paginationBackgroundColor,
            border: ({paginationBorderColor}) => `1px solid ${paginationBorderColor}`,
            '&:hover': {
                backgroundColor: ({paginationSelectedBackgroundColor}) => paginationSelectedBackgroundColor,
                color: ({paginationSelectedTextColor}) => paginationSelectedTextColor,
                border: ({paginationSelectedBorderColor}) => `1px solid ${paginationSelectedBorderColor}`,
            },
        },
        '& .MuiPaginationItem-root.MuiPaginationItem-ellipsis': {
            border: 'none',
            color: ({paginationTextColor}) => paginationTextColor,
            cursor: 'default',
            '&:hover': {
                backgroundColor: 'transparent',
                border: 'none',
                color: ({textColor}) => textColor,

            }
        }
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    root: {
        backgroundColor: ({backgroundColor}) => backgroundColor,
        color: ({textColor}) => textColor,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        cursor: 'pointer',
        gap: '12px',
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
            "& path": {
                transition: '300ms ease-in-out',
                fill: ({listIconColorFillHover}) => listIconColorFillHover,
            },
        },
        "& path": {
            transition: '300ms ease-in-out',
            fill: ({listIconColorFill}) => listIconColorFill,
        },
    },
    textContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // padding: '10px',
        // border: '1px solid',
        // borderColor: ({borderColor}) => borderColor,
    },
    image: {
        transition: "all 0.3s ease-out",
        width: '100%',
        height: '35vh',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            height: '35vh',
        }
    },
    imageContainer: {
        display: 'flex',
        flex: '0 0 auto',
        overflow: 'hidden',
    },
    line: {
        width: '70%',
        backgroundColor: ({lineBackgroundColor}) => lineBackgroundColor,
        opacity: '0.6',
        marginBottom: '12px',
        height: '1px',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        }
    },
    //TODO: refactor
    cardWrapper: {
        marginBottom: '80px',
    },
    linkWrapper: {
        textDecoration: 'none',
        color: 'inherit', // Унаследовать цвет из родительского элемента
    },
    title: {
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
    countSection: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '2px',
    }
}));

const CategoryPage = () => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [page, setPage] = useState(1);
    //const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    //const postsPerPage = 9;

    // const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // useEffect(() => {
    //     const params = new URLSearchParams(location.search);
    //     const newPage = parseInt(params.get('page')) || 1;
    //
    //     if (newPage !== page) {
    //         setPage(newPage);
    //     }
    // }, [location.search, page]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const bydgoszczCategoryIdResponse = await axios.get(`https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/categories?slug=bydgoszcz`);

                if (bydgoszczCategoryIdResponse.data.length === 0) {
                    console.error('Category "bydgoszcz" not found.');
                    return;
                }

                const bydgoszczCategoryId = bydgoszczCategoryIdResponse.data[0].id;

                const subCategoriesResponse = await axios.get(`https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/categories?parent=${bydgoszczCategoryId}&per_page=100`);

                const categoriesData = [];

                for (const category of subCategoriesResponse.data) {
                    const postsResponse = await axios.get(`https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/posts?categories=${category.id}&per_page=1&_embed`);

                    if (postsResponse.data.length > 0) {
                        const imageUrl = postsResponse.data[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';

                        console.log('Category:', category.name);
                        console.log('Image URL:', imageUrl);

                        categoriesData.push({
                            categoryName: category.name,
                            lastPostImage: imageUrl,
                            postCount: category.count,
                        });
                    }
                }

                console.log('Categories Data:', categoriesData);

                setCategoriesData(categoriesData);
            } catch (error) {
                console.error('Error fetching categories data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData().then(() => console.log('Categories data fetched'));
    }, [location.pathname, location.search, page]);


    // const handleChangePage = (event, newPage) => {
    //     navigate(`${location.pathname}?page=${newPage}`);
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // };

    return (
        <SectionWrapper id="actual" paddingBottom="100px" paddingTop="120px">
            <BreadCrumbs/>
            <Typography variant="h1" className={classes.title}>
                Bydgoszcz
            </Typography>
            <Grid container spacing={3} className={classes.cardWrapper}>
                {categoriesData.map((category, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Box className={classes.root}>
                            {category.lastPostImage && (
                                <div className={classes.imageContainer}>
                                    <img
                                        src={category.lastPostImage}
                                        alt={category.categoryName}
                                        className={classes.image}
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            <Box className={classes.textContainer}>
                                <Box>
                                    <H4 className={classes.h4}>{category.categoryName}</H4>
                                </Box>
                                <Box className={classes.countSection}>
                                    <Icon
                                        component={PostsCount}
                                        className={classes.icon}
                                        src={PostsCount}
                                    />
                                    <Typography variant="body2" className={classes.date}>
                                        {`${category.postCount}`}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            {/*<Pagination*/}
            {/*    className={classes.pagination}*/}
            {/*    count={totalPages}*/}
            {/*    page={page}*/}
            {/*    onChange={handleChangePage}*/}
            {/*    boundaryCount={window.innerWidth < 600 ? 1 : 2}*/}
            {/*    shape="rounded"*/}
            {/*/>*/}
            <DonatBadgeComponent/>
            <ContactForm/>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </SectionWrapper>
    );
};

export default CategoryPage;
