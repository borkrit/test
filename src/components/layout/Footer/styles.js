import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        //flexGrow: 1,
        display: "flex",
        width: '65%',
        flexWrap: "wrap",
        rowGap: "40px",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            display: 'none',
            flexDirection: "column",
            gap: '32px',
        }
    },
    mobileRoot: {
      display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            flexDirection: "column",
            width: '100%',
        }
    },
    column: {
        padding: theme.spacing(2),
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
        [theme.breakpoints.up("md")]: {
            flexBasis: "20%",
        },
    },
    footerWrapper: {
        backgroundColor: ({backgroundColor}) => backgroundColor,
        padding: '44px 20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        transition: "all 0.3s ease-out",
        [theme.breakpoints.down('sm')]: {
            padding: '40px 20px 40px 20px'
        },
    },
    linkText: {
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        fontWeight: 700,
        color: ({postsTextColor}) => postsTextColor,
        marginBottom: '16px',
        textTransform: 'uppercase',
        transition: "all 0.3s ease-out",
        '&:hover': {
            color: ({postsHoverTextColor}) => postsHoverTextColor,
        },
    },
    link: {
        textDecoration: 'none',
        color: ({postsTextColor}) => postsTextColor,
        '&:hover': {
            textDecoration: 'none',
        }
    },
    linkSocial: {
        textDecoration: 'none',
        "& path": {
            transition: '300ms ease-in-out',
            color: ({postsTextColor}) => postsTextColor,
        },
        '&:hover': {
            "& path": {
                transition: '300ms ease-in-out',
                color: ({postsHoverTextColor}) => postsHoverTextColor,
            },
        },
    },
    boxWrapper: {
        marginBottom: '20px',
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    mainSection: {
        width: '25%',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    navWrapper: {
        width: '30%',
    },
    navButton: {
        color: ({textColor}) => textColor,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        borderRadius: '0',
        transition: "all 0.3s ease-out",
        padding: '0',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&:focus': {
            backgroundColor: 'transparent',
        }
    },
    boxView: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginBottom: '40px',
    },
    titleLinkSection: {
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        fontWeight: 400,
        color: ({postsTextColor}) => postsTextColor,
        marginBottom: '12px',
        textTransform: 'capitalize',
        transition: "all 0.3s ease-out",
        '&:hover': {
            color: ({postsHoverTextColor}) => postsHoverTextColor,
        }
    },
    navigationText: {
        color: ({textColor}) => textColor,
        fontSize: '16px',
        fontWeight: '700',
        fontFamily: 'Inter-Regular',
        transition: "all 0.3s ease-out",
        textTransform: 'uppercase',
        textAlign: 'left',
        margin: '10px 0',
        '&:hover': {
            backgroundColor: 'transparent',
            color: ({postsHoverTextColor}) => postsHoverTextColor,
        },
        '&:focus': {
            backgroundColor: 'transparent',
        }
    },
    firstButtonSection: {
        marginBottom: '40px',
    },
    accordionBox: {
        "& path": {
            transition: '300ms ease-in-out',
            fill: ({iconColorFill}) => iconColorFill,
        },
        '&:hover': {
            "& path": {
                transition: '300ms ease-in-out',
                fill: ({iconColorFillHover}) => iconColorFillHover,
            },
        },
        '& .MuiAccordionSummary-root': {
            padding: '0',
            //borderBottom: '1px solid',
            //borderColor: ({borderColor}) => borderColor,
        },
        '& .MuiAccordionSummary-content': {
            margin: '0',
        }
    },
    socialLink: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: '20px',
        "& path": {
            transition: '300ms ease-in-out',
            fill: ({iconColorFill}) => iconColorFill,
        },
        '&:hover': {
            "& path": {
                transition: '300ms ease-in-out',
                fill: ({iconColorFillHover}) => iconColorFillHover,
            },
        },
    },
    titleToggleMenuFooter: {
        color: ({textColor}) => textColor,
        fontSize: '16px',
        fontWeight: '700',
        fontFamily: 'Inter-Bold',
        textTransform: 'none',
    },
    textToggleMenuFooter: {
        color: ({postsTextColor}) => postsTextColor,
        fontSize: '16px',
        fontWeight: '400',
        fontFamily: 'Inter-Regular',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: 'transparent',
            color: ({postsHoverTextColor}) => postsHoverTextColor,
        }
    },
}));

export default useStyles;