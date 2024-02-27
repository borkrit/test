import MainBannerLight from '../../assets/Banners/main-banner.png';
import MainBannerDark from '../../assets/Banners/main-banner-filter.png';


const themes = {
    light: {
        sectionWrapperBackgroundColor: '#F5F5F7',
        backgroundColor: '#ffffff',
        textColor: '#252525',
        borderColor: '#d9d9d9',
        lineBackgroundColor: 'black',
        bannerTextColor: 'white',
        mainBannerBackgroundImage: `url(${MainBannerLight})`,

        postsTextColor: 'black',
        postsHoverTextColor: '#90AFFF',

        defaultButtonBackgroundColor: '#90AFFF',
        darkButtonBackgroundColor: 'white',

        defaultButtonBorderColor: '#90AFFF',
        darkButtonBorderColor: 'white',

        defaultButtonTextColor: 'black',
        darkButtonTextColor: '#252525',

        iconColorFill: '#001F1A',

        // '&:hover': {
        defaultHoverButtonBackgroundColor: 'transparent',
        darkHoverButtonBackgroundColor: 'transparent',

        defaultHoverButtonBorderColor: '#90AFFF',
        darkHoverButtonBorderColor: 'white',

        defaultHoverButtonTextColor: '#90AFFF',
        darkHoverButtonTextColor: 'white',

        iconColorFillHover: '#90AFFF',

        paginationBackgroundColor: 'transparent',
        paginationTextColor: '#252525',
        paginationBorderColor: '#90AFFF',

        paginationSelectedBackgroundColor: '#90AFFF',
        paginationSelectedTextColor: '#252525',
        paginationSelectedBorderColor: '#90AFFF',

        useLocationLinkColor: '#151515',
        useLocationLinkColorHover: '#90AFFF',
        useLocationLinkColorNow: '#90AFFF',

        galleryButtonBorderColor: 'white',
        galleryHoverButtonBorderColor: '#39B2B9',
        galleryButtonIconFill: 'white',
        galleryHoverButtonIconFill: '#39B2B9',
        galleryButtonBackgroundColor: 'transparent',
        aboutPageTextTitleColor: '#353535',
        borderColorForAboutPage: '#D9D9D9',
        downloadButtonBorderColor: '#D9D9D9',
        downloadButtonBorderColorHover: '#39B2B9',


        floatingButtonBackgroundColor: '#0047FF',
        floatingButtonBorderColor: 'transparent',


        defaultBorderColor: '#D9D9D9',
        hoverBorderColor: '#90AFFF',
        contactFormInputTextColor: '#252525',
        contactFormInputTextColorHover: '#90AFFF',

        listIconColorFill: '#D9D9D9',
        listIconColorFillHover: '#90AFFF',
        inputBorderColor: '#ffffff',

    },
    dark: {
        inputBorderColor: '#FFEA2E',
        listIconColorFillHover: '#FFEA2E',
        listIconColorFill: '#FFEA2E',
        defaultBorderColor: '#FFEA2E',
        hoverBorderColor: '#FFEA2E',
        contactFormInputTextColor: '#FFEA2E',
        contactFormInputTextColorHover: '#FFEA2E',

        sectionWrapperBackgroundColor: '#151515',
        floatingButtonBackgroundColor: '#252525',
        floatingButtonBorderColor: '#FFEA2E',

        backgroundColor: '#151515',
        textColor: '#FFEA2E',
        footerBackgroundColor: '#151515',
        footerTextColor: '#FFEA2E',
        borderColor: '#FFEA2E',
        lineBackgroundColor: '#FFEA2E',
        borderColorForAboutPage: '#FFEA2E',
        mainBannerBackgroundImage: `url(${MainBannerDark})`,

        footerTextColorHover: '#FFEA2E',
        bannerTextColor: '#FFEA2E',
        postsTextColor: '#FFEA2E',
        postsHoverTextColor: '#FFEA2E',

        downloadButtonBorderColor: '#FFEA2E',
        downloadButtonBorderColorHover: '#FFEA2E',

        defaultButtonBackgroundColor: '#FFEA2E',
        darkButtonBackgroundColor: '#FFEA2E',

        defaultButtonBorderColor: '#FFEA2E',
        darkButtonBorderColor: '#151515',

        paginationSelectedBackgroundColor: '#FFEA2E',
        paginationSelectedTextColor: '#151515',
        paginationSelectedBorderColor: '#FFEA2E',

        paginationBackgroundColor: 'transparent',
        paginationTextColor: '#FFEA2E',
        paginationBorderColor: '#FFEA2E',


        defaultButtonTextColor: 'black',
        darkButtonTextColor: 'black',

        iconColorFill: '#FFEA2E',

        //'&:hover': {
        defaultHoverButtonBackgroundColor: 'transparent',
        darkHoverButtonBackgroundColor: 'transparent',

        defaultHoverButtonBorderColor: '#FFEA2E',
        darkHoverButtonBorderColor: '#151515',

        defaultHoverButtonTextColor: '#FFEA2E',
        darkHoverButtonTextColor: '#151515',

        iconColorFillHover: '#FFEA2E',


        useLocationLinkColor: '#FFEA2E',
        useLocationLinkColorHover: '#FFEA2E',
        useLocationLinkColorNow: '#FFEA2E',


        galleryButtonBorderColor: '#FFEA2E',
        galleryHoverButtonBorderColor: '#FFEA2E',
        galleryButtonIconFill: 'black',
        galleryHoverButtonIconFill: 'black',
        galleryButtonBackgroundColor: '#FFEA2E',

        aboutPageTextTitleColor: '#FFEA2E',
    },
};

export {themes};