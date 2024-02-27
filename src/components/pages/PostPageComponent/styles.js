import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '32px',
        marginBottom: '150px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '80px',
        }
    },
    title: {
        fontFamily: 'Inter-Bold',
        fontSize: '36px',
        fontWeight: 500,
        color: ({textColor}) => textColor,
        marginBottom: '12px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
            marginBottom: '10px'
        },
    },
    description: {
        fontFamily: 'Inter-Regular',
        fontSize: '20px',
        fontWeight: 400,
        backgroundColor: ({sectionWrapperBackgroundColor}) => sectionWrapperBackgroundColor,
        color: ({textColor}) => textColor,
        '& p': {
            margin: '0 0 20px 0',
            wordBreak: 'auto-phrase',
        },
        '& p.has-background': {
            color: ({textColor}) => textColor,
            borderRadius: '6px',
            padding: '20px',
            backgroundColor: '#90AFFF !important',
            '& a': {
                color: ({useLocationLinkColor}) => useLocationLinkColor,
                '&:hover': {
                    color: ({darkHoverButtonTextColor}) => darkHoverButtonTextColor,
                }
            },
            [theme.breakpoints.down('sm')]: {
                padding: '10px',
            },
        },
        '& div': {
            backgroundColor: 'transparent !important',
            '& button': {
              display: 'none',
            },
        },
        '& div.wp-lightbox-overlay': {
            display: 'none',
        },
        '& h2': {
            fontSize: '24px',
            fontWeight: 500,
            marginBottom: '20px',
            fontFamily: 'Inter-Regular',
        },
        '& a': {
            transition: "all 0.5s ease-out",
            color: ({useLocationLinkColor}) => useLocationLinkColor,
            '&:hover': {
                transition: "all 0.5s ease-out",
                color: ({useLocationLinkColorHover}) => useLocationLinkColorHover,
            }
        },
        '& hr': {
            display: 'none',
        },
        '& img': {
            width: '100% !important',
            height: '100% !important',
            objectFit: 'cover',
            borderRadius: '16px',
        },
        '& strong': {
            color: `({textColor}) => textColor !important`,
        },
        '& figure': {
            margin: '0',
            textAlign: 'center',
            marginBottom: '20px',
            '& figcaption': {
                fontFamily: 'Inter-Regular',
                fontSize: '16px',
                fontWeight: 400,
                color: ({textColor}) => textColor,
                opacity: '0.6',
            },
            '& button': {
                display: 'none',
            },
        },
        '& div.wp-block-spacer': {
            display: 'none',
        },
        '& iframe': {
            width: '100%',
            borderRadius: '16px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        }
    },
    date: {
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        fontWeight: 400,
        opacity: '0.6',
        color: ({textColor}) => textColor,
        marginBottom: '12px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            marginBottom: '20px',
        },
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
        '& img': {
            width: '100%',
            maxHeight: '700px',
            borderRadius: '0',
            objectFit: 'cover',
            aspectRatio: '3/4',
            listStyle: 'none',
            paddingLeft: 0,
            //cursor: 'pointer',
            transition: 'transform 0.3s ease-in-out',
        },
    },
    image: {
        width: '100%',
        borderRadius: '16px',
        height: 'auto',
        '& figure': {
            margin: '0',
            width: '100%',
            height: '100%',
        }
    },
    mainImageWrapper: {
        padding: '20px 10px 0 0',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 0 0 0',
        }
    },
    textContainer: {
        width: '100%',
        hyphens: 'auto',
        paddingRight: '10px',
        wordWrap: 'break-word',
        '& ul': {
            textDecoration: 'none',
            color: ({textColor}) => textColor,
            //listStyle: 'none',
            //padding: '0',
        },
        // '& figure': {
        //     display: 'none',
        // }
        [theme.breakpoints.down('sm')]: {
            paddingRight: '0',
        }
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        paddingBottom: '30px',
        // borderRight: '1px solid',
        // borderColor: ({borderColor}) => borderColor,
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    columnsWrapper: {
        //todo change this
        //height: '75vh',
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        padding: '0 5%',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '0px',
        },
        '& figure': {
            margin: '0',
            height: '100%',
        },
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',

        }
    },
    viewAllButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: ({bannerTextColor}) => bannerTextColor,
        width: '100%',
        height: '100%',
        borderRadius: '0',
        position: 'absolute',
        top: '50%',
        fontFamily: 'Helvetica-Bold',
        fontSize: '32px',
        fontWeight: 700,
        textTransform: 'none',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        padding: '10px 20px',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        }
    },
    textWrapper: {
        width: '65%',
        borderRight: '1px solid',
        borderColor: ({borderColor}) => borderColor,
        [theme.breakpoints.down('sm')]: {
            borderRight: 'none',
            width: '100%',
        }
    },
    imageWrapper: {
        width: '35%',
        position: 'sticky',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    fullWidth: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    largeActiveViewForMobile: {
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        }
    },
    downloadButtonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '20px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },

}));

export default useStyles;