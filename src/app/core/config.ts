interface Config {
  [key: string]: string;
  auth: 'session' | 'token';
}

// Session auth needs to use the same origin anyway
export const config: Config = {
  apiUrl: 'http://10.3.1.32:8080/api',
  adminUrl: 'http://10.3.1.32:8080/admin',
  authUrl: 'http://10.3.1.32:8080/auth',
  auth: 'session'
};
