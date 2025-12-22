/// <reference types="vite/client" />

// Vaadin Router types
declare global {
  interface Window {
    vaadin: {
      router: {
        navigate: (path: string) => void;
      };
    };
  }
}

export {};

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
