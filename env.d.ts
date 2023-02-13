interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_PUNK_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
