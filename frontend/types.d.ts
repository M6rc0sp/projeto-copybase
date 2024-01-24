declare module 'global' {
    interface ImportMeta {
        env: Record<string, string>
    }
}