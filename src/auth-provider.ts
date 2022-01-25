// 在真实环境中，如果使用 firebase 等第三方 auth 服务的话，本文件不需要开发者开发

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = localStorageKey;
