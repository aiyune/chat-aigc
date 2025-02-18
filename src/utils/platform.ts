import { UAParser } from 'ua-parser-js'
import { getEnvironment } from './environment'

export const getParser = () => {
    if (getEnvironment().isServer) return new UAParser('node')

    const userAgent = navigator.userAgent
    return new UAParser(userAgent)
}

export const getPlatform = () => {
    return getParser().getResult().os.name
}

export const getBrowser = () => {
    return getParser().getResult().browser.name
}

export const getDevice = () => {
    return getParser().getResult().device.type
}

export const getPlatformInfo = {
    platform: getPlatform(),
    browser: getBrowser(),
    device: getDevice(),
    isMobile: getDevice() === 'mobile',
}
