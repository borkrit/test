import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        padding: '0',
        transition: "all 0.3s ease-out",
        backgroundColor: 'transparent',
        '& path': {
            fill: ({iconColorFill}) => iconColorFill,
        },
        '&:hover': {
            backgroundColor: 'transparent',
            '& $hamburgerIcon': {
                '& line': {
                    stroke: ({iconColorFillHover}) => iconColorFillHover,
                }
            }
        },
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    list: {
        width: '100%',
        height: '100%',
        padding: '20px',
        paddingBottom: '40px',
        display: 'flex',
        flexDirection: 'column',
    },
    drawer: {
        width: '100%',
        height: '100%',
        backgroundColor: ({backgroundColor}) => backgroundColor,
    },
    navBlock: {
        color: '#f2f2f2',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

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
    closeIcon: {
        color: ({iconColorFill}) => iconColorFill,
        fontSize: '40px',
        marginLeft: 'auto',
        transition: "all 0.3s ease-out",
        '&:hover': {
            color: ({iconColorFillHover}) => iconColorFillHover,
        }
    },
    hamburgerIcon: {
        width: '40px',
        height: '40px',
        backgroundColor: 'transparent',
        transition: "all 0.3s ease-out",
        '& line': {
            transition: "all 0.3s ease-out",
            stroke: ({iconColorFill}) => iconColorFill,
        },
        '&:hover': {
            transition: "all 0.3s ease-out",
            backgroundColor: 'transparent',
            '& line': {
                stroke: ({iconColorFillHover}) => iconColorFillHover,
            }
        }
    },
    icon: {
        width: '24px',
        height: '24px',
    },
    headerBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    root: {
        width: '100%',
        backgroundColor: '#1E1E1E',
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
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        marginBottom: '32px',
    },
    link: {
        textDecoration: 'none',
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
    firstButtonSection: {
        marginBottom: '40px',
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
    }
}));

export default useStyles;