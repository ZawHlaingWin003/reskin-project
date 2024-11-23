
const getImageUrl = (image: string, { directory = '', fallback = '' } = {}) => {
    if (!image) {
        console.warn("Image path is undefined or empty. Using fallback image if provided.");
        image = fallback;
    }
    return new URL(`../assets/images/${directory ? `${directory}/` : ''}${image}`, import.meta.url).href;
}

export {
    getImageUrl
}