import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Backdrop, Box, Button, CircularProgress, Typography,} from '@material-ui/core';
import SectionWrapper from '../../UI/SectionWrapper';
import {useTheme} from '../../../theme/themeContext';
import {themes} from '../../../theme/themeContext/themes';
import BreadCrumbs from '../../UI/BreadCrumbs';
import FullscreenModal from "../../UI/ImageModalComponent";
import DownloadButton from "../../UI/DownloadButton";
import useStyles from './styles';
import DonatBadgeComponent from "../../UI/DonatBadge";
import ContactForm from "../../UI/ContactForm";
import ProjectCard from "../../UI/ActualProjectsCard";
import Sidebar from "../../UI/SideBar";
import ShareButton from "../../UI/ShareButton";
import RichLink from "../../UI/RichLinks";


const ProjectDetails = () => {
    const {theme} = useTheme();
    const classes = useStyles(themes[theme]);
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [fullscreenModalOpen, setFullscreenModalOpen] = useState(false);

    const {projectSlug} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                // Получаем все категории
                const categoriesResponse = await fetch(
                    'https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/categories?per_page=100'
                );
                const categories = await categoriesResponse.json();

                // Ищем категорию 'wycieczki' независимо от регистра
                const wycieczkiCategory = categories.find(
                    (category) => category.name.toLowerCase() === 'wycieczki'
                );

                if (!wycieczkiCategory) {
                    throw new Error('Wycieczki category not found');
                }

                // Получаем посты из категории 'wycieczki'
                const response = await fetch(
                    `https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/posts?categories=${wycieczkiCategory.id}&slug=${projectSlug}&_embed=true`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const [data] = await response.json();
                setProject(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        setSelectedImageIndex(0);

        fetchData();
    }, [projectSlug]);

    const extractImageUrls = (content) => {
        const imageUrls = [];
        const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

        const regex = /<img[^>]+src="([^">]+)"[^>]*>/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const imageUrl = match[1];

            if (!imageUrl.match(emojiRegex)) {
                imageUrls.push(imageUrl);
            }
        }
        return imageUrls;
    };

    const imageUrls = extractImageUrls(project?.content?.rendered || '');

    const extractImages = (content) => {
        const images = [];
        const regex = /<img[^>]+src="([^">]+)"[^>]*>/g;
        let match;
        while ((match = regex.exec(content)) !== null) {
            const imgTag = match[0]; // полный тег img
            images.push(imgTag);
        }
        return images;
    };

    const images = extractImages(project?.content?.rendered || '');

    const handleOpenFullscreenModal = (index) => {
        setSelectedImageIndex(index);
        setFullscreenModalOpen(true);
    };

    const handleOpenMainImageModal = () => {
        const mainImageUrl = project?._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        console.log('Main Image URL:', mainImageUrl); // Отладочное сообщение

        if (mainImageUrl) {
            setSelectedImageIndex(null); // Сбрасываем выбранный индекс массива
            setFullscreenModalOpen(true);
        } else {
            console.error('Main image URL not found');
        }
    };

    const extractFileUrls = (content) => {
        const fileUrlsSet = new Set();
        const regex = /<a[^>]+href="([^">]+)"[^>]*>(.*?)<\/a>/g;

        let match;
        while ((match = regex.exec(content)) !== null) {
            const url = match[1];

            // Проверяем, является ли URL файловым и оканчивается на ".pdf"
            const isFileUrl = !url.startsWith('mailto:') && url.toLowerCase().endsWith('.pdf');

            // Если это файловый URL и его еще нет в Set, добавляем его
            if (isFileUrl && !fileUrlsSet.has(url)) {
                fileUrlsSet.add(url);
            }
        }

        // Преобразуем Set обратно в массив
        return [...fileUrlsSet];
    };

    const filteredFileUrls = extractFileUrls(project?.content?.rendered || '');

    const descriptionWithoutImagesAndFiles = filteredFileUrls.reduce((content, fileUrl) => {
        // eslint-disable-next-line no-useless-escape
        const fileRegex = new RegExp(`<a[^>]+href="${fileUrl}"[^>]*>.*?<\/a>`, 'g');
        const imageRegex = /<img[^>]+src="([^">]+)"[^>]*>/g;

        // Удаляем файловые ссылки
        const contentWithoutFiles = content.replace(fileRegex, '');

        // Удаляем изображения
        const contentWithoutImages = contentWithoutFiles.replace(imageRegex, '');

        return contentWithoutImages;
    }, project?.content?.rendered || '');


    const handleCloseFullscreenModal = () => {
        setFullscreenModalOpen(false);
    };

    const handleNextImage = () => {
        setSelectedImageIndex((prev) => {
            if (prev === imageUrls.length - 1) {
                return 0;
            }

            return prev + 1;
        });
    }

    const handlePrevImage = () => {
        setSelectedImageIndex((prev) => {
            if (prev === 0) {
                return imageUrls.length - 1;
            }

            return prev - 1;
        });
    }

    const renderImages = () => {
        const numImages = imageUrls.length;
        //approve
        if (numImages === 1) {
            return (
                <div style={{position: 'relative', height: '100%', width: '100%'}}>
                    {images.slice(0, 1).map((imgTag, index) => (
                        <div
                            key={index}
                            dangerouslySetInnerHTML={{__html: imgTag}}
                            className={classes.facebookStyleImageLarge + ' ' + classes.largeActiveViewForMobile}
                            onClick={() => handleOpenFullscreenModal(0)}
                        />
                    ))}
                </div>
            );
            // approve
        } else if (numImages === 2) {
            return (
                <>
                    {images.slice(0, 2).map((imgTag, index) => (
                        <div key={index} style={{position: 'relative', height: '100%', width: '100%'}}>
                            <div
                                key={index}
                                dangerouslySetInnerHTML={{__html: imgTag}}
                                className={classes.facebookStyleImage}
                                onClick={() => handleOpenFullscreenModal(index)}
                            />
                        </div>
                    ))}
                </>
            );
            //approve
        } else if (numImages === 3) {

            return (
                <>
                    <div className={classes.columnsWithTwoImagesAlternative + ' ' + classes.fullWidth}>
                        {images.slice(0, 2).map((imgTag, index) => (
                            <div key={index} style={{position: 'relative', height: '100%'}}>
                                <div
                                    key={index}
                                    dangerouslySetInnerHTML={{__html: imgTag}}
                                    className={classes.facebookStyleImage + ' ' + classes.twoImagesBoxView}
                                    onClick={() => handleOpenFullscreenModal(index)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={classes.columnsWithOneImage}>
                        {images.slice(2, 3).map((imgTag, index) => (
                            <div
                                key={index}
                                dangerouslySetInnerHTML={{__html: imgTag}}
                                className={classes.facebookStyleImageLarge}
                                onClick={() => handleOpenFullscreenModal(index + 2)}
                            />
                        ))}
                    </div>
                </>
            );
            //approve
        } else if (numImages === 4) {

            return (
                <>
                    <div className={classes.columnsWithTwoImagesAlternative}>
                        {images.slice(0, 2).map((imgTag, index) => (
                            <div key={index} style={{position: 'relative', height: '100%', width: '100%'}}>
                                <div
                                    key={index}
                                    dangerouslySetInnerHTML={{__html: imgTag}}
                                    className={classes.facebookStyleImage + ' ' + classes.facebookStyleImageAlternative}
                                    onClick={() => handleOpenFullscreenModal(index)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={classes.columnsWithTwoImagesAlternative}>
                        {images.slice(2, 4).map((imgTag, index) => (
                            <div key={index} style={{position: 'relative', height: '100%', width: '100%'}}>
                                <div
                                    key={index}
                                    dangerouslySetInnerHTML={{__html: imgTag}}
                                    className={classes.facebookStyleImage + ' ' + classes.facebookStyleImageAlternative}
                                    onClick={() => handleOpenFullscreenModal(index + 2)}
                                />
                            </div>
                        ))}
                    </div>
                </>
            );
            //approve
        } else if (numImages >= 5) {

            return (
                <>
                    <div className={classes.columnsWithTwoImages}>
                        {images.slice(0, 2).map((imgTag, index) => (
                            <div key={index} style={{position: 'relative', width: '100%', height: '100%'}}>
                                <div
                                    key={index}
                                    dangerouslySetInnerHTML={{__html: imgTag}}
                                    className={classes.facebookStyleImage}
                                    onClick={() => handleOpenFullscreenModal(index)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={classes.columnsWithOneImage}>
                        {images.slice(2, 3).map((imgTag, index) => (
                            <div
                                key={index}
                                dangerouslySetInnerHTML={{__html: imgTag}}
                                className={classes.facebookStyleImageLarge}
                                onClick={() => handleOpenFullscreenModal(index + 2)}
                            />
                        ))}
                    </div>
                    <div className={classes.columnsWithTwoImages}>
                        {images.slice(3, 5).map((imgTag, index) => (
                            <div key={index} style={{position: 'relative', width: '100%', height: '100%'}}>
                                <div
                                    key={index}
                                    dangerouslySetInnerHTML={{__html: imgTag}}
                                    className={classes.facebookStyleImage}
                                    onClick={() => handleOpenFullscreenModal(index + 3)}
                                />
                                {index === images.slice(3, 5).length - 1 && (
                                    <Button
                                        className={classes.viewAllButton}
                                        onClick={() => handleOpenFullscreenModal(0)}
                                    >
                                        kolejne {images.length}
                                    </Button>
                                )}
                            </div>
                        ))}
                    </div>

                </>
            );
        } else {
            // Логика для других случаев
            return null;
        }
    };

    return (
        <SectionWrapper paddingBottom="100px" paddingTop="120px">
            <RichLink name={project?.title?.rendered} title={project?.title?.rendered} description={descriptionWithoutImagesAndFiles} image={project?._embedded?.['wp:featuredmedia']?.[0]?.source_url}/>
            <BreadCrumbs/>
            <Box className={classes.contentWrapper}>
                <Box className={classes.textWrapper}>
                    <Box style={{borderBottom: '1px solid', borderColor: `${themes[theme].borderColor}`}}>
                        <Typography variant="h1" className={classes.title}
                                    dangerouslySetInnerHTML={{__html: project?.title?.rendered}}/>
                        <Typography variant="h1" className={classes.date}>
                            {new Date(project?.date).toLocaleDateString('pl-PL', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </Typography>
                        <ShareButton url={window.location.href}/>
                    </Box>

                    <Box>
                        <Box className={classes.descriptionContainer}>
                            {project?._embedded && project._embedded['wp:featuredmedia'] && (
                                <div>
                                    <img
                                        src={project._embedded['wp:featuredmedia'][0].source_url}
                                        alt={project.title?.rendered}
                                        className={classes.image}
                                        loading="lazy"
                                        onClick={handleOpenMainImageModal}
                                    />
                                </div>
                            )}
                        </Box>
                        <Box className={classes.textContainer}>
                            <Typography variant="body1"
                                        dangerouslySetInnerHTML={{__html: descriptionWithoutImagesAndFiles}}
                                        className={classes.description}/>
                        </Box>
                        <Box className={classes.downloadButtonWrapper}>
                            {filteredFileUrls.map((filteredFileUrl, index) => {
                                console.log('pdfUrl:', filteredFileUrl); // Добавьте эту строку для отладки
                                return <DownloadButton key={index} pdfUrl={filteredFileUrl}/>;
                            })}
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.imageWrapper}>
                    <Sidebar>
                        <ProjectCard projectLimit={3} smallProjectView/>
                    </Sidebar>
                    {/*{project?._embedded && project._embedded['wp:featuredmedia'] && (*/}
                    {/*    <div className={classes.imageContainer}>*/}
                    {/*        <img*/}
                    {/*            src={project._embedded['wp:featuredmedia'][0].source_url}*/}
                    {/*            alt={project.title?.rendered}*/}
                    {/*            className={classes.image}*/}
                    {/*            loading="lazy"*/}
                    {/*            onClick={handleOpenMainImageModal}*/}

                    {/*        />*/}
                    {/*    </div>*/}
                    {/*)}*/}
                </Box>
            </Box>
            <Box>
                <DonatBadgeComponent/>
            </Box>
            <Box className={classes.root}>
                <Box className={classes.columnsWrapper}>
                    {renderImages()}
                    <Backdrop className={classes.backdrop} open={loading}>
                        <CircularProgress color="inherit"/>
                    </Backdrop>
                </Box>
                <FullscreenModal
                    open={fullscreenModalOpen}
                    onClose={handleCloseFullscreenModal}
                    imgTag={images[selectedImageIndex]}
                    index={selectedImageIndex}
                    imageSrc={
                        selectedImageIndex !== null
                            ? images[selectedImageIndex]
                            : project?._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''
                    }
                    onNext={handleNextImage}
                    onPrev={handlePrevImage}
                />
            </Box>
            <Box>
                <ContactForm/>
            </Box>
        </SectionWrapper>
    );
};

export default ProjectDetails;