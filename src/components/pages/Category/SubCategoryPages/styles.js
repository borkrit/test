import {makeStyles} from "@material-ui/core";

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
        margin: '80px 0 80px',
        display: 'flex',
        justifyContent: 'center',
        '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: ({paginationSelectedBackgroundColor}) => paginationSelectedBackgroundColor,
            color: ({paginationSelectedTextColor}) => paginationSelectedTextColor,
            border: ({paginationSelectedBorderColor}) => `1px solid ${paginationSelectedBorderColor}`,
        },
        '& .MuiPaginationItem-rounded': {
            borderRadius: '6',
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
        gap: '12px',
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
    },
    postDescription: {
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        fontWeight: '400',
        lineClamp: 4,
        boxOrient: 'vertical',
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: ({textColor}) => textColor,
        '& p': {
            margin: '0',
        }
    },
    date: {
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        fontWeight: '400',
        opacity: '0.6',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        }
    },
    noResults: {
        fontFamily: 'Inter-Bold',
        fontSize: '32px',
        fontWeight: '700',
        color: ({textColor}) => textColor,
    },
     link: {
        textDecoration: 'none',
        color: 'inherit',
     },
    buttonWrapper: {
        width: '25%',
        margin: '0 auto',
        marginBottom: '80px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    }
}));

export default useStyles;