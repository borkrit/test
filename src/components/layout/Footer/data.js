const navLinksDataBydgoszcz = [
    {
        url: '/bydgoszcz',
        title: 'Bydgoszcz',
        subLinks: [
            {url: '/bydgoszcz/cykl-bydgoszcz-przez-dziurke-od-klucza', subTitle: 'BYDGOSZCZ PRZEZ DZIURKĘ OD KLUCZA'},
            {url: '/bydgoszcz/cykl-bydgoskie-osiedla-bez-filtrow', subTitle: 'BYDGOSKIE OSIEDLA BEZ FILTRÓW'},
            {url: '/bydgoszcz/cykl-bydgoszcz-narodzona-z-wody', subTitle: 'BYDGOSZCZ – NARODZONA Z WODY'},
            {url: '/bydgoszcz/cykl-cuda-bydgoskie', subTitle: 'CUDA BYDGOSKIE'},
            {url: '/bydgoszcz/inne-bydgoskie', subTitle: 'INNE BYDGOSKIE'},
            {url: '/artykuly/bartodzieje-szlak', subTitle: 'SZLAKIEM BYDGOSKICH OSIEDLI #1 – BARTODZIEJE'},

        ].sort((a, b) => a.subTitle.localeCompare(b.subTitle)),
    },
    // {
    //     url: 'https://turystykabezfiltrow.com/wycieczki/',
    //     text: 'Sklep',
    // },
];

const navLinksDataRegiony = [
    {
        url: '/regiony',
        title: 'Regiony',
        subLinks: [
            {url: '/regiony/wloclawek', subTitle: 'WŁOCŁAWEK'},
            {url: '/regiony/inowroclaw', subTitle: 'INOWROCŁAW'},
            {url: '/regiony/krakow', subTitle: 'KRAKÓW'},
            {url: '/regiony/szczecin', subTitle: 'SZCZECIN'},
            {url: '/regiony/grudziadz', subTitle: 'GRUDZIĄDZ'},
            {url: '/regiony/chojnice', subTitle: 'CHOJNICE I OKOLICE'},
            {url: '/regiony/dolnyslask', subTitle: 'GÓRY SOWIE'},
        ].sort((a, b) => a.subTitle.localeCompare(b.subTitle)),
    },
];

const navLinksDataKraje = [
    {
        url: '/kraje',
        title: 'Kraje',
        subLinks: [
            {url: '/kraje/ukraina', subTitle: 'UKRAINA'},
            {url: '/kraje/wycieczkazagraniczna', subTitle: 'NIEMCY'},
        ],
    },
];

const navLinksDataFilmyAndOther = [
    {
        url: '/filmy',
        title: 'Filmy',
    },
    {
        url: 'https://pisanieiprojekty.com/',
        title: 'Firma P&P',
        openInNewTab: true
    },
    {
        //TODO: change url
        url: 'https://patronite.pl/turystykabezfiltrow',
        title: 'Wesprzyj nas!',
        openInNewTab: true
    },
];

const navLinksDataWydarzenia = [
    {
        url: '/wydarzenia',
        title: 'Wydarzenia',
        subLinks: [
            {url: '/wydarzenia', subTitle: 'Weź udział!'},
            {url: '/wycieczki', subTitle: 'Co zrealizowaliśmy?'},
            {
                url: 'https://www.instagram.com/carfortrip_/?fbclid=IwAR0AnzB3bveYLQbilGia_XFBPek4C9zSQop5rmu-Gd8MLlX5FpKx_fnkDTQ',
                subTitle: 'Wycieczki do Gruzji',
                openInNewTab: true,
            },
        ],
    },
];

const navLinksDataONas = [
    {
        url: '/o-nas',
        title: 'O nas',
        subLinks: [
            {url: '/o-nas', sectionId: 'bez-filtrow', subTitle: 'BEZ FILTRÓW - czyli?'},
            {url: '/o-nas', sectionId: 'projekty', subTitle: 'Projekty'},
            {url: '/o-nas', sectionId: 'publikacje', subTitle: 'Publikacje'},

        ],
    },
];

