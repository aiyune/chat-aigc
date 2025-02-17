import { defineConfig } from 'vitest/config'

export default defineConfig({
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: `import { h, Fragment } from 'preact'`,
    },
    test: {
        globals: true,
        alias: {
            '@': './src',
        },
        environment: 'jsdom',
    },
})
