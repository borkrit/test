import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {makeStyles} from '@material-ui/core/styles';
import Logo from "../../../assets/Logo/LOGO.svg";
import {Box, Icon} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import {ReactComponent as WCAGIcon} from "../../../assets/Icons/wcag-logo.svg";
import SettingsDrawer from "../../UI/WCAGDrawer";
import ToggleMenu from "../ToggleMenu";
import FloatingButton from "../../UI/FloatingButton";
import {ReactComponent as SearchIcon} from "../../../assets/Icons/search.svg";


const navLinksData = [
    {
        url: '/bydgoszcz',
        text: 'Bydgoszcz',
        subLinks: [
            {url: '/bydgoszcz/cykl-bydgoszcz-przez-dziurke-od-klucza', text: 'BYDGOSZCZ PRZEZ DZIURKĘ OD KLUCZA'},
            {url: '/bydgoszcz/cykl-bydgoskie-osiedla-bez-filtrow', text: 'BYDGOSKIE OSIEDLA BEZ FILTRÓW'},
            {url: '/bydgoszcz/cykl-bydgoszcz-narodzona-z-wody', text: 'BYDGOSZCZ – NARODZONA Z WODY'},
            {url: '/bydgoszcz/cykl-cuda-bydgoskie', text: 'CUDA BYDGOSKIE'},
            {url: '/bydgoszcz/inne-bydgoskie', text: 'INNE BYDGOSKIE'},
            {url: '/artykuly/bartodzieje-szlak', text: 'SZLAKIEM BYDGOSKICH OSIEDLI #1 – BARTODZIEJE'},

        ].sort((a, b) => a.text.localeCompare(b.text)),
    },
    {
        url: '/regiony',
        text: 'Regiony',
        subLinks: [
            {url: '/regiony/wloclawek', text: 'WŁOCŁAWEK'},
            {url: '/regiony/inowroclaw', text: 'INOWROCŁAW'},
            {url: '/regiony/krakow', text: 'KRAKÓW'},
            {url: '/regiony/szczecin', text: 'SZCZECIN'},
            {url: '/regiony/grudziadz', text: 'GRUDZIĄDZ'},
            {url: '/regiony/chojnice', text: 'CHOJNICE I OKOLICE'},
            {url: '/regiony/dolnyslask', text: 'GÓRY SOWIE'},
        ].sort((a, b) => a.text.localeCompare(b.text)),
    },
    {
        url: '/kraje',
        text: 'Kraje',
        subLinks: [
            {url: '/kraje/ukraina', text: 'UKRAINA'},
            {url: '/kraje/wycieczkazagraniczna', text: 'NIEMCY'},
        ],
    },
    {
        url: '/filmy',
        text: 'Filmy',
    },
    // {
    //     url: 'https://turystykabezfiltrow.com/wycieczki/',
    //     text: 'Sklep',
    // },
    {
        url: '/wydarzenia',
        text: 'Wydarzenia',
        subLinks: [
            {url: '/wydarzenia', text: 'Weź udział!'},
            {url: '/wycieczki', text: 'Co zrealizowaliśmy?'},
            {
                url: 'https://www.instagram.com/carfortrip_/?fbclid=IwAR0AnzB3bveYLQbilGia_XFBPek4C9zSQop5rmu-Gd8MLlX5FpKx_fnkDTQ',
                text: 'Wycieczki do Gruzji',
                openInNewTab: true,
            },
        ],
    },
    {
        url: '/o-nas',
        text: 'O nas',
        subLinks: [
            {url: '/o-nas', sectionId: 'bez-filtrow', text: 'BEZ FILTRÓW - czyli?'},
            {url: '/o-nas', sectionId: 'projekty', text: 'Projekty'},
            {url: '/o-nas', sectionId: 'publikacje', text: 'Publikacje'},

        ],
    },
    {
        url: 'https://pisanieiprojekty.com/',
        text: 'Firma P&P',
        openInNewTab: true
    },
    {
        //TODO: change url
        url: 'https://patronite.pl/turystykabezfiltrow',
        text: 'Wesprzyj nas!',
        openInNewTab: true
    },
];

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: ({backgroundColor}) => backgroundColor,
        boxShadow: 'none',
        transition: "all 0.3s ease-out",
        borderRadius: '10px',
        margin: '20px',
        width: 'calc(100% - 40px)',
        border: '1px solid',
        borderColor: ({inputBorderColor}) => inputBorderColor,
    },
    // hidden: {
    //     transform: "translate(0, -100%)",
    // },
    menuButton: {
        marginRight: 10,
    },
    toolbar: {
        padding: '20px',
        justifyContent: 'space-between',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
        },
        [theme.breakpoints.up('lg')]: {
            padding: '20px'
        },
        [theme.breakpoints.up('xl')]: {
            padding: '20px 40px'
        }
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',

        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    buttonWrapper: {
        display: 'flex',
        //alignItems: 'center',
        flexDirection: 'row',
        gap: '20px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    navButtonsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    },
    navButton: {
        color: ({postsTextColor}) => postsTextColor,
        transition: "all 0.3s ease-out",
        textDecoration: 'none',
        fontSize: '16px',
        fontFamily: 'Inter-Regular',
        textTransform: 'Uppercase',
        fontWeight: 500,
        padding: '0',

        '&:hover': {
            backgroundColor: 'transparent',
            color: ({postsHoverTextColor}) => postsHoverTextColor,
        },
        '&:hover $subMenu': {
            display: 'flex',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    wcagButton: {
        border: 'none',
        background: WCAGIcon,
        backgroundColor: 'transparent',
        cursor: 'pointer',
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
    link: {
        textDecoration: 'none',
        color: 'inherit',
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
    mobileButtonSection: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
        }
    },
    subMenu: {
        display: 'none',
        position: 'absolute',
        flexDirection: 'column',
        gap: '10px',
        backgroundColor: ({backgroundColor}) => backgroundColor,
        borderRadius: '8px',
        boxShadow: 'none',
        zIndex: 1,
        minWidth: '160px',
        paddingTop: '30px',
        textTransform: 'capitalize',
        transition: "all 0.3s ease-out",
        '& a': {
            textAlign: 'left',
            padding: '5px 10px 5px 10px',
            textTransform: 'capitalize',
            textDecoration: 'none',
            transition: "all 0.3s ease-out",
            color: ({postsTextColor}) => postsTextColor,
            '&:hover': {
                transition: "all 0.3s ease-out",
                backgroundColor: '#f5f5f5',  // Цвет фона при наведении на подпункт
                color: ({postsHoverTextColor}) => postsHoverTextColor,
            },
        },
    },
    line: {
        height: '2px',
        width: '50%',
        backgroundColor: ({lineBackgroundColor}) => lineBackgroundColor,
    },
    iconLink: {
        "& path": {
            transition: '300ms ease-in-out',
            stroke: ({iconColorFill}) => iconColorFill,
        },
        '&:hover': {
            backgroundColor: 'transparent',
            "& path": {
                transition: '300ms ease-in-out',
                stroke: ({iconColorFillHover}) => iconColorFillHover,
            },
        },
    },
    settingsDrawerBox: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    }

}));

