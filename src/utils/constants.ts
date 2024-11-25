const APP_NAME = "YY24";

const DOMAIN = import.meta.env.VITE_APP_DOMAIN;
const API_DOMAIN = import.meta.env.VITE_API_DOMAIN;

const BASE_URL = `${import.meta.env.VITE_APP_ENV === 'production' ? API_DOMAIN : DOMAIN}/api/v1`;

const THEME_KEY = 'dark_mode';
const LANG_KEY = 'locale';

const LOCAL_STORAGE_KEYS = {
    USER_TOKEN: "user_token",
    USER_LOCATION: "user_location",
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
    THEME_KEY,
    LANG_KEY
}