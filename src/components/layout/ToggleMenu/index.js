// import React from 'react';
// import {IconButton, Drawer, Box, Icon, Accordion, AccordionSummary, AccordionDetails} from '@material-ui/core';
// import Typography from "@material-ui/core/Typography";
// import CloseIcon from "@material-ui/icons/Close";
// import {useTheme} from "../../../theme/themeContext";
// import {themes} from "../../../theme/themeContext/themes";
// import Logo from "../../../assets/Logo/LOGO.svg";
// import {Link} from "react-router-dom";
// import Button from "@material-ui/core/Button";
// import {ReactComponent as ToggleMenuIcon} from "../../../assets/Icons/ToggleMenuIcon.svg";
// import {ReactComponent as FaceBookLogo} from "../../../assets/Icons/facebook-logo.svg";
// import {ReactComponent as InstagramLogo} from "../../../assets/Icons/inst-logo.svg";
// import {ReactComponent as LinkedinLogo} from "../../../assets/Icons/linkedin-logo.svg";
// import useStyles from "./styles";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//
// const navLinksData = [
//     {
//         //url: '/bydgoszcz',
//         text: 'Bydgoszcz',
//         subLinks: [
//             {url: '/bydgoszcz/cykl-bydgoszcz-przez-dziurke-od-klucza', text: 'BYDGOSZCZ PRZEZ DZIURKĘ OD KLUCZA'},
//             {url: '/bydgoszcz/cykl-bydgoskie-osiedla-bez-filtrow', text: 'BYDGOSKIE OSIEDLA BEZ FILTRÓW'},
//             {url: '/bydgoszcz/cykl-bydgoszcz-narodzona-z-wody', text: 'BYDGOSZCZ – NARODZONA Z WODY'},
//             {url: '/bydgoszcz/cykl-cuda-bydgoskie', text: 'CUDA BYDGOSKIE'},
//             {url: '/bydgoszcz/inne-bydgoskie', text: 'INNE BYDGOSKIE'},
//             //{url: '/o-fundacji/historia', text: 'SZLAKIEM BYDGOSKICH OSIEDLI #1 – BARTODZIEJE'},
//
//         ].sort((a, b) => a.text.localeCompare(b.text)),
//     },
//     {
//         //url: '/regiony',
//         text: 'Regiony',
//         subLinks: [
//             {url: '/regiony/wloclawek', text: 'WŁOCŁAWEK'},
//             {url: '/regiony/inowroclaw', text: 'INOWROCŁAW'},
//             {url: '/regiony/krakow', text: 'KRAKÓW'},
//             {url: '/regiony/szczecin', text: 'SZCZECIN'},
//             {url: '/regiony/grudziadz', text: 'GRUDZIĄDZ'},
//             {url: '/regiony/chojnice', text: 'CHOJNICE I OKOLICE'},
//             {url: '/regiony/dolnyslask', text: 'GÓRY SOWIE'},
//         ].sort((a, b) => a.text.localeCompare(b.text)),
//     },
//     {
//         //url: '/kraje',
//         text: 'Kraje',
//         subLinks: [
//             {url: '/kraje/ukraina', text: 'UKRAINA'},
//             {url: '/kraje/wycieczkazagraniczna', text: 'NIEMCY'},
//         ],
//     },
//     {
//         url: '/filmy',
//         text: 'Filmy',
//     },
//     // {
//     //     url: 'https://turystykabezfiltrow.com/wycieczki/',
//     //     text: 'Sklep',
//     // },
//     {
//         url: '/wez-udzial',
//         text: 'WEŹ UDZIAŁ',
//     },
//     {
//         //url: '/o-nas',
//         text: 'O nas',
//         subLinks: [
//             {url: 'https://turystykabezfiltrow.com/wycieczki/wycieczka-1', text: 'BEZ FILTRÓW - czyli?'},
//             {
//                 url: 'https://www.instagram.com/carfortrip_/?fbclid=IwAR0AnzB3bveYLQbilGia_XFBPek4C9zSQop5rmu-Gd8MLlX5FpKx_fnkDTQ',
//                 text: 'Wycieczki do Gruzji'
//             },
//             {url: 'https://turystykabezfiltrow.com/wycieczki/wycieczka-2', text: 'Projekty'},
//             {url: 'https://turystykabezfiltrow.com/wycieczki/wycieczka-2', text: 'Wydawnictwa'},
//
//         ],
//     },
//     {
//         url: 'https://pisanieiprojekty.com/',
//         text: 'Firma P&P',
//         openInNewTab: true
//     },
//     {
//         //TODO: change url
//         url: 'https://patronite.pl/turystykabezfiltrow',
//         text: 'Wesprzyj nas!',
//         openInNewTab: true
//     },
// ];
//
//
// function ToggleMenu() {
//     const { theme } = useTheme();
//     const classes = useStyles(themes[theme]);
//     const [open, setOpen] = React.useState(false);
//     const [expanded, setExpanded] = React.useState(false);
//
//     const toggleDrawer = (open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }
//
//         setOpen(open);
//     };
//
//     const handleChange = (panel) => (event, isExpanded) => {
//         setExpanded(isExpanded ? panel : false);
//     };
//
//     const handleNavLinkClick = (event, hasSubLinks) => {
//         // Предотвращаем закрытие меню при клике на элементы навигации с subLinks
//         if (hasSubLinks) {
//             event.stopPropagation();
//         }
//     };
//
//     const handleMenuClick = (event) => {
//         // Предотвращаем закрытие меню при клике на само меню
//         event.stopPropagation();
//         event.preventDefault();
//     };
//
//
//     const list = () => (
//         <div
//             onClick={(event) => {
//                 handleMenuClick(event);
//                 toggleDrawer(false)(event);
//             }}
//             onKeyDown={toggleDrawer(false)}
//         >
//             <Box className={classes.headerBlock}>
//                 <a href={'/'}>
//                     <img src={Logo} alt="logo" className={classes.logo} />
//                 </a>
//                 <Box>
//                     <CloseIcon className={classes.closeIcon} onClick={toggleDrawer(false)} />
//                 </Box>
//             </Box>
//             <Box className={classes.boxView}>
//                 {navLinksData.map((item, index) => (
//                     <div key={index}>
//                         {item.subLinks ? (
//                             <Accordion
//                                 key={index}
//                                 expanded={expanded === `panel${index}`}
//                                 onChange={handleChange(`panel${index}`)}
//                             >
//                                 <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                                     <Link
//                                         to={item.url}
//                                         className={classes.link}
//                                         onClick={(event) => handleNavLinkClick(event, true)}
//                                     >
//                                         <Button className={classes.navButton}>
//                                             <Typography className={classes.navigationText}>
//                                                 {item.text}
//                                             </Typography>
//                                         </Button>
//                                     </Link>
//                                 </AccordionSummary>
//                                 <AccordionDetails
//                                     onClick={(event) => handleNavLinkClick(event, true)}
//                                 >
//                                     <Box>
//                                         {item.subLinks.map((subLink, subIndex) => (
//                                             <Link
//                                                 key={subIndex}
//                                                 to={subLink.url}
//                                                 className={classes.link}
//                                                 onClick={(event) => handleNavLinkClick(event, false)}
//                                             >
//                                                 <Button className={classes.navButton}>
//                                                     <Typography className={classes.navigationText}>
//                                                         {subLink.text}
//                                                     </Typography>
//                                                 </Button>
//                                             </Link>
//                                         ))}
//                                     </Box>
//                                 </AccordionDetails>
//                             </Accordion>
//                         ) : (
//                             <Link
//                                 to={item.url}
//                                 className={classes.link}
//                                 onClick={(event) => handleNavLinkClick(event, false)}
//                             >
//                                 <Button className={classes.navButton}>
//                                     <Typography className={classes.navigationText}>
//                                         {item.text}
//                                     </Typography>
//                                 </Button>
//                             </Link>
//                         )}
//                     </div>
//                 ))}
//             </Box>
//             <Box className={classes.buttonWrapper}>
//                 <Link to={'https://www.facebook.com/FundacjaNadRzeka/'} className={classes.link}>
//                     <Icon
//                         component={FaceBookLogo}
//                         className={classes.icon}
//                         src={FaceBookLogo}
//                     />
//                 </Link>
//                 <Link to={'https://www.linkedin.com/company/fundacja-krzewienia-kultury-i-turystyki-nad-rzek%C4%85/'}
//                       className={classes.link}>
//                     <Icon
//                         component={LinkedinLogo}
//                         className={classes.icon}
//                         src={LinkedinLogo}
//                     />
//                 </Link>
//                 <Link to={'https://www.instagram.com/fundacja.nad_rzeka?igshid=YmMyMTA2M2Y%3D'}
//                       className={classes.link}>
//                     <Icon
//                         component={InstagramLogo}
//                         className={classes.icon}
//                         src={InstagramLogo}
//                     />
//                 </Link>
//             </Box>
//         </div>
//     );
//
//     return (
//         <div>
//             <div onClick={(e) => e.stopPropagation()}>
//                 <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={toggleDrawer(true)}>
//                     <Icon component={ToggleMenuIcon} className={classes.hamburgerIcon} src={ToggleMenuIcon} />
//                 </IconButton>
//             </div>
//
//             <Drawer anchor="top" open={open} onClose={toggleDrawer(false)} classes={{ paper: classes.drawer }}>
//                 {list()}
//             </Drawer>
//         </div>
//     );
// }
//
// export default ToggleMenu;