function Header() {
    // eslint-disable-next-line no-unused-vars
    const {theme, toggleTheme} = useTheme();
    const classes = useStyles(themes[theme]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 120,
                behavior: 'smooth',
            });
        }
    };

    return (
        <AppBar position={'fixed'} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Box>
                    <a href={'/'}>
                        <img src={Logo} alt="logo" className={classes.logo} />
                    </a>
                </Box>
                <Box className={classes.title}>
                    <Box className={classes.navButtonsWrapper}>
                        {navLinksData.map((navLink, index) => (
                            <Box
                                key={index}
                                className={classes.navButton}
                                onMouseEnter={(e) => e.currentTarget.classList.add('hovered')}
                                onMouseLeave={(e) => e.currentTarget.classList.remove('hovered')}
                            >
                                {navLink.subLinks && navLink.subLinks.length > 0 ? (
                                    <React.Fragment>
                                        <Link
                                            to={navLink.url}
                                            className={classes.link}
                                            {...(navLink.openInNewTab && {
                                                target: '_blank',
                                                rel: 'noopener noreferrer',
                                            })}
                                        >
                                            {navLink.text}
                                        </Link>
                                        <Box className={classes.subMenu}>
                                            <div className={classes.line} />
                                            {navLink.subLinks.map((subLink, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={subLink.url}
                                                    onClick={() =>
                                                        subLink.sectionId && scrollToSection(subLink.sectionId)
                                                    }
                                                    className={classes.link}
                                                    {...(navLink.openInNewTab && {
                                                        target: '_blank',
                                                        rel: 'noopener noreferrer',
                                                    })}
                                                >
                                                    {subLink.text}
                                                </Link>
                                            ))}
                                        </Box>
                                    </React.Fragment>
                                ) : (
                                    <Link
                                        to={navLink.url}
                                        className={classes.link}
                                        onClick={() => navLink.sectionId && scrollToSection(navLink.sectionId)}
                                        {...(navLink.openInNewTab && {
                                            target: '_blank',
                                            rel: 'noopener noreferrer',
                                        })}
                                    >
                                        {navLink.text}
                                    </Link>
                                )}
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box className={classes.buttonWrapper}>
                    <Box>
                        <Link to="/wyszukiwarka" className={classes.iconLink}>
                            <Icon
                                component={SearchIcon}
                                className={classes.icon}
                                src={SearchIcon}
                            />
                        </Link>
                    </Box>
                    <Box>
                        <SettingsDrawer />
                    </Box>
                </Box>
                <FloatingButton />
                <Box className={classes.mobileButtonSection}>
                    <ToggleMenu />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

