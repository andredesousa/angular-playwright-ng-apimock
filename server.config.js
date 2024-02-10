const mockServer = 'http://localhost:3000';

const PROXY_CONFIG = {
  '/ngapimock/*': {
    logLevel: 'info',
    secure: false,
    target: mockServer,
  },
  '/api/*': {
    logLevel: 'info',
    secure: false,
    target: mockServer,
  },
};

module.exports = PROXY_CONFIG;
