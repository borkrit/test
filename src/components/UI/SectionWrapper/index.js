// SectionWrapper.js
import React from "react";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useTheme} from '../../../theme/themeContext';
import {themes} from "../../../theme/themeContext/themes";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: ({sectionWrapperBackgroundColor}) => sectionWrapperBackgroundColor,
        color: ({textColor}) => textColor,
        padding: '100px 20px 0 20px',
        paddingTop: (props) => props.paddingTop ? props.paddingTop : '100px',
        paddingBottom: (props) => props.paddingBottom ? props.paddingBottom : '0',
        transition: "all 0.3s ease-out",
        [theme.breakpoints.down('sm')]: {
            padding: '60px 20px 0 20px'
        },
        [theme.breakpoints.up('lg')]: {
            padding: '100px 20px 0 20px'
        },
        [theme.breakpoints.up('xl')]: {
            padding: '100px 40px 0 40px'
        }
    },
}));

const SectionWrapper = ({children, id, paddingTop, paddingBottom}) => {
    const {theme} = useTheme();
    const classes = useStyles({...themes[theme], paddingTop, paddingBottom});

    return (
        <Box id={id} key={id} className={classes.root}>
            {children}
        </Box>
    );
};

export default SectionWrapper;



