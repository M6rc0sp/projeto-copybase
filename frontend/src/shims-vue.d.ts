declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

interface ImportMetaEnv {
    VITE_APP_API_URL: string;
}

declare module "global" {
    interface ImportMeta {
        env: ImportMetaEnv;
    }
}