import React from 'react';
import {
    IconButton,
    Drawer,
    Box,
    Icon,
    Typography,
    Button,
    AccordionSummary,
    Accordion,
    AccordionDetails
} from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import Logo from "../../../assets/Logo/LOGO.svg";
import {ReactComponent as ToggleMenuIcon} from "../../../assets/Icons/ToggleMenuIcon.svg";
import useStyles from "./styles";
import {Link} from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StyledButton from "../../UI/StyledButton";
import LinedButton from "../../UI/LinedButton";
import {ReactComponent as FaceBookLogo} from "../../../assets/SocialMediaLogo/fb.svg";
import {ReactComponent as InstagramLogo} from "../../../assets/SocialMediaLogo/inst.svg";
import {ReactComponent as LinkedinLogo} from "../../../assets/SocialMediaLogo/in.svg";
import {ReactComponent as TikTokLogo} from "../../../assets/SocialMediaLogo/tt.svg";
import {ReactComponent as FirstButtonIcon} from "../../../assets/Icons/contact-icon.svg";
import {ReactComponent as SecondButtonIcon} from "../../../assets/Icons/support-icon.svg";
import AdbisBadge from "../../UI/AdbisCreatedPlug";


const socialLinks = [
    {
        to: 'https://www.linkedin.com/company/weckwerth-turystyka-bez-filtr%C3%B3w/',
        icon: LinkedinLogo
    },
    {to: 'https://www.tiktok.com/@turystyka.bez.filtrow', icon: TikTokLogo},

    {to: 'https://www.facebook.com/turystykabezfiltrow', icon: FaceBookLogo},

    {to: 'https://www.instagram.com/turystykabezfiltrow/', icon: InstagramLogo},
];

