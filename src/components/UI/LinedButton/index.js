import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import React from "react";
import {Box, Icon, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    defaultButton: {
        backgroundColor: 'transparent',
        borderTop: `1px solid`,
        borderRadius: '0',
        padding: '22px 0',
        borderColor: ({textColor}) => textColor,
        '& .MuiButton-label': {
            justifyContent: 'flex-start',
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            textAlign: 'left',
        },
        "& path": {
            transition: '300ms ease-in-out',
            fill: ({iconColorFill}) => iconColorFill,
        },
        '&:hover': {
            backgroundColor: 'transparent',
            borderColor: ({postsHoverTextColor}) => postsHoverTextColor,
            "& path": {
                transition: '300ms ease-in-out',
                fill: ({iconColorFillHover}) => iconColorFillHover,
            },
            '& $text': {
                color: ({postsHoverTextColor}) => postsHoverTextColor,
            },
        },
    },
    text: {
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        fontWeight: 700,
        color: ({textColor}) => textColor,
        textTransform: 'uppercase',
        transition: "all 0.3s ease-out",
    }
}));

const LinedButton = ({text, width, to, icon, borderBottom}) => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);


    return (
        <Link to={to} style={{textDecoration: 'none', color: 'inherit'}} target='_blank' rel='noopener noreferrer'>
            <Button className={classes.defaultButton} style={{width: width, borderBottom: borderBottom ? borderBottom : '1px solid'}}>
                <Box>
                    <Icon component={icon} className={classes.icon}/>
                </Box>
                <Box>
                    <Typography className={classes.text}>{text}</Typography>
                </Box>
            </Button>
        </Link>
    );
};

export default LinedButton;