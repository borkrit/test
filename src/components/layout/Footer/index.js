import React from "react";
import Typography from "@material-ui/core/Typography";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import {Accordion, AccordionDetails, AccordionSummary, Box, Button, Icon} from "@material-ui/core";
import {Link} from "react-router-dom";
import {ReactComponent as FaceBookLogo} from "../../../assets/SocialMediaLogo/fb.svg";
import {ReactComponent as InstagramLogo} from "../../../assets/SocialMediaLogo/inst.svg";
import {ReactComponent as LinkedinLogo} from "../../../assets/SocialMediaLogo/in.svg";
import {ReactComponent as TikTokLogo} from "../../../assets/SocialMediaLogo/tt.svg";
import {ReactComponent as FirstButtonIcon} from "../../../assets/Icons/contact-icon.svg";
import {ReactComponent as SecondButtonIcon} from "../../../assets/Icons/support-icon.svg";


import useStyles from "./styles";
import StyledButton from "../../UI/StyledButton";
import {
    navLinksDataBydgoszcz,
    navLinksDataRegiony,
    navLinksDataKraje,
    navLinksDataWydarzenia,
    navLinksDataONas,
    navLinksDataFilmyAndOther,
    navLinksData,
} from "./data";
import LinedButton from "../../UI/LinedButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AdbisBadge from "../../UI/AdbisCreatedPlug";

