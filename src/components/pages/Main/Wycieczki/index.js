import React from 'react';
import H1 from "../../../UI/H1";
import SectionWrapper from "../../../UI/SectionWrapper";
import { makeStyles } from "@material-ui/core/styles";
import StyledButton from "../../../UI/StyledButton";
import { Grid } from "@material-ui/core";
import ProjectCard from "../../../UI/ActualProjectsCard";
import {themes} from "../../../../theme/themeContext/themes";
import {useTheme} from "../../../../theme/themeContext";

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const ActualProjectsBlock = () => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);

    return (
        <SectionWrapper id="main-actual-projects">
            <H1 text="Co zrealizowaliśmy?"/>
            <ProjectCard projectLimit={5}/>
            <Grid container spacing={3} className={classes.buttonContainer}>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledButton text="Wszystkie Wycieczki" href="/wycieczki" width="100%" to="/wycieczki"/>
                </Grid>
            </Grid>
        </SectionWrapper>
    );
};

export default ActualProjectsBlock;