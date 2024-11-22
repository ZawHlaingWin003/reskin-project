const getImageUrl = (image: string) => {

    if (!image) {
        console.warn("Logo path is undefined or empty.");
        return "";
    }
    return new URL(`../assets/images/${image}`, import.meta.url).href;
}

export {
    getImageUrl
}