/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_SERVER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
