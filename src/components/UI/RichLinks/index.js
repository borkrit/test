import React from 'react';
import { Helmet } from 'react-helmet-async';

const RichLink = ({ name, title, description, image }) => {
    // Функция для удаления HTML-тегов из строки
    const stripHtmlAndLimitLines = (html, limitLines) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const textContent = doc.body.textContent || "";

        // Разбиваем текст на строки и берем только первые limitLines
        const lines = textContent.split('\n').slice(0, limitLines);

        // Собираем строки обратно в текст
        return lines.join('\n');
    };

    return (
        <Helmet>
            <title data-react-helmet="true">{stripHtmlAndLimitLines(name)}</title>
            <meta charSet={"utf-8"} data-react-helmet="true"/>
            <meta property="og:title" content={stripHtmlAndLimitLines(title)} data-react-helmet="true"/>
            <meta property="og:description" content={stripHtmlAndLimitLines(description, 5)} data-react-helmet="true"/>
            <meta property="og:image" content={image} data-react-helmet="true"/>
            <meta property="og:image:alt" content={stripHtmlAndLimitLines(title)} data-react-helmet="true"/>
            <meta property="og:image:width" content="1359" />
            <meta property="og:image:height" content="1282" />
            <meta property="og:image:aspect_ratio" content="1359:1282" />
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content={stripHtmlAndLimitLines(name)} data-react-helmet="true" />
            <meta property="og:locale" content="pl_PL" />
            <meta property="og:locale:alternate" content="en_GB" />
            <meta property="og:locale:alternate" content="en_US" />
        </Helmet>
    );
};

export default RichLink;
