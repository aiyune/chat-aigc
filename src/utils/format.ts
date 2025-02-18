export const formatSize = (size: number, digit: number = 2) => {
    if (!size && size !== 0) return '--'

    const kbSize = size / 1024
    if (kbSize < 1) return `${size.toFixed(digit)} B`
    if (kbSize < 1024) return `${kbSize.toFixed(digit)} KB`
    if (kbSize < 1_048_576) return `${(kbSize / 1024).toFixed(digit)} MB`
    return `${(kbSize / 1_048_576).toFixed(digit)} GB`
}

export const formatSizeSpeed = (size: number, digit: number = 2) => {
    if (!size && size !== 0) return '--'

    const kbSize = size / 1024
    if (kbSize < 1) return `${size.toFixed(digit)} B/s`
    if (kbSize < 1024) return `${kbSize.toFixed(digit)} KB/s`
    if (kbSize < 1_048_576) return `${(kbSize / 1024).toFixed(digit)} MB/s`
    return `${(kbSize / 1_048_576).toFixed(digit)} GB/s`
}

export const formatTime = (time: number) => {
    if (!time && time !== 0) return '--'

    const hour = Math.floor(time / 3600)
    const minute = Math.floor((time % 3600) / 60)
    const second = Math.floor(time % 60)

    return `${hour ? `${hour}h` : ''}${minute ? `${minute}m` : ''}${second}s`
}
