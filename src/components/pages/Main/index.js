import React, {useState, useEffect} from 'react';
import MainBannerComponent from "./MainBanner";
import ActualPostsBlock from "./ActualPosts";
import ActualProjectsBlock from "./Wycieczki";
import InvestBlock from "./FinancePartners";
import {Backdrop, CircularProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import DonatBadgeComponent from "../../UI/DonatBadge";
import ContactForm from "../../UI/ContactForm";
import SectionWrapper from "../../UI/SectionWrapper";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const MainPage = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 4000));
            setLoading(false);
        };

        fetchData().then(r => console.log('MainPage data loaded'));
    }, []); // Пустой массив зависимостей означает, что эффект будет вызван только при монтировании компонента

    return (
        <div>
            <MainBannerComponent/>
            <ActualPostsBlock/>
            <SectionWrapper id="badge">
                <DonatBadgeComponent/>
            </SectionWrapper>
            <ActualProjectsBlock/>
            <InvestBlock/>
            <ContactForm paddingBottom="100px"/>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
};

export default MainPage;

