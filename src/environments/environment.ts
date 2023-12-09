export const environment = {
  production: false,
  api_url: 'http://localhost:3000',
  auth0: {
    client_id: 'LfLIfYl8KgXsRESGUliUkGmKzzyRI7Dl',
    domain: 'symplipull-dev.us.auth0.com',
    responseType: 'token id_token',
    logout_url: 'http://localhost:4200/auth',
    redirect_uri: 'http://localhost:4200/callback',
    audience: 'https://symplipull-dev.us.auth0.com/api/v2/',
    scope: 'openid profile email offline_access',
  },
};
