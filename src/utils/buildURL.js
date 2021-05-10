const buildURL = (url, params) =>
  `${url}?${Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&")}`;

export default buildURL;
