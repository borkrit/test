import React, {useEffect} from 'react';
import {
    Dialog,
    DialogContent, Icon,
    makeStyles,
    Button,
    Slide, IconButton,
} from '@material-ui/core';
import {ReactComponent as ArrowIcon} from "../../../assets/Icons/ArrowIcon.svg";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
    dialog: {
        backgroundColor: 'transparent',
        overflow: 'hidden',
        '& .MuiDialog-paper': {
            backgroundColor: 'transparent',
            margin: '0',
        },
        '& .MuiPaper-elevation24': {
            boxShadow: 'none',
            width: '100vw !important',
            maxWidth: '100vw !important',
            [theme.breakpoints.down('sm')]: {},
        },
        '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
        }
    },
    dialogContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        backgroundColor: 'transparent',
        height: '100%',
        overflow: 'hidden',
        '& figure': {
            margin: '0',
            width: '100%',
            height: '100%',
            marginBlockStart: '0',
            marginBlockEnd: '0',
            marginInlineStart: '0',
            marginInlineEnd: '0',
        }
    },
    dialogImage: {
        width: '100vw',
        height: '100vh',
        objectFit: 'contain',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
        }
    },
    arrowButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [theme.breakpoints.down('sm')]: {
            position: 'fixed',
            bottom: '20px',
            top: 'unset',
            right: '0',
            transform: 'translateY(0%)',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
        },
    },
    closeButton: {
        position: 'fixed',
        top: '15px',
        right: '10px',
        padding: '0',
        color: ({galleryButtonBorderColor}) => galleryButtonBorderColor,
        '&:hover': {
            color: ({galleryHoverButtonBorderColor}) => galleryHoverButtonBorderColor,
        },
    },
    arrowButton: {
        backgroundColor: ({galleryButtonBackgroundColor}) => galleryButtonBackgroundColor,
        cursor: 'pointer',
        borderRadius: '0',
        minWidth: '40px',
        padding: '0',
        border: '1px solid',
        borderColor: ({galleryButtonBorderColor}) => galleryButtonBorderColor,
        display: 'flex',
        width: '40px',
        height: '40px',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: ({galleryButtonBackgroundColor}) => galleryButtonBackgroundColor,
            borderColor: ({galleryHoverButtonBorderColor}) => galleryHoverButtonBorderColor,
            '& path': {
                stroke: ({galleryHoverButtonIconFill}) => galleryHoverButtonIconFill,
            },
        },
    },
    arrowIconLeft: {
        '& path': {
            stroke: ({galleryButtonIconFill}) => galleryButtonIconFill,
        }
    },
    arrowIconRight: {
        transform: 'rotate(180deg)',
        '& path': {
            stroke: ({galleryButtonIconFill}) => galleryButtonIconFill,
        }
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const FullscreenModal = ({open, onClose, imageSrc, imgTag, index, onNext, onPrev}) => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);

    // Добавим состояния для отслеживания координат касания
    const [touchStartX, setTouchStartX] = React.useState(null);
    const [touchEndX, setTouchEndX] = React.useState(null);

    const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event) => {
        setTouchEndX(event.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        // Определяем направление свайпа
        if (touchStartX - touchEndX > 50) {
            onNext(); // Свайп влево
        } else if (touchEndX - touchStartX > 50) {
            onPrev(); // Свайп вправо
        }

        // Сбросим значения координат
        setTouchStartX(null);
        setTouchEndX(null);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                onPrev();
            } else if (event.key === 'ArrowRight') {
                onNext();
            }
        };

        if (open) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [open, onPrev, onNext]);

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={onClose}
            scroll={'body'}
            fullWidth
            maxWidth="lg"
            className={classes.dialog}
        >
            <IconButton
                aria-label="close"
                className={classes.closeButton}
                onClick={onClose}
            >
                <CloseIcon/>
            </IconButton>
            <DialogContent
                className={classes.dialogContent}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    key={index}
                    dangerouslySetInnerHTML={{__html: imgTag}}
                    className={classes.dialogImage}
                />
            </DialogContent>
            <div className={classes.arrowButtons}>
                <Button className={classes.arrowButton} onClick={onPrev}>
                    <Icon
                        component={ArrowIcon}
                        className={classes.arrowIconLeft}
                        src={ArrowIcon}
                        alt="ArrowIcon"
                    />
                </Button>
                <Button className={classes.arrowButton} onClick={onNext}>
                    <Icon
                        component={ArrowIcon}
                        className={classes.arrowIconRight}
                        src={ArrowIcon}
                        alt="ArrowIcon"
                    />
                </Button>
            </div>
        </Dialog>
    );
};

export default FullscreenModal;


