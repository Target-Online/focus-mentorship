import appsettings from "./app.json";

const baseUrl = appsettings.ApiRestWebServer[appsettings.Environment];

export const loginsBaseUrl = baseUrl + "/api/logins/";
export const usersBaseUrl = baseUrl + "/api/users/";
export const emailsBaseUrl = baseUrl + "/api/emails/";
export const applicationsBaseUrl = baseUrl + "/api/applications/";
