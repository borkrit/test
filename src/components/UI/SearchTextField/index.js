import React from 'react';
import {
    Box,
    TextField,
    Button,
    IconButton,
    InputAdornment,
    makeStyles, Icon,
} from '@material-ui/core';
import {ReactComponent as SearchIcon} from "../../../assets/Icons/search.svg";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import {ReactComponent as ClearIcon} from "../../../assets/Icons/Close.svg";


const useStyles = makeStyles((theme) => ({
    searchBox: {
        display: 'flex',
        alignItems: 'center',
        width: '85%',
    },
    input: {
        flex: 1,
        '& .MuiOutlinedInput-root': {
            borderRadius: '6px',
            backgroundColor: ({backgroundColor}) => backgroundColor,
            '& fieldset': {
                borderColor: ({inputBorderColor}) => inputBorderColor,
            },
            '&:hover fieldset': {
                borderColor: ({inputBorderColor}) => inputBorderColor,
            },
            '&.Mui-focused fieldset': {
                borderColor: ({inputBorderColor}) => inputBorderColor,
            },
            '& input.MuiInputBase-input': {
                color: ({textColor}) => textColor,
                fontSize: '16px',
                fontFamily: 'Inter-Regular',
            },
            '& .MuiInputAdornment-positionStart': {
                marginRight: '24px',
            }
        }
    },
    clearButton: {
        maxHeight: '24px',
        maxWidth: '24px',
        marginRight: '20px',
        backgroundColor: 'transparent',
        padding: '0',
        borderRadius: '0',
        "& path": {
            transition: '300ms ease-in-out',
            stroke: ({iconColorFill}) => iconColorFill,
        },
        '&:hover': {
            backgroundColor: 'transparent',
            "& path": {
                transition: '300ms ease-in-out',
                stroke: ({ iconColorFillHover }) => iconColorFillHover,
            },
        },
    },
    searchIconDefault: {
        "& path": {
            transition: '300ms ease-in-out',
            stroke: ({iconColorFill}) => iconColorFill,
        },
    },
    searchButton: {
        backgroundColor: 'transparent',
        borderRadius: '0',
        padding: '0',
        textTransform: 'Uppercase',
        fontSize: '16px',
        fontFamily: 'Inter-Bold',
        border: 'none',
        fontWeight: '500',
        boxShadow: 'none',
        transition: '300ms ease-in-out',
        color: ({textColor}) => textColor,
        "&:hover": {
            transition: '300ms ease-in-out',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            border: 'none',
            color: ({iconColorFillHover}) => iconColorFillHover,
        }
    }
}));

const SearchField = ({searchKeyword, setSearchKeyword, handleSearch}) => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);

    const handleClear = () => {
        setSearchKeyword('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Box mb={3} className={classes.searchBox}>
            <TextField
                className={classes.input}
                variant="outlined"
                fullWidth
                value={searchKeyword}
                onKeyDown={handleKeyDown}
                onChange={(e) => setSearchKeyword(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" className={classes.searchIconDefault}>
                            <Icon
                                component={SearchIcon}
                                className={classes.icon}
                                src={SearchIcon}
                            />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end" className={classes.clearIconBox}>
                            <Box>
                                {searchKeyword && (
                                    <IconButton
                                        className={classes.clearButton}
                                        onClick={handleClear}
                                    >
                                        <Icon
                                        component={ClearIcon}
                                        className={classes.icon}
                                        src={ClearIcon}
                                    />
                                    </IconButton>
                                )}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSearch}
                                    className={classes.searchButton}
                                >
                                    Wyszukiwarka
                                </Button>
                            </Box>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

export default SearchField;
