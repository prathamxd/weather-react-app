export const MODE = import.meta.env.MODE
export const BACKEND_SERVER_URL = MODE == 'development' ? import.meta.env.VITE_SERVER_URL_DEV : import.meta.env.VITE_SERVER_URL
