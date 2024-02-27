import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import {Box, Icon, IconButton} from "@material-ui/core";
import FontSizeButtons from "../FontSizeChange";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import {ReactComponent as WCAGIcon} from "../../../assets/Icons/wcag-logo.svg";

const useStyles = makeStyles((theme) => ({
    floatingButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: ({floatingButtonBackgroundColor}) => floatingButtonBackgroundColor,
            zIndex: 100,
            borderRadius: '6px',
            width: '50px !important',
            height: '50px !important',
            padding: 0,
            border: '1px solid',
            borderColor: ({floatingButtonBorderColor}) => floatingButtonBorderColor,
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        margin: '0 20px 70px 0',
    },
    paper: {
        backgroundColor: ({backgroundColor}) => backgroundColor,
        borderRadius: '0px',
        border: '1px solid',
        borderColor: ({textColor}) => textColor,
        outline: 'none !important',
        boxShadow: 'none',
        padding: '20px 17px',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
    },
    iconButton: {
        width: '24px !important',
        height: '24px !important',
        color: ({iconColorFill}) => iconColorFill,
        '& path': {
            fill: ({iconColorFill}) => iconColorFill,
        },
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    boxWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
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
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
    },

}));

const FloatingButton = () => {
    const {theme, toggleTheme} = useTheme();
    const classes = useStyles(themes[theme]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton
                onClick={handleOpen}
                className={classes.floatingButton}
            >
                <Icon
                    component={WCAGIcon}
                    className={classes.iconButton}
                    src={WCAGIcon}
                />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <button className={classes.floatingButton} onClick={handleClose}>
                        <CloseIcon className={classes.iconButton}/>
                    </button>
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
                </div>
            </Modal>
        </div>
    );
};

export default FloatingButton;