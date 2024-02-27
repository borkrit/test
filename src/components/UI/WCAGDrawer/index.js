import React, {useState, useRef, useEffect} from 'react';
import {IconButton, Popover, makeStyles, createStyles, Icon, Button, Box} from '@material-ui/core';
import {ReactComponent as WCAGIcon} from "../../../assets/Icons/wcag-logo.svg";
import FontSizeButtons from "../FontSizeChange";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";

const useStyles = makeStyles((theme) =>
    createStyles({
        wcagIconButton: {
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            //marginRight: '20px',
            "& path": {
                transition: '300ms ease-in-out',
                fill: ({iconColorFill}) => iconColorFill,
            },
            '&:hover': {
                backgroundColor: 'transparent',
                "& path": {
                    transition: '300ms ease-in-out',
                    fill: ({iconColorFillHover}) => iconColorFillHover,
                },
            },
        },
        wcagButton: {
            padding: 0,
            fontFamily: 'Inter-Regular',
            fontSize: '20px',
            fontWeight: 400,
            color: ({postsTextColor}) => postsTextColor,
            transition: "all 0.3s ease-out",
            border: 'none',
            textTransform: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: 'transparent',
                color: ({postsHoverTextColor}) => postsHoverTextColor,
            }
        },
        icon: {

        },
        paper: {
            padding: '20px',
            marginTop: '40px',
            boxShadow: 'none',
            borderRadius: '0',
            backgroundColor: ({backgroundColor}) => backgroundColor,
        },
        boxWrapper: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
        }
    })
);

const SettingsDrawer = () => {
    const {theme, toggleTheme} = useTheme();
    const classes = useStyles(themes[theme]);
    const [anchorEl, setAnchorEl] = useState(null);
    const buttonRef = useRef(null);

    const handlePopoverOpen = () => {
        setAnchorEl(buttonRef.current);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleButtonClick = () => {
        if (open) {
            handlePopoverClose();
        } else {
            handlePopoverOpen();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                handlePopoverClose();
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, [buttonRef]);

    return (
        <>
            <IconButton
                ref={buttonRef}
                onClick={handleButtonClick}
                className={classes.wcagIconButton}
            >
                <Icon
                    component={WCAGIcon}
                    className={classes.icon}
                    src={WCAGIcon}
                />
            </IconButton>
            <Popover
                id="mouse-over-popover"
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
            >
                <Box className={classes.boxWrapper}>
                    <Box>
                        <FontSizeButtons/>
                    </Box>
                    <Box>
                        <Button onClick={toggleTheme} className={classes.wcagButton}>
                            Wersja kontrastowa
                        </Button>
                    </Box>
                    <Box>
                        <Button className={classes.wcagButton} as="a" href="/declaracja-dostepnosci">
                            Deklaracja dostępności cyfrowej
                        </Button>
                    </Box>
                </Box>
            </Popover>
        </>
    );
};

export default SettingsDrawer;



