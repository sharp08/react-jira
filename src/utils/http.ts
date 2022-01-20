import qs from "qs";

interface Config extends RequestInit {
  token?: string;
  data?: object;
}

export const http = (url: string, { data, token, ...customConfig }: Config) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      // "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  url =
    config.method.toUpperCase() === "GET" && data
      ? `${url}?${qs.stringify(data)}`
      : url;

  return fetch(url, config)
    .then((response) => {
      const res = response.json(); // 不进行该操作时，response 为 ReadableStream
      if (response.ok) {
        return res;
      } else {
        return Promise.reject(res);
      }
    })
    .catch((err) => Promise.reject(err));
};
