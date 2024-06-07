/// <reference types="vite-plugin-svgr/client" />
declare type LauncherAPI = typeof import('../preload/index').API;

// Для использования window.launcherAPI
declare interface Window {
    launcherAPI: LauncherAPI;
}

// Но можно использовать и просто launcherAPI
declare const launcherAPI: LauncherAPI;

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
