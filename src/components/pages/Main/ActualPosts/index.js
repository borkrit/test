import React from 'react';
import PostsCard from '../../../UI/ActualPostCard';
import SectionWrapper from "../../../UI/SectionWrapper";
import {makeStyles} from "@material-ui/core/styles";
import StyledButton from "../../../UI/StyledButton";
import {Grid} from "@material-ui/core";
import H1 from "../../../UI/H1";

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const ActualPostsBlock = () => {
    const classes = useStyles();

    return (
        <SectionWrapper id="main-actual-posts" paddingTop="30px">
            <H1 text="Artykuły"/>
            <PostsCard postLimit={6}/>
            <Grid container spacing={3} className={classes.buttonContainer}>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledButton text="Wszystkie Artykuły" width="100%" to="/artykuly"/>
                </Grid>
            </Grid>
        </SectionWrapper>
    );
};

export default ActualPostsBlock;
