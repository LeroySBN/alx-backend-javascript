import getResponseFromAPI from "./0-promise.js"; // eslint-disable-line

const response = getResponseFromAPI();
console.log(response instanceof Promise);
