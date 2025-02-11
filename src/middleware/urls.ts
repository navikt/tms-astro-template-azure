import { getEnvironment } from "@src/utils/server/urls.ts";

const REDIRECT_URI = {
  local: "http://localhost:4321/",
  development: "https://tms-astro-template.ansatt.dev.nav.no/",
  production: "https://tms-astro-template.ansatt.nav.no/minside/",
};

export const redirectUri = REDIRECT_URI[getEnvironment()];
export const loginUrl = `/oauth2/login?redirect=${redirectUri}`;
