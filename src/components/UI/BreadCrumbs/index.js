import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {Box, Icon, Link} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import {ReactComponent as ArrowRightForLink} from "../../../assets/Icons/ArrowRightForLink.svg";


const useStyles = makeStyles((theme) => ({
    breadcrumb: {
        margin: '0 0 20px 0',
    },
    useLocationLink: {
        fontSize: '16px',
        fontWeight: 400,
        color: ({useLocationLinkColor}) => useLocationLinkColor,
        //textTransform: 'none',
        opacity: 0.7,
        textDecoration: 'none',
        fontFamily: 'Inter-Regular',
        textTransform: 'capitalize',
        '&:hover': {
            color: ({useLocationLinkColorHover}) => useLocationLinkColorHover,
            textDecoration: 'none',
        }
    },
    useLocationLinkNow: {
        fontSize: '16px',
        fontWeight: 500,
        color: ({useLocationLinkColorNow}) => useLocationLinkColorNow,
        textTransform: 'capitalize',
        textDecoration: 'none',
        fontFamily: 'Inter-Bold',
        '&:hover': {
            textDecoration: 'none',
        }
    },
    arrowBlack: {
        height: '10px',
        width: 'auto',
        margin: '0 6px',
        "& path": {
            transition: '0.3ms ease-in-out',
            fill: ({iconColorFill}) => iconColorFill,
        },
    },
}));

const Breadcrumbs = () => {
    const location = useLocation();
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);

    const createBreadcrumbs = () => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const breadcrumbs = [];
        let currentPath = '';

        breadcrumbs.push(
            <span key="home">
                <Link component={RouterLink} to="/" className={classes.useLocationLink}>
                    Główny
                </Link>
            </span>
        );

        pathSegments.forEach((segment, index) => {
            currentPath += `/${segment}`;
            const isLastSegment = index === pathSegments.length - 1;

            breadcrumbs.push(
                <span key={currentPath}>
                    {' '}
                    <Icon
                        component={ArrowRightForLink}
                        className={classes.arrowBlack}
                        src={ArrowRightForLink}
                        alt="ArrowRightForLink"
                    />
                    {' '}
                    <Link
                        className={isLastSegment ? classes.useLocationLinkNow : classes.useLocationLink}
                        component={RouterLink}
                        to={currentPath}
                        color="inherit"
                    >
                        {segment}
                    </Link>
                </span>
            );
        });

        return breadcrumbs;
    };

    return (
        <Box className={classes.breadcrumb}>
            {createBreadcrumbs()}
        </Box>
    );
};

export default Breadcrumbs;
