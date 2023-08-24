// Async tests with done
const getPaymentTokenFromAPI = (success) => {
  if (success) {
    return Promise.resolve({data: 'Successful response from the API'});
  } else {
    return Promise.reject(new Error('Request failed'));
  }
};

module.exports = getPaymentTokenFromAPI;

