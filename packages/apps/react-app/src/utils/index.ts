const setLocalStorage = (key: string, value: string) => {
	localStorage.setItem(key, value);
};

const getLocalStorage = (key: string) => {
	return localStorage.getItem(key);
};

const removeLocalStorage = (key: string) => {
	localStorage.removeItem(key);
};

const TOKEN = "token";

const REFRESHTOKEN = "refreshToken";

export const setToken = (token: string) => setLocalStorage(TOKEN, token);

export const getToken = () => getLocalStorage(TOKEN);

export const setRefreshToken = (token: string) =>
	setLocalStorage(REFRESHTOKEN, token);

export const getRefreshToken = () => getLocalStorage(REFRESHTOKEN);
