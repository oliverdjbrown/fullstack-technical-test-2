// HTTP Response Messages

const httpResponses = {
  status200: { message: "ok", code: 200 },
  status201: { message: "created", code: 201 },
  status202: { message: "accepted", code: 202 },
  status400: { message: "Bad Request", code: 400 },
  status401: { message: "Unauthorized", code: 401 },
  status402: { message: "Payment Required", code: 402 },
  status403: { message: "Forbidden", code: 403 },
  status404: { message: "Not Found", code: 404 },
  status500: { message: "Internal Server Error", code: 500 },
  status501: { message: "Not Implemented", code: 501 },
  status502: { message: "Bad Gateway", code: 502 },
  status503: { message: "Service Unavailable", code: 503 },
  invalidUserOrPassword: {
    message: "invalid user or password",
  },
  alreadyCreated: {
    message: "the element is already created",
  },
};

module.exports = {
  ...httpResponses,
};
