import React, { useState } from 'react';
import { Icon, IconButton, makeStyles, Tooltip, useMediaQuery } from '@material-ui/core';
import { ReactComponent as ShareIcon } from "../../../assets/Icons/Share.svg";

const useStyles = makeStyles((theme) => ({
    icon: {
        '& .MuiIconButton-root': {
            padding: '0',
            backgroundColor: 'transparent',
            '&:hover': {
                backgroundColor: 'transparent',
            }
        }
    },
}));

const ShareButton = ({ url }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)'); // Установите медиа-запрос в соответствии с вашими требованиями

    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url).then(() => setCopied(true));
    };

    const handleShare = async () => {
        try {
            await navigator.share({ title: 'Nagłówek', text: 'Opis', url });
            console.log('Shared successfully.');
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    const handleButtonClick = () => {
        if (isMobile && navigator.share) {
            handleShare();
        } else {
            handleCopyLink();
        }
    };

    return (
        <Tooltip title={isMobile ? 'Udział' : copied ? 'Skopiowano!' : 'Skopiuj link'}>
            <IconButton color="inherit" onClick={handleButtonClick} className={classes.icon}>
                <Icon
                    component={ShareIcon}
                    src={ShareIcon}
                />
            </IconButton>
        </Tooltip>
    );
};

export default ShareButton;


