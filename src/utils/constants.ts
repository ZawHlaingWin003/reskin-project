const APP_NAME = "YY24";

const DOMAIN = import.meta.env.VITE_APP_DOMAIN;
const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;

// const BASE_URL = `${import.meta.env.VITE_APP_ENV === 'production' ? API_DOMAIN : DOMAIN}/api`;
const BASE_URL = `${API_DOMAIN}/api`;

const LOCAL_STORAGE_KEYS = {
    THEME_KEY: "dark_mode",
    LANG_KEY: "locale",
};

const STATUS = {
    IN: 'in',
    OUT: 'out'
};

export {
    APP_NAME,
    DOMAIN,
    BASE_URL,

    STATUS,
    LOCAL_STORAGE_KEYS
}