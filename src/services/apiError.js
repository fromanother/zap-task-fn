const apiError = (statusCode, errorMessage) => {
  return {
    status: statusCode,
    message: errorMessage,
  };
};

export default apiError;