const navLinksData = [
    {
        //url: '/bydgoszcz',
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
        //url: '/regiony',
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
        //url: '/kraje',
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
        //url: '/wydarzenia',
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
        //url: '/o-nas',
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

function NavigationLink({ link, closeMenuAfterClick }) {
    const { theme } = useTheme();
    const classes = useStyles(themes[theme]);
    // eslint-disable-next-line no-unused-vars
    const [open, setOpen] = React.useState(false);


    const renderSubLinks = (subLinks) => {
        const uniqueSubLinks = subLinks.reduce((unique, subLink) => {
            const isUnique = !unique.some((existingLink) => existingLink.text === subLink.text);
            return isUnique ? [...unique, subLink] : unique;
        }, []);


        return (
            <Accordion className={classes.accordionBox}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.accSummary}>
                    {link.subLinks && (
                        <Typography className={classes.navigationText}>{link.text}</Typography>
                    )}
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={classes.subLinks}>
                        {uniqueSubLinks.map((subLink, index) => (
                            <Box key={index}>
                                <Link to={subLink.url} className={classes.link} onClick={() => setOpen(false)} {...(navLinksData.openInNewTab && {
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                })}>
                                    <Button className={classes.navButton} onClick={closeMenuAfterClick}>
                                        <Typography className={classes.navigationText}>{subLink.text}</Typography>
                                    </Button>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>
        );
    };

    return (
        <div>
            {link.url ? (
                <Link to={link.url} className={classes.link} onClick={() => setOpen(false)} {...(navLinksData.openInNewTab && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                })}>
                    <Button className={classes.navButton} onClick={closeMenuAfterClick}>
                        <Typography className={classes.navigationText}>
                            {link.text}
                        </Typography>
                    </Button>
                </Link>
            ) : null}
            {link.subLinks && renderSubLinks(link.subLinks)}
        </div>
    );
}



function ToggleMenu() {
    const { theme } = useTheme();
    const classes = useStyles(themes[theme]);
    const [open, setOpen] = React.useState(false);

    const closeMenuAfterClick = () => {
        setOpen(false);
    }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    };

    const list = () => (
        <div className={classes.list}>
            <Box className={classes.headerBlock}>
                <a href={'/'}>
                    <img src={Logo} alt="logo" className={classes.logo} />
                </a>
                <Box>
                    <CloseIcon className={classes.closeIcon} onClick={toggleDrawer(false)} />
                </Box>
            </Box>
            <Box className={classes.boxView}>
                <Box className={classes.mainLinks}>
                    {navLinksData.map((navLink, index) => (
                        <Box key={index} style={{borderBottom: '1px solid', borderColor: `${themes[theme].borderColor}`}}>
                            <NavigationLink link={navLink} closeMenuAfterClick={closeMenuAfterClick} />
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box className={classes.firstButtonSection}>
                <StyledButton text="Wesprzyj nas" to="/wesprzyj-nas" width="100%"/>
            </Box>
            <Box className={classes.firstButtonSection}>
                <LinedButton text="SKONTAKTOWAĆ SIĘ Z DOWÓDCĄ" to="https://forms.gle/CG4xzZzapzC43mf76" width="100%" icon={FirstButtonIcon} borderBottom="none"/>
                <LinedButton text="ZAPROPONOWAĆ POMYSŁ" to="https://forms.gle/1VHjeKPrECwrDMtA7" width="100%" icon={SecondButtonIcon}/>
            </Box>
            <Box className={classes.socialLink}>
                {socialLinks.map((link, index) => (
                    <Link to={link.to} key={index} className={classes.socialLink}>
                        <Icon component={link.icon} className={classes.socialIcon}/>
                    </Link>
                ))}
            </Box>
            <AdbisBadge />
        </div>
    );

    return (
        <div>
            <IconButton
                edge="start"
                className={classes.menuButton}
                aria-label="menu"
                onClick={toggleDrawer(true)}
            >
                <Icon component={ToggleMenuIcon} className={classes.hamburgerIcon} src={ToggleMenuIcon} />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)} classes={{ paper: classes.drawer }}>
                {list()}
            </Drawer>
        </div>
    );
}

export default ToggleMenu;
