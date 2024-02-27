import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";

const useStyles = makeStyles((theme) => ({
    defaultButton: {
        color: ({defaultButtonTextColor}) => defaultButtonTextColor,
        backgroundColor: ({defaultButtonBackgroundColor}) => defaultButtonBackgroundColor,
        border: `1px solid`,
        borderColor: ({defaultButtonBorderColor}) => defaultButtonBorderColor,
        borderRadius: '6px',
        padding: '10px',
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        fontWeight: '400',
        textTransform: 'none',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            backgroundColor: ({defaultHoverButtonBackgroundColor}) => defaultHoverButtonBackgroundColor,
            color: ({defaultHoverButtonTextColor}) => defaultHoverButtonTextColor,
            borderColor: ({defaultHoverButtonBorderColor}) => defaultHoverButtonBorderColor,
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px 10px',
            fontSize: '14px',
        },
    },
    whiteButton: {
        color: ({darkButtonTextColor}) => darkButtonTextColor,
        backgroundColor: ({darkButtonBackgroundColor}) => darkButtonBackgroundColor,
        border: `1px solid`,
        borderColor: ({darkButtonBorderColor}) => darkButtonBorderColor,
        borderRadius: '6px',
        padding: '10px',
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        fontWeight: '400',
        textTransform: 'none',

        '&:hover': {
            backgroundColor: ({darkHoverButtonBackgroundColor}) => darkHoverButtonBackgroundColor,
            color: ({darkHoverButtonTextColor}) => darkHoverButtonTextColor,
            borderColor: ({darkHoverButtonBorderColor}) => darkHoverButtonBorderColor,
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px 10px',
            fontSize: '14px',
        },
    },
}));

const StyledButton = ({ variant, text, width, to, clicked }) => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);
    const navigate = useNavigate();

    const getButtonStyle = () => {
        switch (variant) {
            case 'outlined':
                return classes.outlinedButton;
            case 'blackOutlined':
                return classes.blackOutlinedButton;
            case 'white':
                return classes.whiteButton;
            default:
                return classes.defaultButton;
        }
    };

    const handleClick = () => {
        navigate(to);
    };

    return (
        <Button
            className={getButtonStyle()}
            variant={variant}
            style={{ width: width }}
            onClick={clicked ? clicked : handleClick}
        >
            {text}
        </Button>
    );
};

export default StyledButton;