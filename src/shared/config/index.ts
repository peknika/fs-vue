const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return import.meta.env[key] || "";
};

export const PUNK_API_URL = getEnvVar("VITE_PUNK_API_URL");

export const isDevEnv = getEnvVar("DEV"); // Vite feature
export const isProdEnv = getEnvVar("PROD"); // Vite feature
