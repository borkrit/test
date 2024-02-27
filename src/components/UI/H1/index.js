import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {useTheme} from '../../../theme/themeContext';

const useStyles = makeStyles((theme) => ({
    h1: {
        color: ({theme}) => theme.textColor,
        fontSize: '40px',
        fontWeight: '500',
        fontFamily: 'Inter-Regular',
        marginBottom: '30px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
        }
    },
}));

const H1 = ({text}) => {
    const {theme} = useTheme();
    const classes = useStyles({theme});

    return (
        <Typography variant="h1" className={classes.h1}>
            {text}
        </Typography>
    );
};

export default H1;