function NavigationLink({link}) {
    const {theme} = useTheme();
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
                <AccordionSummary expandIcon={<ExpandMoreIcon/>} className={classes.accSummary}>
                    {link.subLinks && (
                        <Typography className={classes.navigationText}>{link.text}</Typography>
                    )}
                </AccordionSummary>
                <AccordionDetails>
                    <Box className={classes.subLinks}>
                        {uniqueSubLinks.map((subLink, index) => (
                            <Box key={index}>
                                <Link to={subLink.url} className={classes.link}
                                      onClick={() => setOpen(false)} {...(navLinksData.openInNewTab && {
                                    target: '_blank',
                                    rel: 'noopener noreferrer',
                                })}>
                                    <Button className={classes.navButton}>
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
                <Link to={link.url} className={classes.link}
                      onClick={() => setOpen(false)} {...(navLinksData.openInNewTab && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                })}>
                    <Button className={classes.navButton}>
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


// eslint-disable-next-line no-unused-vars
const LinkText = ({text, to, subTitle}) => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);

    return (
        <Link to={to} className={classes.link}>
            <Typography className={subTitle ? classes.titleLinkSection : classes.linkText}>{text}</Typography>
        </Link>
    );
}

const socialLinks = [
    {
        to: 'https://www.linkedin.com/company/weckwerth-turystyka-bez-filtr%C3%B3w/',
        icon: LinkedinLogo
    },
    {to: 'https://www.tiktok.com/@turystyka.bez.filtrow', icon: TikTokLogo},

    {to: 'https://www.facebook.com/turystykabezfiltrow', icon: FaceBookLogo},

    {to: 'https://www.instagram.com/turystykabezfiltrow/', icon: InstagramLogo},
];


function Footer() {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);

    return (
        <>
            <Box className={classes.footerWrapper}>
                <Box className={classes.mainSection}>
                    <Box className={classes.firstButtonSection}>
                        <StyledButton text="Wesprzyj nas" to="/wesprzyj-nas" width="100%"/>
                    </Box>
                    <Box className={classes.firstButtonSection}>
                        <LinedButton text="SKONTAKTOWAĆ SIĘ Z DOWÓDCĄ" to="https://forms.gle/CG4xzZzapzC43mf76"
                                     width="100%"
                                     icon={FirstButtonIcon} borderBottom="none"/>
                        <LinedButton text="ZAPROPONOWAĆ POMYSŁ" to="https://forms.gle/1VHjeKPrECwrDMtA7" width="100%"
                                     icon={SecondButtonIcon}/>
                    </Box>
                    <Box className={classes.buttonWrapper}>
                        {socialLinks.map((link, index) => (
                            <Link to={link.to} key={index} className={classes.socialLink}>
                                <Icon component={link.icon} className={classes.socialIcon}/>
                            </Link>
                        ))}
                    </Box>
                </Box>
                <div className={classes.root}>
                    <Box className={classes.navWrapper}>
                        {navLinksDataBydgoszcz.map((link, index) => (
                            <Box key={index}>
                                <LinkText text={link.title} to={link.url} className={classes.titleLinkSection}/>
                                {link.subLinks && link.subLinks.map((subLink, index) => (
                                    <LinkText key={index} text={subLink.subTitle} to={subLink.url} subTitle/>
                                ))}
                            </Box>
                        ))}
                    </Box>
                    <Box className={classes.navWrapper}>
                        {navLinksDataRegiony.map((link, index) => (
                            <Box key={index}>
                                <LinkText text={link.title} to={link.url} className={classes.titleLinkSection}/>
                                {link.subLinks && link.subLinks.map((subLink, index) => (
                                    <LinkText key={index} text={subLink.subTitle} to={subLink.url} subTitle/>
                                ))}
                            </Box>
                        ))}
                    </Box>
                    <Box className={classes.navWrapper}>
                        {navLinksDataKraje.map((link, index) => (
                            <Box key={index}>
                                <LinkText text={link.title} to={link.url} className={classes.titleLinkSection}/>
                                {link.subLinks && link.subLinks.map((subLink, index) => (
                                    <LinkText key={index} text={subLink.subTitle} to={subLink.url} subTitle/>
                                ))}
                            </Box>
                        ))}
                    </Box>
                    <Box className={classes.navWrapper}>
                        {navLinksDataWydarzenia.map((link, index) => (
                            <Box key={index}>
                                <LinkText text={link.title} to={link.url} className={classes.titleLinkSection}/>
                                {link.subLinks && link.subLinks.map((subLink, index) => (
                                    <LinkText key={index} text={subLink.subTitle} to={subLink.url} subTitle/>
                                ))}
                            </Box>
                        ))}
                    </Box>
                    <Box className={classes.navWrapper}>
                        {navLinksDataONas.map((link, index) => (
                            <Box key={index}>
                                <LinkText text={link.title} to={link.url} className={classes.titleLinkSection}/>
                                {link.subLinks && link.subLinks.map((subLink, index) => (
                                    <LinkText key={index} text={subLink.subTitle} to={subLink.url} subTitle/>
                                ))}
                            </Box>
                        ))}
                    </Box>
                    <Box className={classes.navWrapper}>
                        {navLinksDataFilmyAndOther.map((link, index) => (
                            <Box key={index}>
                                <LinkText text={link.title} to={link.url} className={classes.titleLinkSection}/>
                            </Box>
                        ))}
                    </Box>
                </div>
                <Box className={classes.mobileRoot}>
                    <Box className={classes.boxView}>
                        <Box className={classes.mainLinks}>
                            {navLinksData.map((navLink, index) => (
                                <Box key={index}
                                     style={{borderBottom: '1px solid', borderColor: `${themes[theme].borderColor}`}}>
                                    <NavigationLink link={navLink}/>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box className={classes.firstButtonSection}>
                        <StyledButton text="Wesprzyj nas" to="/wesprzyj-nas" width="100%"/>
                    </Box>
                    <Box className={classes.firstButtonSection}>
                        <LinedButton text="SKONTAKTOWAĆ SIĘ Z DOWÓDCĄ" to="https://forms.gle/CG4xzZzapzC43mf76"
                                     width="100%"
                                     icon={FirstButtonIcon} borderBottom="none"/>
                        <LinedButton text="ZAPROPONOWAĆ POMYSŁ" to="https://forms.gle/1VHjeKPrECwrDMtA7" width="100%"
                                     icon={SecondButtonIcon}/>
                    </Box>
                    <Box className={classes.socialLink}>
                        {socialLinks.map((link, index) => (
                            <Link to={link.to} key={index} className={classes.socialLink}>
                                <Icon component={link.icon} className={classes.socialIcon}/>
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Box>
            <AdbisBadge/>
        </>
    );
}

export default Footer;