const navLinksData = [
    {
        //url: '/bydgoszcz',
        text: 'Bydgoszcz',
        subLinks: [
            {url: '/bydgoszcz/cykl-bydgoszcz-przez-dziurke-od-klucza', text: 'BYDGOSZCZ PRZEZ DZIURKĘ OD KLUCZA'},
            {url: '/bydgoszcz/cykl-bydgoskie-osiedla-bez-filtrow', text: 'BYDGOSKIE OSIEDLA BEZ FILTRÓW'},
            {url: '/bydgoszcz/cykl-bydgoszcz-narodzona-z-wody', text: 'BYDGOSZCZ – NARODZONA Z WODY'},
            {url: '/bydgoszcz/cykl-cuda-bydgoskie', text: 'CUDA BYDGOSKIE'},
            {url: '/bydgoszcz/inne-bydgoskie', text: 'INNE BYDGOSKIE'},
            {url: '/artykuly/bartodzieje-szlak', text: 'SZLAKIEM BYDGOSKICH OSIEDLI #1 – BARTODZIEJE'},

        ].sort((a, b) => a.text.localeCompare(b.text)),
    },
    {
        //url: '/regiony',
        text: 'Regiony',
        subLinks: [
            {url: '/regiony/wloclawek', text: 'WŁOCŁAWEK'},
            {url: '/regiony/inowroclaw', text: 'INOWROCŁAW'},
            {url: '/regiony/krakow', text: 'KRAKÓW'},
            {url: '/regiony/szczecin', text: 'SZCZECIN'},
            {url: '/regiony/grudziadz', text: 'GRUDZIĄDZ'},
            {url: '/regiony/chojnice', text: 'CHOJNICE I OKOLICE'},
            {url: '/regiony/dolnyslask', text: 'GÓRY SOWIE'},
        ].sort((a, b) => a.text.localeCompare(b.text)),
    },
    {
        //url: '/kraje',
        text: 'Kraje',
        subLinks: [
            {url: '/kraje/ukraina', text: 'UKRAINA'},
            {url: '/kraje/wycieczkazagraniczna', text: 'NIEMCY'},
        ],
    },
    {
        url: '/filmy',
        text: 'Filmy',
    },
    // {
    //     url: 'https://turystykabezfiltrow.com/wycieczki/',
    //     text: 'Sklep',
    // },
    {
        //url: '/wydarzenia',
        text: 'Wydarzenia',
        subLinks: [
            {url: '/wydarzenia', text: 'Weź udział!'},
            {url: '/wycieczki', text: 'Co zrealizowaliśmy?'},
            {
                url: 'https://www.instagram.com/carfortrip_/?fbclid=IwAR0AnzB3bveYLQbilGia_XFBPek4C9zSQop5rmu-Gd8MLlX5FpKx_fnkDTQ',
                text: 'Wycieczki do Gruzji',
                openInNewTab: true,
            },
        ],
    },
    {
        //url: '/o-nas',
        text: 'O nas',
        subLinks: [
            {url: '/o-nas', sectionId: 'bez-filtrow', text: 'BEZ FILTRÓW - czyli?'},
            {url: '/o-nas', sectionId: 'projekty', text: 'Projekty'},
            {url: '/o-nas', sectionId: 'publikacje', text: 'Publikacje'},

        ],
    },
    {
        url: 'https://pisanieiprojekty.com/',
        text: 'Firma P&P',
        openInNewTab: true
    },
    {
        //TODO: change url
        url: 'https://patronite.pl/turystykabezfiltrow',
        text: 'Wesprzyj nas!',
        openInNewTab: true
    },
];

export {
    navLinksDataBydgoszcz,
    navLinksDataRegiony,
    navLinksDataKraje,
    navLinksDataFilmyAndOther,
    navLinksDataWydarzenia,
    navLinksDataONas,
    navLinksData,
}