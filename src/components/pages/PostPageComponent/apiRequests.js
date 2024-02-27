// apiRequests.js

const fetchPostBySlug = async (postSlug) => {
    try {
        const response = await fetch(
            `https://weckwerthblog.wpcomstaging.com/wp-json/wp/v2/posts?slug=${postSlug}&_embed=true`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch post data');
        }

        const [data] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching post data:', error);
        throw error; // Пробросим ошибку для обработки в компоненте
    }
};


export { fetchPostBySlug };