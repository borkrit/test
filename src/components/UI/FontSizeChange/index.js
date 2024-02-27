import React from 'react';
import {Button, makeStyles, createStyles} from '@material-ui/core';
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import {useFontSize} from "./FontSizeContext";

const useStyles = makeStyles((theme) =>
    createStyles({
        defaultFontSize: {
            fontSize: theme.typography.fontSize,
        },
        increasedFontSize: {
            fontSize: theme.typography.fontSize + 2,
        },
        decreasedFontSize: {
            fontSize: theme.typography.fontSize - 2,
        },
        button: {
            fontFamily: 'Inter-Regular',
            fontSize: '20px',
            fontWeight: 400,
            transition: "all 0.3s ease-out",
            color: ({postsTextColor}) => postsTextColor,
            padding: '0',
            margin: '0',
            minWidth: '0',
            backgroundColor: 'transparent',
            borderRadius: '0',
            '&:hover': {
                transition: "all 0.3s ease-out",
                backgroundColor: 'transparent',
                color: ({postsHoverTextColor}) => postsHoverTextColor,
            },
            '& .MuiButton-root:hover': {
                backgroundColor: 'transparent',
            }
        },
        buttonWrapper: {
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
        }
    })
);

const FontSizeButtons = () => {
    const { theme } = useTheme();
    const classes = useStyles(themes[theme]);
    const { aPlusClicked, updateFontSize, resetFontSize } = useFontSize();

    const handleIncreaseFontSize = () => {
        updateFontSize(aPlusClicked ? 2 : 4);
    };

    const handleDefaultFontSize = () => {
        resetFontSize();
    };

    return (
        <div className={classes.buttonWrapper}>
            <Button onClick={handleDefaultFontSize} className={classes.button}>
                A
            </Button>
            <Button onClick={handleIncreaseFontSize} className={classes.button}>
                A+
            </Button>
            <Button onClick={handleIncreaseFontSize} className={classes.button}>
                A++
            </Button>
        </div>
    );
};

export default FontSizeButtons;

