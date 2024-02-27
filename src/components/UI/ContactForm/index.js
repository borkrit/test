import React, {useState} from 'react';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import {Box, TextField, Checkbox, FormControlLabel, Icon} from '@material-ui/core';
import './ContactForm.css';
import StyledButton from '../StyledButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import SectionWrapper from "../SectionWrapper";
import H1 from "../H1";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";
import {Link} from "react-router-dom";
import {ReactComponent as FaceBookLogo} from "../../../assets/SocialMediaLogo/fb.svg";
import {ReactComponent as InstagramLogo} from "../../../assets/SocialMediaLogo/inst.svg";
import {ReactComponent as LinkedinLogo} from "../../../assets/SocialMediaLogo/in.svg";
import {ReactComponent as TikTokLogo} from "../../../assets/SocialMediaLogo/tt.svg";


const useStyles = makeStyles((theme) => ({
    checkBoxDescription: {
        fontFamily: 'Inter-Regular',
        fontSize: '16px',
        color: ({textColor}) => textColor,
        display: 'inline-block',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
        },
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        marginBottom: '20px',
    },
    checkBox: {},
    error: {
        color: '#f44336',
        margin: '0 14px 0 14px',
        fontSize: '0.75rem',
    },
    formControlLabel: {
        alignItems: 'flex-start',
        marginRight: '0',
    },
    docLinktext: {
        color: ({textColor}) => textColor,
        textDecoration: 'underline',
        '&:hover': {
            color: ({postsHoverTextColor}) => postsHoverTextColor,
        },
    },
    formWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '40px',
    },
    formSection: {
        width: '40%',
        '& input.MuiInputBase-input': {
          color: ({contactFormInputTextColor}) => contactFormInputTextColor,
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: ({defaultBorderColor}) => defaultBorderColor,
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: ({hoverBorderColor}) => hoverBorderColor,
        },
        '& .MuiFormLabel-root': {
            color: ({contactFormInputTextColor}) => contactFormInputTextColor,
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: ({contactFormInputTextColorHover}) => contactFormInputTextColorHover,
        },
        '& input:-webkit-autofill input:-webkit-autofill:hover input:-webkit-autofill:focus input:-webkit-autofill:active': {
            '-webkit-box-shadow': '0 0 0 30px red inset !important',
        },
        '& input:-webkit-autofill': {
            '-webkit-text-fill-color': ({contactFormInputTextColor}) => contactFormInputTextColor,
            '-webkit-box-shadow': ({sectionWrapperBackgroundColor}) => `0 0 0 30px ${sectionWrapperBackgroundColor} inset`,
        },
        '& .MuiIconButton-label': {
            color: ({defaultBorderColor}) => defaultBorderColor,
            '&:hover': {
                backgroundColor: 'transparent',
                color: ({hoverBorderColor}) => hoverBorderColor,
            },
            '&:focus': {
                backgroundColor: 'transparent',
                color: ({hoverBorderColor}) => hoverBorderColor,
            },
            '&:active': {
                backgroundColor: 'transparent',
                color: ({hoverBorderColor}) => hoverBorderColor,
            },
            '&:checked': {
                backgroundColor: 'transparent',
                color: ({hoverBorderColor}) => hoverBorderColor,
            },
            '&:selected': {
                backgroundColor: 'transparent',
                color: ({hoverBorderColor}) => hoverBorderColor,
            }
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    subTitleSection: {
        textAlign: 'center',
        marginBottom: '32px',
        fontFamily: 'Inter-Regular',
        fontSize: '24px',
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        }
    },
    icon: {
        width: '24px',
        height: '24px',
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '40px',
    },
    link: {
        textDecoration: 'none',
        "& path": {
            transition: '300ms ease-in-out',
            fill: ({iconColorFill}) => iconColorFill,
        },
        '&:hover': {
            "& path": {
                transition: '300ms ease-in-out',
                fill: ({iconColorFillHover}) => iconColorFillHover,
            },
        },
    },
}));

const initialValues = {
    name: '',
    email: '',
    checkbox: false,
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Wpisz swoje imię'),
    email: Yup.string().email('Proszę podać poprawny adres e-mail').required('Wprowadź swój email'),
    checkbox: Yup.boolean().oneOf([true], 'To pole jest wymagane').required('To pole jest wymagane'),
});

