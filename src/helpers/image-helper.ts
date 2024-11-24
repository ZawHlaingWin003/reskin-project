const getImageUrl = (image: string, { directory = '', fallback = '' } = {}) => {
    if (!image) {
        console.warn("Image path is undefined or empty. Using fallback image if provided.");
        return fallback ? new URL(`../assets/images/${fallback}`, import.meta.url).href : '';
    }

    try {
        return new URL(`../assets/images/${directory ? `${directory}/` : ''}${image}`, import.meta.url).href;
    } catch (e) {
        console.error(`Image not found: ${directory}/${image}. Using fallback if provided.`);
        return fallback ? new URL(`../assets/images/${fallback}`, import.meta.url).href : '';
    }
};

export { getImageUrl };
