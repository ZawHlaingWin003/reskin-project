const getImageUrl = (
    image: string,
    { directory = '', basePath = '../assets/images', fallback = '' } = {}
) => {
    if (!image) {
        console.warn("Image path is undefined or empty. Using fallback image if provided.");
        image = fallback;
    }

    const path = `${basePath}/${directory ? `${directory}/` : ''}${image}`;

    try {
        return image ? new URL(path, import.meta.url).href : '';
    } catch (error) {
        console.error("Error generating image URL:", error);
        return '';
    }
};

export { getImageUrl };
