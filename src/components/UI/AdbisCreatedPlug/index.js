import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useTheme} from '../../../theme/themeContext';
import {Box} from "@material-ui/core";
import AdbisLogo from '../../../assets/Logo/adbis-promouted.svg';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ({backgroundColor}) => backgroundColor,
        padding: '20px 0',
    },
}));

const AdbisBadge = () => {
    const {theme} = useTheme();
    const classes = useStyles({theme});

    return (
        <Box className={classes.section}>
            <Link to="https://adbis.pl" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <img src={AdbisLogo} alt="Adbis Created"/>
            </Link>
        </Box>
    );
};

export default AdbisBadge;