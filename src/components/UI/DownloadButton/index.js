import React from 'react';
import {ReactComponent as DownloadIcon} from '../../../assets/Icons/download-icon.svg';
import {Box, Icon, IconButton} from "@material-ui/core";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({

    downloadButton: {
        padding: '20px',
        border: '1px solid',
        transition: 'all 0.3s ease-in-out',
        borderRadius: '0',
        width: '355px',
        height: '100%',
        borderColor: ({downloadButtonBorderColor}) => downloadButtonBorderColor,
        display: 'flex',
        '& .MuiIconButton-label': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '20px',
        },
        '&:hover': {
            backgroundColor: 'transparent',
            borderColor: ({downloadButtonBorderColorHover}) => downloadButtonBorderColorHover,
            transition: 'all 0.3s ease-in-out',
            '& path': {
                transition: 'all 0.3s ease-in-out',
                fill: ({iconColorFillHover}) => iconColorFillHover,
            },
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '10px',
        },
    },
    icon: {
        '& path': {
            transition: 'all 0.3s ease-in-out',
            fill: ({iconColorFill}) => iconColorFill,
        },
    },
    iconWithText: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },
    text: {
        color: ({textColor}) => textColor,
        fontFamily: 'Helvetica-Regular',
        fontSize: '20px',
        textTransform: 'capitalize',
        fontWeight: '400',
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
        },
    },
}));

const DownloadButton = ({pdfUrl}) => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);


    return (
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <IconButton className={classes.downloadButton}>
                <Typography variant="h6" className={classes.text}>
                    {pdfUrl.split('/').pop()}
                </Typography>
                <Box className={classes.iconWithText}>
                    <Icon
                        component={DownloadIcon}
                        className={classes.icon}
                        src={DownloadIcon}
                    />
                    <Typography variant="h6" className={classes.text}>
                        Pobierz
                    </Typography>
                </Box>
            </IconButton>
        </a>
    );
};

export default DownloadButton;