const ContactForm = ({paddingBottom}) => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);
    // eslint-disable-next-line no-unused-vars
    const [isFormFilled, setIsFormFilled] = useState(false);

    const handleFormChange = (values) => {
        const isFormValid = Object.values(values).every((val) => Boolean(val));
        setIsFormFilled(isFormValid);
    };

    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        if (values.checkbox) {
            setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                resetForm();
                setSubmitting(false);
            }, 500);
        }
    };

    return (
        <SectionWrapper id="main-contact" paddingBottom={paddingBottom}>
            <H1 text="Kontakt"/>
            <Typography variant="h2" className={classes.subTitleSection}>
                Zapytaj o konkretny materiał, wycieczkę lub możliwość współpracy
            </Typography>
            <Box className={classes.formWrapper}>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}
                        validateOnChange>
                    {({isSubmitting, isValid, errors, touched, values}) => (
                        <form onChange={() => handleFormChange(values)} className={classes.formSection}>
                            <Box className={classes.inputWrapper}>
                                <Box sx={{flex: 1}}>
                                    <Field name="name">
                                        {({field, form}) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                label="Imię i Nazwisko:"
                                                variant="outlined"
                                                error={form.errors.name && form.touched.name}
                                                helperText={form.touched.name && form.errors.name}
                                            />
                                        )}
                                    </Field>
                                </Box>
                                <Box>
                                    <Field name="email">
                                        {({field, form}) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                label="E-Mail:"
                                                variant="outlined"
                                                error={form.errors.email && form.touched.email}
                                                helperText={form.touched.email && form.errors.email}
                                            />
                                        )}
                                    </Field>
                                </Box>
                            </Box>
                            <Box style={{marginBottom: '16px'}}>
                                <Box style={{display: 'flex', alignItems: 'flex-start'}}>
                                    <Field name="checkbox" type="checkbox" className={classes.checkBox}>
                                        {({field, form}) => (
                                            <FormControlLabel
                                                className={classes.formControlLabel}
                                                control={<Checkbox
                                                    {...field}
                                                    color="primary"
                                                    error={form.errors.checkbox && form.touched.checkbox}/>}
                                                label={
                                                    <Typography className={classes.checkBoxDescription}>
                                                        Wyrażam zgodę na przetwarzanie <a
                                                        //href="https://drive.google.com/file/d/11HQYLksadgMaGXe3DmrOt37ldEO1qQiv/view?usp=drive_link"
                                                        target="_blank" rel="noreferrer"
                                                        className={classes.docLinktext}>danych osobowych</a>
                                                    </Typography>
                                                }
                                            />
                                        )}
                                    </Field>
                                </Box>
                                {touched.checkbox && errors.checkbox &&
                                    <span className={classes.error}>{errors.checkbox}</span>}
                            </Box>
                            <StyledButton type="submit" disabled={isSubmitting || !isValid} text="Wyślij" width="100%"/>
                        </form>
                    )}
                </Formik>
            </Box>
            <Box className={classes.buttonWrapper}>
                <Link to={'https://www.linkedin.com/company/weckwerth-turystyka-bez-filtr%C3%B3w/'}
                      className={classes.link}>
                    <Icon
                        component={LinkedinLogo}
                        className={classes.icon}
                        src={LinkedinLogo}
                    />
                </Link>
                <Link to={'https://www.tiktok.com/@turystyka.bez.filtrow'}
                      className={classes.link}>
                    <Icon
                        component={TikTokLogo}
                        className={classes.icon}
                        src={TikTokLogo}
                    />
                </Link>
                <Link to={'https://www.facebook.com/turystykabezfiltrow'} className={classes.link}>
                    <Icon
                        component={FaceBookLogo}
                        className={classes.icon}
                        src={FaceBookLogo}
                    />
                </Link>
                <Link to={'https://www.instagram.com/turystykabezfiltrow/'}
                      className={classes.link}>
                    <Icon
                        component={InstagramLogo}
                        className={classes.icon}
                        src={InstagramLogo}
                    />
                </Link>
            </Box>
        </SectionWrapper>
    );
};

export default ContactForm;


