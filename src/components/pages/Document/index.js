import React, {useEffect} from 'react';
import SectionWrapper from "../../UI/SectionWrapper";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import BreadCrumbs from "../../UI/BreadCrumbs";
import Typography from "@material-ui/core/Typography";
import {useTheme} from "../../../theme/themeContext";
import {themes} from "../../../theme/themeContext/themes";

const useStyles = makeStyles((theme) => ({
    title: {
        fontFamily: 'Helvetica-Bold',
        fontSize: '56px',
        fontWeight: 700,
        color: ({textColor}) => textColor,
        marginBottom: '32px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            fontWeight: 700,
        },
    },
    description: {
        fontFamily: 'Helvetica-Regular',
        fontSize: '20px',
        fontWeight: 400,
        color: ({textColor}) => textColor,
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
        },
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //width: '80%',
    },
    descriptionContainer: {
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    }
}));

const descriptionText = `Fundacja Krzewienia Kultury i Turystyki „Nad Rzeką” zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych. Oświadczenie w sprawie dostępności ma zastosowanie do serwisu internetowego www.fundacjanadrzeka.com <br/> <p></p>
                    Data publikacji strony internetowej: 31 sierpnia 2009 r. Data ostatniej dużej aktualizacji: 25 listopada 2023 r. <br/> <p></p>
                                         Strona internetowa jest częściowo zgodna z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych Fundacji tj. z wyłączeniem niektórych filmów i zdjęć które nie posiadają napisów dla osób niesłyszących i słabosłyszących. <br/> <p></p>
                                         Deklarację sporządzono 2023–12–25 na podstawie samooceny przeprowadzonej przez zarząd Fundacji. <br/> <p></p>
                    W przypadku problemów z dostępnością strony internetowej prosimy o kontakt z p. Imię Nazwisko, za pośrednictwem poczty elektronicznej: Email. Tą samą drogą można składać wnioski o udostępnienie informacji niedostępnej oraz składać skargi na brak zapewnienia dostępności. <br/> <p></p>
                    Każdy ma prawo do wystąpienia z żądaniem zapewnienia dostępności cyfrowej strony internetowej, aplikacji mobilnej lub jakiegoś ich elementu. Można także zażądać udostępnienia informacji za pomocą alternatywnego sposobu dostępu, na przykład przez odczytanie niedostępnego cyfrowo dokumentu, opisanie zawartości filmu bez audiodeskrypcji itp. Żądanie powinno zawierać dane osoby zgłaszającej żądanie, wskazanie, o którą dokładnie stronę internetową chodzi oraz sposób kontaktu. Jeżeli osoba żądająca zgłasza potrzebę otrzymania informacji za pomocą alternatywnego sposobu dostępu, powinna także określić dogodny dla niej sposób przedstawienia tej informacji. Fundacja powinna zrealizować żądanie niezwłocznie, nie później niż w ciągu 7 dni od dnia wystąpienia z żądaniem. <br/> <p></p>
                    Jeżeli dotrzymanie tego terminu nie jest możliwe, Fundacja niezwłocznie informuje o tym wnoszącego żądanie, kiedy realizacja żądania będzie możliwa, przy czym termin ten nie może być dłuższy niż 2 miesiące od dnia wystąpienia z żądaniem. <br/> <p></p>
                    Jeżeli zapewnienie dostępności cyfrowej nie jest możliwe, Fundacja może zaproponować alternatywny sposób dostępu do informacji. W przypadku, gdy Fundacja odmówi realizacji żądania zapewnienia dostępności lub alternatywnego sposobu dostępu do informacji, wnoszący żądanie może złożyć skargę w sprawie zapewnienia dostępności cyfrowej strony internetowej, aplikacji mobilnej lub elementu strony internetowej, lub aplikacji mobilnej. <br/> <p></p>
                    Po wyczerpaniu wskazanej wyżej procedury można także złożyć wniosek do Rzecznika Praw Obywatelskich. <br/> <p></p>
                    Na stronie internetowej można korzystać ze standardowych skrótów klawiaturowych. <br/>
                    Użytkownicy korzystający wyłącznie z klawiatury mogą swobodnie poruszać się po serwisie za pomocą klawisza Tab. <br/> <p></p>
                    Użytkownicy mają możliwość powiększania treści w serwisie – powiększanie czcionki A+, A++. Istnieje również możliwość włączenia kontrastu serwisu. <br/> <p></p>`;


const DocumentPage = () => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <SectionWrapper paddingBottom="100px" paddingTop="20px">
            <BreadCrumbs/>
            <Box className={classes.textContainer}>
                <Box className={classes.descriptionContainer}>
                    <Typography variant="h1" className={classes.title}>
                        Deklaracja dostępności cyfrowej
                    </Typography>
                    <Typography variant="body1" align="center" className={classes.description}
                                dangerouslySetInnerHTML={{__html: descriptionText}}/>
                </Box>
            </Box>
        </SectionWrapper>
    );
};

export default DocumentPage;