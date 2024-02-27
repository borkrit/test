import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";

const useStyles = makeStyles((theme) => ({
    line: {
        width: '100%',
        backgroundColor: ({lineBackgroundColor}) => lineBackgroundColor,
        marginBottom: '20px',
        height: '1px',
    },
}));

const UnderLine = () => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);

    return (
        <div className={classes.line}/>
    );
};

export default UnderLine;