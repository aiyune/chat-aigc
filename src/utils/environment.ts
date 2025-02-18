export function getEnvironment() {
    const env = process.env.NODE_ENV
    return {
        isDevelopment: env === 'development', // development environment
        isProduction: env === 'production', // production environment
        isTest: env === 'test', // test environment
        isServer: typeof window === 'undefined', // server environment
        isClient: typeof window !== 'undefined', // client environment
    }
}
