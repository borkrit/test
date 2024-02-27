import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {useTheme} from '../../../theme/themeContext';
import {themes} from "../../../theme/themeContext/themes";

const useStyles = makeStyles((theme) => ({
    h4: {
        color: ({postsTextColor}) => postsTextColor,
        transition: "all 0.5s ease-out",
        fontSize: '20px',
        fontWeight: '500',
        fontFamily: 'Inter-Regular',
        marginBottom: '12px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            marginBottom: '10px',

        }
    },
}));

const H4 = ({ children }) => {
    const { theme } = useTheme();
    const classes = useStyles(themes[theme]);


    return (
        <Typography variant="h4" className={classes.h4} id="myElementId" dangerouslySetInnerHTML={{__html: children}}/>
    );
};

export default H4;